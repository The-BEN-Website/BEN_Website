import React from 'react';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
export default function StoreBanner(){
 return <section className="my-10 md:my-16"><Container><div className="flex flex-col justify-between gap-6 rounded-2xl bg-ink p-7 text-white sm:p-10 md:flex-row md:items-center"><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">The BEN Store</p><h2 className="text-3xl font-semibold">Wear the message.</h2><p className="mt-3 max-w-xl text-white/75">Explore BEN shirts and the HSCM collection. Choose your favourites and collect your order at camp.</p></div><Button to="/store" className="shrink-0 !bg-white !px-6 !py-3 !text-ink">Visit the Store <span aria-hidden="true">↗</span></Button></div></Container></section>;
}
