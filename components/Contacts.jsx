import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const Contact = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);


  return (
    <motion.div
    className="box"
    ref={ref}
    variants={boxVariant}
    initial="hidden"
    animate={control}
  >
    <div id='contact' className='w-[90%] lg:h-screen flex md:py-16 item-scenter'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#70d095]'>
          Contact
        </p>
        <h2 className='py-5'>Get In Touch</h2>
        <p className='font-bold text-lg pt-5'><span className='font-light'>Email me at</span> {`weikietng@gmail.com`}</p>

      </div>
    </div>
  </motion.div>
    

  );
};

export default Contact;