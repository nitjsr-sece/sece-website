import React from "react";
import iloveece from "../../assets/1.png";
const Card = () => {
  return (
    <div style={{backgroundColor:"yellow",margin:"auto"}}>
      <a
        href="#"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" style={{backgroundColor:"yellow",margin:"auto",width:"105rem"}}
      >
        <img
          class="object-cover w-full rounded-t-lg h-50 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={iloveece}
          alt=""
          style={{ height: "22rem" }}
        />
        <div class="flex flex-col justify-between p-6 leading-normal">
          {/* <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5> */}
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {" "}
            Welcome to the Society of Electronics and Communication Engineering,
            where innovation meets excellence in the realm of advancing
            technology. Our vision is to create a space where fresh ideas can be
            turned into reality through passion and determination. We organize a
            variety of events, workshops, and webinars throughout the year to
            keep students informed about the latest industry trends in the field
            of electronics and software. This enables students to explore both
            domains and gain a clear understanding of their career paths.
          </p>
        </div>
      </a>
    </div>
  );
};

export default Card;
