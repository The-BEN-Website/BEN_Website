import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import {firestore} from '../../Firebase/firebase';
import { addDoc,collection } from '@firebase/firestore'

const Form = () => {

  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const ref = collection(firestore, 'contact_us')

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3lsd8jk', 'template_2jx8bgu', form.current, 'BIkSnR3hzO9lk2ePH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Your Message has been submitted🚀")

      let data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
      };

      try {
      addDoc(ref, data);
    }
    catch (e) {
      console.log(e)
    }

      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    }

  return (
    <form className="w-11/12 lg:w-11/12 h-fit rounded flex flex-col gap-6 m-auto" onSubmit={sendEmail} ref={form}>
      <div className="flex gap-10">
        <span className="flex flex-col w-10/12">
          <label className="font-my_font">Name</label>
          <input type="text" placeholder="Enter Your Name" className="text-gray-400 border border-gray-200 rounded w-full py-3 px-2 font-my_font" ref={nameRef} name="name"/>
        </span>

        <span className="flex flex-col w-10/12">
          <label className="font-my_font">Email</label>
          <input type="email" placeholder="Enter Your Email" className="text-gray-400 border border-gray-200 rounded w-full py-3 px-2 font-my_font" ref={emailRef} name="email"/>
        </span>
      </div>
      
      <div className="flex gap-10">
        <span className="flex flex-col w-10/12">
          <label className="font-my_font">Phone Number</label>
          <input type="text" placeholder="Enter Your Phone Number" className="text-gray-400 border border-gray-200 rounded w-full py-3 px-2 font-my_font" ref={nameRef} name="name"/>
        </span>

        <span className="flex flex-col w-10/12">
          <label className="font-my_font">Date of Birth</label>
          <input type="date" placeholder="Enter Your Email" className="text-gray-400 border border-gray-200 rounded w-full py-3 px-2 font-my_font" ref={emailRef} name="email"/>
        </span>
      </div>
      

      <button className='bg-my-red text-white px-6 w-5/12 py-3 font-semibold rounded-sm font-my_font m-auto mb-5'>SUBMIT</button>
    </form>
  )
}

export default Form