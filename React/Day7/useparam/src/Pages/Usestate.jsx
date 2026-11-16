

import { useState } from 'react';
  
const Usestate = () => {
  const [state, setState] = useState(0);

  return (
    <>
     <div className="bg-gray-400 p-10 flex gap-10 flex-col justify-center items-center h-100">
      <h1>State:{state}</h1>
    
      <button className="bg-black text-white p-1 rounded w-50 hover:bg-amber-300 hover:text-black"onClick={()=> setState(state + 1)}>Increment</button>
      <button className="bg-black text-white p-1 rounded w-50 hover:bg-amber-300 hover:text-black" onClick={()=>setState(state-1)}>Decrement</button>
      <button className="bg-black text-white p-1 rounded w-50 hover:bg-amber-300 hover:text-black" onClick={()=>setState(0)}>Reset</button>
     </div>
    </>
  )
}

export default Usestate