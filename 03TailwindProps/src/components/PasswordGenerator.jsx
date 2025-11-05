import React, { useEffect, useRef, useState } from 'react'

const PasswordGenerator = () => {
    const [password,setPassword] = useState(true)
    const [numbers, setNumbers] = useState(false)
    const [symbols, setSymbals] = useState(false)
    const [charValue, setCharValue] = useState(true);
    const [range, setRange] = useState(8);
    const copyRef = useRef(null);
    console.log(symbols)
    function randomPass(){
    let char = "abcdefghijklmnopqrstuvwxyz";
    let num = "1234567890";
    let symb = "@#!$%^&*()&^%";
     let randomPassword = "";
    for(let i=0;i<range;i++){
      if(charValue == true && numbers == false && symbols == false){
        char = char;
        console.log('1')
      } else if (numbers == true && charValue == false && symbols == false){
        char = num;
        console.log('2')

      } else if (symbols == true && charValue == false && numbers == false){
        char = symb;
        console.log('3')

      } else if (charValue && numbers && symbols){
        char = char + num + symb;
        console.log('4')

      } else if (numbers && symbols && charValue == false){
        char = char + num + symb;
        console.log('4')

      }
      else if (charValue && numbers && symbols == false){
        char = char + num;
        console.log('5')

        console.log(charValue,numbers,'hello')
      } else if (charValue == true && symbols == true && numbers == false){
        char = char + symb;
        console.log('6')

      } else {
        char = ""
        console.log('7')

      }
      if(char.length > 1){
    let newChar = char[Math.floor((Math.random()*char.length))]
  randomPassword = randomPassword + newChar
    setPassword(randomPassword)  
      } else {
        setPassword('')
      }
   
}

}

const handleCopy = () =>{
copyRef.current.select(); // highlight the text
    navigator.clipboard.writeText(copyRef.current.value);
    alert("Copied!");
}

useEffect(()=>{
randomPass()
},[numbers,symbols,range,charValue])



  return (

    <div className='w-full h-screen bg-cover bg-center flex justify-center items-center flex-col gap-12 align-middle' style={{ backgroundImage: "url('./75291.jpg')" }}>
      <h1 className='text-white text-4xl font-bold'>Password Generator</h1>
      <div className='w-[600px] h-[100px] bg-white/20 backdrop-blur-md rounded shadow-2xl' >
<div className='w-full border-b border-purple-950 flex justify-between'>
  <input type='text' ref={copyRef} value={password} readOnly className='border-none outline-none pl-2 w-full text-white' placeholder='please select below option...'/>
  <button className='border py-2  px-4 cursor-pointer bg-purple-500 backdrop-blur-md hover:bg-purple-600 active:scale-95 transition-all duration-150 text-white font-bold' onClick={handleCopy} >Copy</button>
</div>
<div className='flex gap-2 mt-4 pl-2'>
<input type='range'  max={20} min={8} value={range} onChange={(e) => setRange(e.target.value)}/>
<label className='text-white'>{`(${range}) Range`}</label>
<input type='checkbox' checked={charValue} onChange={()=>setCharValue(charValue ? false : true)}/>
<label className='text-white'>char</label>

<input type='checkbox' value={''} onChange={()=>setNumbers(numbers ? false : true)}/>
<label className='text-white'>number</label>
<input type='checkbox' onChange={()=>setSymbals(symbols ? false : true)} value={''} />
<label className='text-white'>symbols</label>
</div>
      </div>
    </div>
  )
}

export default PasswordGenerator