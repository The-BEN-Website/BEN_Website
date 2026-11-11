import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import QuantityControl from './QuantityControl';
import { formatNaira } from '../../data/store';

export default function ProductCard({ product, onAdd, disabled }) {
  const [colour, setColour] = useState(product.options[0]?.colour || '');
  const [view, setView] = useState(0);
  const [quantities, setQuantities] = useState({});
  const [notice, setNotice] = useState('');
  const option = product.options.find(o => o.colour === colour) || product.options[0];
  if (!option) return null;
  const image = option.images[view] || option.images[0];
  const selections = product.options.flatMap(o => o.sizes.map(size => ({
    productId: product.id, name: product.name, colour: o.colour, size,
    quantity: Number(quantities[JSON.stringify([o.colour, size])] || 0),
    price_kobo: product.price_kobo, image: o.images[0]?.url,
  }))).filter(i => i.quantity > 0);
  const count = selections.reduce((sum, item) => sum + item.quantity, 0);
  function add(event) {
    event.preventDefault();
    try {
      if (!selections.length) throw Error('Choose a quantity for at least one size.');
      if (Object.values(quantities).some(q => q !== '' && (!Number.isInteger(Number(q)) || Number(q) < 0))) throw Error('Use whole quantities from 0 to 100.');
      onAdd(selections);
      setNotice(`${count} × ${product.name} added to your bag.`);
      setQuantities({});
    } catch (e) { setNotice(e.message); }
  }
  return <article className="min-w-0 overflow-hidden rounded-2xl border border-line-strong bg-white">
    <div className="relative bg-[#eeeded]">
      <img src={image?.url} alt={`${product.name} in ${option.colour} — ${image?.label}`} loading="lazy" className="aspect-[4/3] w-full object-contain" />
      <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-medium">{image?.label}</span>
    </div>
    <div className="flex flex-wrap gap-2 border-b border-line px-5 py-3" aria-label={`${product.name} photo views`}>
      {option.images.map((img, index) => <button type="button" key={`${img.url}-${index}`} aria-pressed={index === view} onClick={() => setView(index)} className={`rounded-full px-4 py-2 text-sm focus-visible:outline-primary ${index === view ? 'bg-ink text-white' : 'bg-surface text-ink-soft'}`}>{img.label}</button>)}
    </div>
    <form onSubmit={add} className="space-y-5 p-5 sm:p-6">
      <div>
        {product.tagline && <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">{product.tagline}</p>}
        <div className="flex flex-wrap items-baseline justify-between gap-2"><h2 className="text-2xl font-semibold">{product.name}</h2><span className="text-lg font-semibold">{formatNaira(product.price_kobo)} <span className="text-xs font-normal text-secondary">each</span></span></div>
        {product.description && <p className="mt-3 text-sm leading-relaxed text-secondary">{product.description}</p>}
      </div>
      <fieldset><legend className="mb-2 text-sm font-medium">Colour <span className="ml-1 font-normal text-secondary">{option.colour}</span></legend>
        <div className="flex flex-wrap gap-2">{product.options.map(o => <button type="button" key={o.colour} aria-pressed={option.colour === o.colour} onClick={() => { setColour(o.colour); setView(0); setNotice(''); }} className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${option.colour === o.colour ? 'border-ink bg-surface' : 'border-line-strong'}`}>
          {['black', 'white'].includes(o.colour.toLowerCase()) && <span className="h-4 w-4 rounded-full border border-gray-300" style={{ backgroundColor: o.colour.toLowerCase() }} />}{o.colour}
        </button>)}</div>
      </fieldset>
      <fieldset><legend className="text-sm font-medium">How many of each size?</legend><p className="mb-3 mt-1 text-xs text-secondary">Add quantities below. Switch colours to select more.</p>
        <div className="grid grid-cols-2 gap-3">{option.sizes.map(size => {
          const key = JSON.stringify([option.colour, size]);
          return <div key={key} className="text-center text-sm font-medium"><p className="mb-2">{size}</p><QuantityControl label={`${product.name}, ${option.colour}, ${size}`} value={quantities[key] ?? 0} onChange={quantity => setQuantities({ ...quantities, [key]: quantity })} disabled={disabled} /></div>;
        })}</div>
      </fieldset>
      {count > 0 && <div className="rounded-lg bg-surface p-3 text-sm"><p className="mb-1 font-medium">Your selection</p><ul>{selections.map(i => <li key={`${i.colour}-${i.size}`}>{i.quantity} × {i.colour} / {i.size}</li>)}</ul><p className="mt-2 font-semibold">{formatNaira(count * product.price_kobo)}</p></div>}
      <Button type="submit" disabled={disabled || !count || count > 100} className="w-full !bg-ink !py-3 hover:!bg-ink-soft">{count ? `Add ${count} to bag` : 'Choose your quantities'} <span aria-hidden="true">+</span></Button>
      <p role="status" className="min-h-[20px] text-sm text-secondary">{count > 100 ? 'You can order up to 100 items at a time.' : notice}</p>
    </form>
  </article>;
}
