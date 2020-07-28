import React, { useState, useEffect } from "react";
import socket from "../Socketconfig";

function Input() {

    const [input, setInput] = useState(''); 

  const handleSubmit=(evt)=>{
    evt.preventDefault();
    console.log(input);
    socket.emit("inputsubmit",input);
  };

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <input value={input} onChange={e => setInput(e.target.value)}/>
          </form>
           </div>
  );
}

export default Input;