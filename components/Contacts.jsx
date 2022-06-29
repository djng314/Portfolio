import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Contact = () => {
  

  return (
    <div id='contact' className='w-full lg:h-screen flex md:py-16 item-scenter'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#70d095]'>
          Contact
        </p>
        <h2 className='py-5'>Get In Touch</h2>
        <p className='font-bold text-lg pt-5'><span className='font-light'>Email me at</span> {`weikietng@gmail.com`}</p>

      </div>
    </div>
  );
};

export default Contact;