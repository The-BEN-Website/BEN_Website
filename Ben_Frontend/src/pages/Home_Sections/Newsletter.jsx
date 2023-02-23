import React, {useRef, useState} from 'react'
import Subscribe from '../../assets/Home_assets/Subscribe.webp'
import {firestore} from '../../Firebase/firebase';
import { addDoc,collection } from '@firebase/firestore'

const Newsletter = () => {
  const [message, setMessage] = useState('');
  const form = useRef();
  const emailRef = useRef();
  const ref = collection(firestore, 'subscribe')

  const subscribe = (e) => {
    e.preventDefault();
    alert("Thank you for Subscribing🚀")

  let data = {
    email: emailRef.current.value,
    };

    try {
    addDoc(ref, data);
    }
    catch (e) {
      console.log(e)
    }

    emailRef.current.value = "";
}
  return (
    <div className="h-[35rem] md:h-[40rem] lg:h-[30rem] w-full flex font-my_font">
        <div className='flex flex-col lg:flex-row w-10/12 m-auto gap-8 lg:gap-16 items-center text-black'>
            <img src={Subscribe} loading="lazy" className="w-3/5 h-8/12 md:w-6/12 md:h-8/12 lg:w-5/12" alt="" />
            <form className='w-11/12 h-fit md:w-1/2 flex flex-col gap-5 mb-5' ref={form} onSubmit={subscribe} >
                <h2 className='text-center text-3xl sm:text-left sm:text-3xl font-bold text-my-black font-my_font'>Subscribe to Our Newsletter</h2>
                <p className='text-xl text-center sm:text-left font-my_font'>Subscribe to our newsletter and stay updated!</p>
                <input type="email" name="email" id="email" value={message} placeholder="Your Email?"className='border border-my-red text-my-black px-8 py-3 font-semibold rounded-sm ' ref={emailRef} onChange={event => setMessage(event.target.value)} />
                <button className='bg-my-red text-white px-8 py-3 font-semibold rounded-sm  font-my_font' disabled={!message}>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Newsletter