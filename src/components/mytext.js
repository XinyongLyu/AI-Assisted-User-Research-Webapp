import React from "react";

function mytext() {

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

export default mytext;