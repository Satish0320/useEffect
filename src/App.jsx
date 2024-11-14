import { useState } from 'react'


function App() {

  const[notificationcount, setnotificationcount] = useState(0);

  function increase(){
    setnotificationcount (notificationcount + 1)
  }
  
  setInterval(increase,1000)

  return (
    <div>
    <div style={{ display: "flex"}}>
      <div style={{ background: "yellow", padding: "5px" }}>
        {notificationcount}
      </div>
    </div>

   <img style={{cursor: "pointer"}} src={"https://cdn.icon-icons.com/icons2/3873/PNG/512/notification_icon_244680.png"}
    width={40} />
    {/* <button onClick={increase}>Increase notification count</button> */}
   </div>
  )
}

export default App