import React from 'react'

const Values = () => {
  return (
    <div className="w-10/12 m-auto h-auto flex flex-col gap-7 " id="values">
      <h2 className="font-bold text-3xl text-center mb-5 font-my_font">
        Our Values
      </h2>
      <section className="flex md:flex-row flex-col w-full gap-10 ">
        {/* border-[0.1rem] border-red-600 p-4 rounded-xl */}

        <span className="flex flex-col gap-3 ">
          <h2 className="text-xl font-semibold text-center md:text-left  px-5 py-2 bg-my-red w-fit text-white rounded-lg font-my_font">
            Our Identity
          </h2>
          <p className="text-lg font-medium font-my_font">
            We are a Bible-believing church that considers God's word to be the
            primary and only source of guidance for our conduct and practices.
            We believe in the Bible's doctrine of salvation by faith alone in
            Christ Jesus..
          </p>
        </span>
        <span className="flex flex-col gap-3 ">
          <h2 className="px-5 py-2 bg-my-red w-fit text-white rounded-lg text-xl font-semibold text-center md:text-left font-my_font">
            The Local Church
          </h2>
          <p className="text-lg font-medium font-my_font">
            We train believers in the work of the ministry in an atmosphere of
            love, fellowship, faith and power. We equip believers with the Word
            to the intent that the same is grounded and able to teach others the
            same also.
          </p>
        </span>
      </section>

      {/* <section className="flex md:flex-row flex-col w-full gap-10">
        <span className="flex flex-col gap-3  ">
          <h2 className="text-xl font-semibold text-center md:text-left  px-5 py-2 bg-my-red w-fit text-white rounded-lg font-my_font">
            Kingdom Culture
          </h2>
          <p className="text-lg font-medium font-my_font">
            Who we believe we are dictates how we operate in life. We have a
            passion for connecting people to their identity in God, so we can
            explore the fullness of the life we have been created to experience.
            Knowing God is key to understanding our own identity and being
            comfortable in our own skin.
          </p>
        </span>
        <span className="flex flex-col gap-3 ">
          <h2 className="text-xl font-semibold text-center md:text-left px-5 py-2 bg-my-red w-fit text-white rounded-lg font-my_font">
            His Presence
          </h2>
          <p className="text-lg font-medium font-my_font">
            Who we believe we are dictates how we operate in life. We have a
            passion for connecting people to their identity in God, so we can
            explore the fullness of the life we have been created to experience.
            Knowing God is key to understanding our own identity and being
            comfortable in our own skin.
          </p>
        </span> 
      </section>*/}
    </div>
  );
}

export default Values