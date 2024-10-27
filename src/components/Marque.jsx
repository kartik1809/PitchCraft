import React from 'react';
import { motion } from 'framer-motion';

const Marque = () => {
  return (
    <div className='w-full py-10 bg-[#004D43] rounded-tr-3xl rounded-tl-3xl overflow-hidden'> {/* Added overflow-hidden */}
      <div className='border-t-2 border-b-2 border-zinc-300 flex items-center gap-10'>
        <motion.h1
          initial={{ x: '0%' }}  // Start from the right
          animate={{ x: '-100%' }} // Move to the left
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 10,
          }}
          className='font-["Test_Founders_Grotesk"] text-[17vw] leading-none whitespace-nowrap uppercase'
        >
          We Are PitchCraft
        </motion.h1>
        <motion.h1
          initial={{ x: '0%' }}  // Start from the right
          animate={{ x: '-100%' }} // Move to the left
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 10,
          }}
          className='font-["Test_Founders_Grotesk"] text-[17vw] leading-none whitespace-nowrap uppercase'
        >
          We Are PitchCraft
        </motion.h1>
        <motion.h1
          initial={{ x: '0%' }}  // Start from the right
          animate={{ x: '-100%' }} // Move to the left
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 10,
          }}
          className='font-["Test_Founders_Grotesk"] text-[17vw] leading-none whitespace-nowrap uppercase'
        >
          We Are PitchCraft
        </motion.h1>
      </div>
      
    </div>
  );
}

export default Marque;
