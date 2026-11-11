import React, {useCallback,useEffect,useRef,useState} from 'react';
import {Link,useSearchParams} from 'react-router-dom';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import ProductCard from '../sections/store/ProductCard';
import usePageMeta from '../hooks/usePageMeta';
import {loadCampCatalogue,campStoreRequest,checkoutConfigured} from '../api/store';
import {addCartItem,cartTotal,formatNaira,lineKey,readSavedCart,reconcileCart} from '../data/store';
const CART_KEY='ben-camp-cart-v1', PENDING_KEY='ben-camp-checkout-v1';
function read(key){try{return localStorage.getItem(key);}catch{return null;}}
function write(key,value){try{localStorage.setItem(key,JSON.stringify(value));}catch{/* Cart still works in memory. */}}
function pending(){try{return JSON.parse(read(PENDING_KEY));}catch{return null;}}
function safeCheckoutUrl(value){try{const u=new URL(value);return u.protocol==='https:'&&u.hostname==='checkout.paystack.com'?u.href:null;}catch{return null;}}
const inputClass='mt-2 block w-full rounded-lg border border-line-strong bg-white px-3 py-3 text-base';
export default function Store(){
 const [params,setParams]=useSearchParams();
 const reference=params.get('reference');
 usePageMeta({title:'Store',description:'Shop BEN shirts and the HSCM collection. Choose your colours and sizes, pay online and collect at camp.',noindex:Boolean(reference)});
 const [catalogue,setCatalogue]=useState(null),[loadError,setLoadError]=useState('');
 const [cart,setCart]=useState(()=>readSavedCart(read(CART_KEY)));
 const [busy,setBusy]=useState(false),[error,setError]=useState(''),[ready,setReady]=useState(false);
 const [receipt,setReceipt]=useState(null),[checking,setChecking]=useState(false),[checkError,setCheckError]=useState('');
 const [lastCheckout,setLastCheckout]=useState(pending);
 const checkoutLock=useRef(false);
 const [customer,setCustomer]=useState({name:'',email:'',phone:''});
 const load=useCallback(async()=>{setLoadError('');try{setCatalogue(await loadCampCatalogue());}catch(e){setLoadError(e.message);}},[]);
 useEffect(()=>{load();},[load]);
 useEffect(()=>{if(checkoutConfigured)campStoreRequest('status').then(r=>setReady(r.ready)).catch(()=>setReady(false));},[]);
 useEffect(()=>{write(CART_KEY,cart);},[cart]);
 const checkPayment=useCallback(async()=>{
  if(!reference)return;
  setChecking(true);setCheckError('');setReceipt(null);
  try{
   const result=await campStoreRequest('verify',{reference});setReceipt(result);
   if(result.status==='paid'){
    const previous=pending();
    if(previous?.reference===reference){
     setCart(current=>JSON.stringify(current)===JSON.stringify(previous.items)?[]:current);
     write(PENDING_KEY,null);setLastCheckout(null);
    }
   }
  }catch(e){setCheckError(e.message);}finally{setChecking(false);}
 },[reference]);
 useEffect(()=>{checkPayment();},[checkPayment]);
 const lines=reconcileCart(cart,catalogue?.products || []);
 const changed=lines.some(i=>!i.unavailable&&i.currentPrice!==i.price_kobo);
 const unavailable=lines.some(i=>i.unavailable);
 const count=cart.reduce((n,i)=>n+i.quantity,0);
 function add(items){const next=items.reduce((current,item)=>addCartItem(current,item),cart);setCart(next);setError('');}
 function changeQuantity(key,quantity){if(!Number.isInteger(quantity)||quantity<1)return;setCart(current=>{const next=current.map(i=>lineKey(i)===key?{...i,quantity}:i);return next.reduce((n,i)=>n+i.quantity,0)<=100?next:current;});}
 async function checkout(event){
  event.preventDefault();if(checkoutLock.current)return;
  checkoutLock.current=true;setBusy(true);setError('');
  try{
   const items=cart.map(({productId,colour,size,quantity,price_kobo})=>({productId,colour,size,quantity,price_kobo}));
   const normalized={name:customer.name.trim(),email:customer.email.trim().toLowerCase(),phone:customer.phone.trim()};
   // Persist a digest, never the customer's contact details.
   const bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(JSON.stringify({items,customer:normalized})));
   const fingerprint=Array.from(new Uint8Array(bytes)).map(b=>b.toString(16).padStart(2,'0')).join('');
   const old=pending();
   const checkoutReference=old?.fingerprint===fingerprint?old.reference:`BEN-${crypto.randomUUID()}`;
   const next={reference:checkoutReference,fingerprint,items:cart};write(PENDING_KEY,next);setLastCheckout(next);
   const result=await campStoreRequest('initialize',{reference:checkoutReference,items,customer:normalized});
   if(result.paid){setParams({reference:checkoutReference});return;}
   const url=safeCheckoutUrl(result.authorization_url);
   if(!url)throw Error('Unable to open checkout. Please try again.');
   write(PENDING_KEY,{...next,url});setLastCheckout({...next,url});
   window.location.assign(url);
  }catch(e){setError(e.message);await load();}finally{setBusy(false);checkoutLock.current=false;}
 }
 return <main className="pb-20"><Container>
 <div className="flex items-center justify-between border-b border-line py-4 text-sm"><Link to="/" className="text-secondary hover:text-ink">Home / <span className="text-ink">Store</span></Link><a href="#camp-bag" className="font-medium">Your bag ({count})</a></div>
 <header className="py-10 md:py-14"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Believers Equipping Network</p><h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">Wear the message.<br/><span className="text-secondary">Live it every day.</span></h1><p className="mt-5 max-w-xl text-base leading-relaxed text-secondary">Shop BEN shirts and the HSCM collection. Mix your colours and sizes, then collect your order at camp.</p><div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm"><span>01 &nbsp; Choose your shirts</span><span>02 &nbsp; Pay with Paystack</span><span>03 &nbsp; Collect at camp</span></div></header>
 {reference&&<section aria-labelledby="payment-heading" className="mb-8 rounded-2xl border border-line-strong bg-surface p-6"><h2 id="payment-heading" className="text-2xl font-semibold">{checking?'Checking your payment…':receipt?.status==='paid'?'Your order is confirmed':'Check your payment'}</h2><p className="mt-3 break-all font-mono text-sm">{reference}</p>{checkError&&<p role="alert" className="mt-3">{checkError}</p>}{receipt?.status==='paid'?<><p className="mt-3">{receipt.collected?'This order has been collected.':catalogue?.settings.collection_note || 'Collect your order at camp. Bring this order reference.'}</p><ul className="my-4 space-y-2">{receipt.items.map((i,index)=><li key={index}>{i.quantity} × {i.name} · {i.colour} / {i.size}</li>)}</ul><p className="font-semibold">Merchandise paid: {formatNaira(receipt.amount_kobo)}</p><p className="mt-2 text-sm text-secondary">Processing fees are separate. See your Paystack receipt for the full amount charged. Save this page or take a screenshot for collection.</p></>:<><p className="mt-3 text-sm">If you have paid, check again before making another payment.</p><Button className="mt-4" onClick={checkPayment} disabled={checking}>Check payment</Button>{lastCheckout?.reference===reference&&safeCheckoutUrl(lastCheckout.url)&&<a className="ml-4 underline" href={safeCheckoutUrl(lastCheckout.url)}>Return to Paystack</a>}</>}<button type="button" className="mt-5 block text-sm underline" onClick={()=>{setParams({});setReceipt(null);}}>Continue shopping</button></section>}
 {!reference&&lastCheckout?.reference&&<p className="mb-6 rounded-xl bg-surface p-4 text-sm">Already started a payment? <button type="button" className="font-medium underline" onClick={()=>setParams({reference:lastCheckout.reference})}>Check your order</button>{safeCheckoutUrl(lastCheckout.url)&&<> or <a href={safeCheckoutUrl(lastCheckout.url)} className="underline">return to checkout</a></>}.</p>}
 {loadError?<div role="alert" className="mb-8 rounded-xl border border-line p-6"><p>{loadError}</p><Button className="mt-3" variant="secondary" onClick={load}>Try again</Button></div>:!catalogue?<p role="status" className="py-12">Loading the collection…</p>:null}
 {catalogue&&<div className="grid items-start gap-8 xl:grid-cols-[minmax(0,1fr)_340px]"><section aria-label="Store collection" className="grid min-w-0 gap-6 md:grid-cols-2">{catalogue.products.map(p=><ProductCard key={`${p.id}-${p.updated_at}`} product={p} onAdd={add} disabled={busy}/>)}{!catalogue.products.length&&<p className="py-10 text-secondary">New products are coming soon. Check back for our next release.</p>}</section>
 <aside id="camp-bag" className="scroll-mt-32 rounded-2xl border border-line-strong bg-surface p-5 sm:p-6"><h2 className="text-xl font-semibold">Your bag <span className="text-secondary">({count})</span></h2><p className="mt-1 text-sm text-secondary">Mix colours, sizes and designs.</p>
 {!cart.length?<p className="py-8 text-sm text-secondary">Your bag is empty. Choose a shirt and size to get started.</p>:<><ul className="mt-5 divide-y divide-line-strong">{lines.map(i=><li key={lineKey(i)} className="py-4"><div className="flex gap-3"><img src={i.image} alt="" className="h-20 w-16 rounded-lg bg-white object-contain"/><div className="min-w-0 flex-1"><p className="font-medium">{i.name}</p><p className="text-sm text-secondary">{i.colour} / {i.size}</p><p className="mt-1 text-sm">{formatNaira(i.quantity*i.price_kobo)}</p></div><button disabled={busy} type="button" aria-label={`Remove ${i.name}, ${i.colour}, ${i.size}`} className="self-start px-1 text-xl" onClick={()=>setCart(cart.filter(row=>lineKey(row)!==lineKey(i)))}>×</button></div><div className="mt-3 flex items-center gap-3"><button type="button" disabled={busy||i.quantity<=1} aria-label={`Decrease ${i.name}, ${i.colour}, ${i.size}`} className="h-8 w-8 rounded border border-line-strong bg-white disabled:opacity-40" onClick={()=>changeQuantity(lineKey(i),i.quantity-1)}>−</button><span className="text-sm">{i.quantity}</span><button type="button" disabled={busy||count>=100} aria-label={`Increase ${i.name}, ${i.colour}, ${i.size}`} className="h-8 w-8 rounded border border-line-strong bg-white disabled:opacity-40" onClick={()=>changeQuantity(lineKey(i),i.quantity+1)}>+</button></div>{i.unavailable?<p className="mt-2 text-sm text-red-700">No longer available. Please remove this item.</p>:i.currentPrice!==i.price_kobo?<p className="mt-2 text-sm text-red-700">Price changed to {formatNaira(i.currentPrice)} each.</p>:null}</li>)}</ul>
 {changed&&<Button variant="secondary" className="my-3 w-full" onClick={()=>setCart(lines.map(({unavailable,currentPrice,...i})=>({...i,price_kobo:currentPrice || i.price_kobo})))}>Accept updated prices</Button>}
 <div className="mt-3 flex justify-between border-t border-line-strong py-5 text-lg font-semibold"><span>Subtotal</span><span>{formatNaira(cartTotal(cart))}</span></div><p className="mb-5 text-sm leading-relaxed text-secondary">Paystack processing fees are added at checkout. You’ll see the final amount before paying.</p><div className="mb-6 text-sm"><p className="font-medium">Collection at camp</p><p className="mt-1 leading-relaxed text-secondary">{catalogue.settings.collection_note}</p></div>
 <form onSubmit={checkout} className="space-y-4"><fieldset disabled={busy} className="space-y-4"><legend className="mb-3 font-semibold">Your details</legend>{[{name:'name',label:'Full name',type:'text',autoComplete:'name',maxLength:100},{name:'email',label:'Email address',type:'email',autoComplete:'email',maxLength:254},{name:'phone',label:'Phone number',type:'tel',autoComplete:'tel',maxLength:25}].map(f=><label key={f.name} className="block text-sm font-medium">{f.label}<input {...f} label={undefined} required value={customer[f.name]} onChange={e=>setCustomer({...customer,[f.name]:e.target.value})} className={inputClass}/></label>)}</fieldset>
 {error&&<p role="alert" className="text-sm text-red-700">{error}</p>}
 {(!catalogue.settings.checkout_open||!ready)&&<p className="text-sm text-secondary">Checkout is currently closed. You can still put together your bag and return when preorders open.</p>}
 <Button type="submit" disabled={busy||unavailable||changed||!ready||!catalogue.settings.checkout_open} className="w-full !py-3">{busy?'Opening Paystack…':'Continue to Paystack'}</Button><p className="text-xs leading-relaxed text-secondary">You’ll complete payment securely on Paystack. Your preorder is confirmed once payment is verified. By ordering, you agree to our <Link to="/terms" className="underline">terms</Link> and <Link to="/privacy" className="underline">privacy policy</Link>.</p></form></>}
 </aside></div>}
 </Container></main>;
}
