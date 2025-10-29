import { useState } from "react";


export default function Card({}) {
  const [updatedColor, setColor] = useState('white');
  let colorObg = ['red','yellow','orange','blue','green','purple','lightblue']

  const bgChange = (color) => {
setColor(color)
console.log(color)
  }
  return (
    <div className="w-full h-[100vh]" style={{backgroundColor:updatedColor}}>
      <h1 className="text-2xl text-orange-500 text-center py-4 font-bold">Background Changer App</h1>

      <div className="absolute bottom-10">
        
       <ul className="flex gap-2 px-2">
       {
        colorObg.map((color,ind)=>(
          <li className="border px-2 rounded cursor-pointer text-white border-black bg-blue-500" onClick={()=>bgChange(color)} key={ind}>{color}</li>
        ))
       }
       </ul>
      </div>

    </div>
  );
}
