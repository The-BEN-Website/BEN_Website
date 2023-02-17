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
    <form className="w-11/12 lg:w-1/2 h-[36rem] bg-white rounded drop-shadow-[0_35px_35px_rgba(0,0,0,0.13)] flex flex-col gap-6 m-auto justify-center" onSubmit={sendEmail} ref={form}>
      <span className="flex flex-col w-10/12 mx-auto ">
        <label className="font-my_font">Name</label>
        <input type="text" placeholder="Enter Your Name" className="text-gray-400 border border-gray-200 rounded w-full py-3 px-2 font-my_font" ref={nameRef} name="name"/>
      </span>

      <span className="flex flex-col w-10/12 mx-auto ">
        <label className="font-my_font">Email</label>
        <input type="email" placeholder="Enter Your Email" className="text-gray-400 border border-gray-200 rounded w-full py-3 px-2 font-my_font" ref={emailRef} name="email"/>
      </span>

      <span className="flex flex-col w-10/12 mx-auto ">
        <label className="font-my_font">Message</label>
        <textarea rows="8" className="text-gray-400 border border-gray-200 rounded w-full py-3 px-2 font-my_font" ref={messageRef} placeholder="Send us a message" name="messages"></textarea>
      </span>

      <button className="text-white bg-my-red w-10/12 mx-auto py-3 rounded font-my_font">Submit</button>
    </form>
  )
}

export default Form