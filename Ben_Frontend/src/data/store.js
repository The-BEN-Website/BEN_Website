// Product names, prices, options and galleries come from the admin catalogue.
import { SITE_URL } from '../config/site.js';

// Seed images ship with the website. Resolve them on the current deployment,
// rather than sending local/preview browsers to an older production release.
export function storeImageUrl(value) {
  if (!value) return value;
  try {
    const url = new URL(value, SITE_URL);
    const site = new URL(SITE_URL);
    if (url.hostname.replace(/^www\./, '') === site.hostname.replace(/^www\./, '') &&
        url.pathname.startsWith('/images/camp-store/')) {
      return `${url.pathname}${url.search}${url.hash}`;
    }
  } catch { /* Leave malformed URLs to the image component. */ }
  return value;
}

export const MAX_QUANTITY = 100;
export const formatNaira = (kobo) => new Intl.NumberFormat('en-NG', {style:'currency',currency:'NGN',maximumFractionDigits:2}).format(kobo/100);
export const lineKey = ({productId,colour,size}) => JSON.stringify([productId,colour,size]);
export const cartTotal = (items) => items.reduce((sum,item)=>sum+item.quantity*item.price_kobo,0);
export function readSavedCart(raw) {
 try {
  const items=JSON.parse(raw);
  if(!Array.isArray(items) || items.length>100)return [];
  return items.filter(i=>i && typeof i.productId==='string' && typeof i.colour==='string' && typeof i.size==='string' && Number.isInteger(i.quantity) && i.quantity>0 && i.quantity<=100 && Number.isInteger(i.price_kobo) && i.price_kobo>0);
 }catch{return [];}
}
export function reconcileCart(items,products) {
 return items.map(item=>{
  const product=products.find(p=>p.id===item.productId);
  const option=product?.options.find(o=>o.colour===item.colour && o.sizes.includes(item.size));
  return {...item,unavailable:!option,currentPrice:product?.price_kobo,name:product?.name || item.name,image:option?.images[0]?.url || item.image};
 });
}
export function addCartItem(items,item) {
 const quantity=items.reduce((n,i)=>n+i.quantity,0)+item.quantity;
 if(!Number.isInteger(item.quantity) || item.quantity<1 || quantity>MAX_QUANTITY)throw Error('Choose a quantity from 1 to 100. You can order up to 100 items at a time.');
 const existing=items.find(i=>lineKey(i)===lineKey(item));
 return existing?items.map(i=>lineKey(i)===lineKey(item)?{...item,quantity:i.quantity+item.quantity}:i):[...items,item];
}
