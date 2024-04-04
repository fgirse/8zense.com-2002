'use client'
import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';

interface Step {
  id: number;
  text: string;
  animation: string;
}
 const HowItWorks: React.FC = () => {
  const [step, setStep] = useState<number>(0);

  const steps: Step[] = [
    {
      id: 1,
      text: "Erstellen Sie einen Account auf unserer website  von 8zense.com.",
      animation: "https://assets3.lottiefiles.com/packages/lf20_JExdDIS87T.json",
    },
    {
      id: 2,
      text: "Vereinbaren Sie ein Zielgespräch mit Fernanda zur Definition Ihrer Wünsche und Ideen",
      animation: "https://assets3.lottiefiles.com/packages/lf20_dvpgo0cl.json",
    },
    {
      id: 3,
      text: "Find an accountability partner to help you stay on track. Your accountability partner can be a friend, family member, or colleague.",
      animation: "https://assets8.lottiefiles.com/packages/lf20_7sl35zjk.json",
    },
    {
      id: 4,
      text: "As you work towards your goals, you will need to provide proof of activity.",
      animation: "https://assets3.lottiefiles.com/private_files/lf30_p9it5a2a.json",
    },
    {
      id: 5,
      text: "Your referee will review your proof of activity and provide you with feedback. This feedback can help you to identify areas where you need to improve.",
      animation: "https://assets3.lottiefiles.com/packages/lf20_GgLE0z7sML.json",
    },
    
  ];

  const handleStepChange = useCallback(() => {
    setStep((prevStep) => (prevStep + 1) % steps.length);
  }, [steps.length]);

  useEffect(() => {
    const interval = setInterval(handleStepChange, 5000);
    return () => clearInterval(interval);
  }, [handleStepChange]);

  return (
    <motion.div
      className=" flex flex-col sm:min-h-screen h-full"
      key={steps[step].id} // Add a unique key to trigger motion animation on step change
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{
        duration: 1, // Adjust the duration as desired
      }}
    >
      <div className='h-[100%] ss:p-10 p-5 flex flex-col items-center justify-center '>
        <div className="grid grid0-cols-2 gap-4">
          <p className="text-sm md:text-base text-slate-800 font-light mt-2 leading-relaxed text-center">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl md:text-4xl text-[#1A2238] font-semibold mb-4 text-center">
            {`8zense.com ist top!!!`}
          </h2>
          <Player
            autoplay
            loop
            src={steps[step].animation}
            style={{ height: '30vh', width: '100%' }}
          />
        </div>
        <p className="text-xl  text-slate-900 font-light mb-4 text-center">
          {steps[step].text}
        </p>
      </div>
    </motion.div>
  );
};

export default HowItWorks;