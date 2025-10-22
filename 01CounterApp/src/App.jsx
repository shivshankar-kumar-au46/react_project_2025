import { useState } from "react"
import { RiResetRightLine } from "react-icons/ri";

function App() {
const [counter, setCounter] = useState(0);

const addValue = () => {
  if(counter < 20){
    setCounter(counter+1)
  } else {
    alert("congrats ! you have reached now.")

  }
}

const removeValue = () => {
  if(counter != 0){
    setCounter(counter-1)
  } else {
    alert("You have reached to zero please press on Add button !")
  }
}

const resetButton = () => {
  setCounter(0)
}
  return (
    <>
    <div style={{color:"white",boxShadow:"5px 5px 25px gray",borderRadius:"10px",background:"black", display:"flex", flexDirection:"column", width:"500px", justifyContent:"center",textAlign:"center"}}>
      <div className="resetBtn" style={{position:"absolute",top:"24px",left:"24px",cursor:"pointer"}} onClick={resetButton}>
      <RiResetRightLine />
      </div>
    <h1>Counter App upto 20</h1>
<h1>{counter}</h1>
<button style={{cursor:"pointer",padding:"10px 0px",fontWeight:"bold"}} onClick={addValue}>Add +</button>
<button style={{cursor:"pointer",padding:"10px 0px",fontWeight:"bold"}} onClick={removeValue}>Remove -</button>
</div>
    </>

  )
}

export default App
