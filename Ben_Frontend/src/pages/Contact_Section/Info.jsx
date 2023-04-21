import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Info = () => {
  return (
    <div className="w-11/12 m-auto lg:w-1/2 h-auto flex flex-col lg:m-auto gap-3">
      <span className="text-my-black flex flex-col gap-3">
        <h2 className="text-3xl font-medium font-my_font">How Can We Help?</h2>
        <p className="font-my_font">
          We’d love to help get you connected to one of our locations, a small
          group, or a volunteer opportunity. Feel free to fill out the contact
          form to receive a reply, or contact us via phone.
        </p>
      </span>

      <div className="mt-5 flex flex-col gap-4">
        <span className="flex gap-5">
          <a href="#" className="p-3 bg-white rounded-full drop-shadow-xl">
            <LocationOnOutlinedIcon fontSize="medium" />
          </a>
          <p className="text-contact-text">
            <b className="text-xl text-my-black font-my_font">Church Office</b>
            <br />
            Edo University Iyamho, Auchi, Edo State
          </p>
        </span>

        <span className="flex gap-5">
          <a href="#" className="p-3 bg-white rounded-full drop-shadow-xl">
            <LocalPhoneOutlinedIcon fontSize="medium" />
          </a>
          <p className="text-contact-text">
            <b className="text-xl text-my-black font-my_font">Phone</b>
            <br />
            +234 703 539 9975
          </p>
        </span>

        <span className="flex gap-5">
          <a href="#" className="p-3 bg-white rounded-full drop-shadow-xl">
            <MailOutlineIcon fontSize="medium" />
          </a>
          <p className="text-contact-text">
            <b className="text-xl text-my-black font-my_font">Email</b>
            <br />
            mediabelieversequippingnetwork@gmail.com
          </p>
        </span>
      </div>
    </div>
  );
}

export default Info