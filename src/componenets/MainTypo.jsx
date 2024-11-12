import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
function MainTypo() {
  const textRef = useRef(null);  // Ref for the text container
  const [centeredWords, setCenteredWords] = useState([]);  // State to track words in the center
  const [scrollY, setScrollY] = useState(0); // State to hold the scroll position

console.log(scrollY)
  // Split the text into an array of words
  const paragraphs = [
    "And, all of a sudden…the playbook just stopped working. Data had driven us to obsess over the quantity of meetings booked at the expense of the quality of connections. The result? Both buyers and sellers feel under constant pressure.",
    "As sales professionals, we must accept responsibility for what we've done. I acknowledge my role. We repeatedly pound huge lists of buyers on email, phone, and LinkedIn using lazy messaging, hoping to find a few who will engage. Our behavior led to GDPR, CCPA, the Priority Inbox, aggressive SPAM filters, email security gateways, and DNC lists. Now, signal-led selling and AI SDRs can be even bigger spam cannons to blast buyers with. We are actively disrupting companies we want to help.",
    "After a decade of selling new sales technology to 1000s of GTM execs, I found one constant: in a sea of same, nobody has an advantage.",
    "Everyone has access to the same data, the same signals, the same vendors, and is using the same products to automate the same playbooks. Millions of sales reps just got notified about that new VP of Sales or new round of funding, and they all sent the same automated, AI-generated email you did. You spent big to get results while scorching contacts and burning time, watching money go up in smoke.",
    "There was a time when sellers called, and operators connected them to buyers. How do we get back to that? Can we operate effectively enough to book meetings with 1 highly relevant touch (ok…maybe 2) instead of 100 intrusive ones?",
    "We can. That level of connection still exists, and buyers want it most. If flat, black-and-white spreadsheets turn into 3D, full-color insights, spam becomes success, cold calls become conversations, and DMs become demand."
  ];
  

  const targetRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             // Trigger your specific operation here
//             console.log("Target reached!");
//           }
//         });
//       },
//       {
//         threshold: 0.1 // Adjusts when the observer triggers (e.g., 0.5 = 50% visible)
//       }
//     );

//     if (targetRef.current) {
//       observer.observe(targetRef.current);
//     }

//     return () => {
//       if (targetRef.current) {
//         observer.unobserve(targetRef.current);
//       }
//     };
//   }, []);


useEffect(() => {
    const handleScroll = () => {
      setScrollY(prevScrollY => prevScrollY + 5);
    };
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add scroll event listener when target is in view
            window.addEventListener('scroll', handleScroll);
          } else {
            // Remove scroll event listener when target is out of view
            window.removeEventListener('scroll', handleScroll);
          }
        });
      },
      { threshold: 0.5 } // Adjust as needed
    );
  
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
  
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
      // Clean up scroll listener on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
  return (
    <div className="relative w-full h-max bg-black pt-20 " ref={targetRef}>
      <div className="relative z-10 w-2/5 mx-auto text-white"  >
        {
            paragraphs.map((para,i)=>    <p className=" text-white text-base pt-3 flex items-center justify-start flex-wrap gap-2" >

            {
 para.split(" ").map((typ,index)=>     <motion.span
 ref={targetRef}
 initial={{ color: "#64748b" }} // Initial color (e.g., slate-500)
 whileInView={{ color: "#ffffff" }} // Change color to white when in view
 transition={{ duration: 1 ,delay:.5}} // Control animation speed
>
 {typ}
</motion.span>)
            }
      
        </p>)
        }
    
      </div>
    </div>
  );
}

export default MainTypo;


// const TextComponent = ({ word,del }) => (
   
//   );