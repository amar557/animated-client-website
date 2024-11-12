import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
function Broght() {
  const textRef = useRef(null);  // Ref for the text container
  const [centeredWords, setCenteredWords] = useState([]);  // State to track words in the center
  const [scrollY, setScrollY] = useState(0); // State to hold the scroll position


  // Split the text into an array of words
  const wordsWithNum = [
    { "word": "We", "num": 600 },
    { "word": "brought", "num": 608 },
    { "word": "this", "num": 616 },
    { "word": "on", "num": 624 },
    { "word": "ourselves.", "num": 632 },
    { "word": "We", "num": 640 },
    { "word": "got", "num": 648 },
    { "word": "greedy", "num": 656 },
    { "word": "and", "num": 664 },
    { "word": "wrecked", "num": 672 },
    { "word": "outbound.", "num": 680 },
    { "word": "The", "num": 688 },
    { "word": "playbook", "num": 696 },
    { "word": "was", "num": 704 },
    { "word": "simple", "num": 712 },
    { "word": "and", "num": 720 },
    { "word": "worked:", "num": 728 },
    { "word": "find", "num": 736 },
    { "word": "the", "num": 744 },
    { "word": "right", "num": 752 },
    { "word": "person,", "num": 760 },
    { "word": "send", "num": 768 },
    { "word": "the", "num": 776 },
    { "word": "right", "num": 784 },
    { "word": "message,", "num": 792 },
    { "word": "at", "num": 800 },
    { "word": "the", "num": 808 },
    { "word": "right", "num": 816 },
    { "word": "time,", "num": 824 },
    { "word": "through", "num": 832 },
    { "word": "the", "num": 840 },
    { "word": "right", "num": 848 },
    { "word": "channel.", "num": 856 },
    { "word": "Then,", "num": 864 },
    { "word": "automation", "num": 872 },
    { "word": "gave", "num": 880 },
    { "word": "us", "num": 888 },
    { "word": "an", "num": 896 },
    { "word": "easy", "num": 904 },
    { "word": "button.", "num": 912 },
    { "word": "We", "num": 920 },
    { "word": "smashed", "num": 928 },
    { "word": "it", "num": 936 },
    { "word": "—", "num": 944 },
    { "word": "over", "num": 952 },
    { "word": "and", "num": 960 },
    { "word": "over", "num": 968 },
    { "word": "and", "num": 976 },
    { "word": "over", "num": 984 },
    { "word": "again,", "num": 992 },
    { "word": "ignoring", "num": 1000 },
    { "word": "how", "num": 1008 },
    { "word": "resistant", "num": 1016 },
    { "word": "buyers", "num": 1024 },
    { "word": "were", "num": 1032 },
    { "word": "becoming.", "num": 1040 },
    { "word": "We", "num": 1048 },
    { "word": "brought", "num": 1056 },
    { "word": "this", "num": 1064 },
    { "word": "on", "num": 1072 },
    { "word": "ourselves.", "num": 1080 },
    { "word": "We", "num": 1088 },
    { "word": "got", "num": 1096 },
    { "word": "greedy", "num": 1100 }
  ];
  
  
  
  return (
    <div className="relative w-full h-max bg-black pt-40">
      <div className="relative z-10 w-10/12 mx-auto text-white">
        <h4 className="uppercase text-slate-600 text-lg">manifesto</h4>
        <p className="font-bold text-white text-5xl mt-3 flex items-center justify-start flex-wrap gap-2" ref={textRef}>
          {wordsWithNum.map((word, index) => (
            // <span
            //   key={index}
            //   className={` inline-block me-2 transition-all duration-300 ${
            //     scrollY>word.num ? 'text-white' : 'text-slate-500'
            //   }`}
            // >
            //   {word.word}{"  "}
            // </span>
            <TextComponent word={word.word} del={index}/>
          ))}
        </p>
      </div>
    </div>
  );
}

export default Broght;


const TextComponent = ({ word,del }) => (
    <motion.span
      initial={{ color: "#64748b" }} // Initial color (e.g., slate-500)
      whileInView={{ color: "#ffffff" }} // Change color to white when in view
      transition={{ duration: 1 ,delay:.6}} // Control animation speed
    >
      {word}
    </motion.span>
  );