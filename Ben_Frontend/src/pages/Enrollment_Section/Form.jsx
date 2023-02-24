import React, {useRef} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {firestore} from '../../Firebase/firebase';
import { addDoc,collection } from '@firebase/firestore'

const Form = () => {
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const dateOfBirthRef = useRef();
  const ref = collection(firestore, '/enrolment')
  // const btnRef = useRef();
  const [state, handleSubmit] = useForm("moqzdbpe");

  // const disableOnClick = event => event.currentTarget.disabled = true


  const sendEmail = (e) => {
    e.preventDefault();
    alert("Thank you for filling the form")
      try {
        let data = {
          name: nameRef.current.value,
          email: emailRef.current.value,
          number: numberRef.current.value,
          dateOfBirth: dateOfBirthRef.current.value,
        }
        addDoc(ref, data);
        document.getElementById("form").reset();
      }

      catch (e) {
        console.log(e, "it is looping")
      }
    }
    
  return (
    <section onSubmit={sendEmail} className='w-11/12 sm:w-11/12 lg:w-full h-fit rounded flex flex-col gap-6 m-auto'>
      <form id="form" className="w-full h-fit rounded flex flex-col gap-6 m-auto" onSubmit={handleSubmit} ref={form}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <span className="flex flex-col md:w-full lg:w-full">
            <label className="font-my_font">Name</label>
            <input type="text" placeholder="Enter Your Name" className="text-gray-400 border border-gray-200 rounded w-full py-3 px-2 font-my_font" ref={nameRef} name="Name"/>
            <ValidationError 
            prefix="name" 
            field="name"
            errors={state.errors}
          />
          </span>

          <span className="flex flex-col md:w-full lg:w-full">
            <label className="font-my_font">Email</label>
            <input type="email" placeholder="Enter Your Email" className="text-gray-400 border border-gray-200 rounded w-full py-3 px-2 font-my_font" ref={emailRef} name="Email"/>
            <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          </span>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <span className="flex flex-col md:w-full lg:w-full">
            <label className="font-my_font">Phone Number</label>
            <input type="text" placeholder="Enter Your Phone Number" className="text-gray-400 border border-gray-200 rounded w-full py-3 px-2 font-my_font" ref={numberRef} name="Phone Number"/>
            <ValidationError 
            prefix="number" 
            field="number"
            errors={state.errors}
          />
          </span>

          <span className="flex flex-col md:w-full lg:w-full">
            <label className="font-my_font">Date of Birth</label>
            <input type="date" placeholder="Enter Your Date of Birth" className="text-gray-400 border border-gray-200 rounded w-full py-3 px-2 font-my_font" ref={dateOfBirthRef} name="Date of Birth"/>
            <ValidationError 
            prefix="dateOfBirth" 
            field="dateOfBirth"
            errors={state.errors}
          />
          </span>
        </div>
        

        <button className='bg-my-red text-white px-6 w-full md:w-1/2 py-3 font-semibold rounded-sm font-my_font m-auto mb-5' type="submit" disabled={state.submitting}>SUBMIT</button>
      </form>
    </section>
  )
}

export default Form