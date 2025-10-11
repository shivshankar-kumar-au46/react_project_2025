import { useState } from "react"


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
  return (
    <>
    <div style={{color:"white",boxShadow:"5px 5px 25px gray",borderRadius:"10px",background:"black", display:"flex", flexDirection:"column", width:"500px", justifyContent:"center",textAlign:"center"}}>
    <h1>Counter App upto 20</h1>
<h1>{counter}</h1>
<button style={{cursor:"pointer",padding:"10px 0px",fontWeight:"bold"}} onClick={addValue}>Add +</button>
<button style={{cursor:"pointer",padding:"10px 0px",fontWeight:"bold"}} onClick={removeValue}>Remove -</button>
</div>
    </>

  )
}

export default App
