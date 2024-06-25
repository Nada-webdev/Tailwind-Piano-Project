import React from 'react';
import Blackkey from './Blackkey';
import Whitekey from './Whitekey';

function Pianoo() {
  const keys = [
    <Whitekey key="w1"/>, <Blackkey key="b1"/>, <Blackkey key="b2"/>, <Whitekey key="w2"/>, 
    <Blackkey key="b3"/>, <Blackkey key="b4"/>, <Blackkey key="b5"/>, <Whitekey key="w3"/>, 
    <Blackkey key="b6"/>, <Blackkey key="b7"/>, <Whitekey key="w4"/>, <Blackkey key="b8"/>, 
    <Blackkey key="b9"/>, <Blackkey key="b10"/>, <Whitekey key="w5"/>, <Blackkey key="b11"/>, 
    <Blackkey key="b12"/>, <Whitekey key="w6"/>, <Blackkey key="b13"/>, <Blackkey key="b14"/>, 
    <Blackkey key="b15"/>
  ];

  return (
    

    <div className="container mx-auto py-8 px-7">
      <h1 className="text-center mt-10 font-bold text-[30px]">Let's play piano</h1>
      <div id="piano" className="bg-black w-[992px] h-[290px] mx-auto my-20 p-[90px_20px_0_20px] relative rounded-[10px]">
        <div className="keys bg-black w-[949px] h-[180px] pl-[2px]  overflow-hidden">
          {keys}
        </div>
      </div>
    </div>
  );
}

export default Pianoo;
