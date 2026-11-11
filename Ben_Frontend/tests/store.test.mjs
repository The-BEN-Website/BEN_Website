import {test} from 'node:test';
import assert from 'node:assert/strict';
import {addCartItem,cartTotal,reconcileCart,readSavedCart} from '../src/data/store.js';
const line={productId:'ben',name:'BEN shirt',colour:'Black',size:'M',quantity:2,price_kobo:700000};
test('one product can be ordered in several sizes and colours together',()=>{
 const items=[line,{...line,size:'XL'},{...line,colour:'White',size:'L',quantity:1}];
 const cart=items.reduce(addCartItem,[]);
 assert.equal(cart.length,3);assert.equal(cartTotal(cart),3500000);
 assert.equal(addCartItem(cart,line)[0].quantity,4);
});
test('batch exceeding quantity limit is rejected without changing original cart',()=>{
 const cart=[line];
 assert.throws(()=>addCartItem(cart,{...line,quantity:99}),/100/);
 assert.equal(cart[0].quantity,2);
});
test('catalogue changes require explicit price acceptance and unavailable variants are flagged',()=>{
 const products=[{id:'ben',name:'BEN shirt',price_kobo:800000,options:[{colour:'Black',sizes:['M'],images:[]}]}];
 const rows=reconcileCart([line,{...line,size:'XXL'}],products);
 assert.equal(rows[0].price_kobo,700000);assert.equal(rows[0].currentPrice,800000);
 assert.equal(rows[1].unavailable,true);
});
test('invalid persisted carts are discarded',()=>{
 assert.deepEqual(readSavedCart('{broken'),[]);
 assert.deepEqual(readSavedCart(JSON.stringify([{...line,quantity:-1}])),[]);
});
