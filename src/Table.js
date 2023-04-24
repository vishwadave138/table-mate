// import React, {useState} from 'react'
// import { useNavigate } from 'react-router-dom';

// export default function Table() {
//     const  navigate= useNavigate();
//     const [state2, changeState2] = useState();
//     const {state, colorState} = useState();
//     const toggleActive2 = (color) =>{
//         if(confirm === false){
//             changeState2("gray")
//             setTimeout(() =>{
//                 changeState2("")
//             }, 9000);
//         }
//         else changeState2("green")
//     }

//     const confirm = ()=> {
//         if(colorState === 'gray'){
//             changeState2("green")
//             setInterval(()=> {
//                 changeState2("green")
//             },100);
//         }
//     }
//     setInterval( () => {
//         navigate("/Menu1")
//     }, 1000);
//   return (
//     <div style={{height:"100px", display:'grid', gridTemplateColumns:'repest(2, auto)', backgroundColor: colorState,display:'flex', cursor:'pointer'}} onClick={() => toggleActive2()}>
//        <div className='border-2 border-black h-20 w-20'></div>
//        <div className='border-2 border-black h-20 w-20'></div>
//        <div className='border-2 border-black h-20 w-20'></div>
//        <div className='border-2 border-black h-20 w-20'></div>
//        <button onClick={()=> confirm}>confirm</button>
//     </div>
   
//   )
// }

import React, { useState } from 'react';
import seating from './Image/seating.jpg';
import { useNavigate } from 'react-router-dom';
// import 'tailwindcss/tailwind.css';

const MAX_TABLE = 3;

const Table = () => {
  const [selectedTable, setSelectedTable] = useState([]);
  const handleOnClick = () => {
    //Redirect to the python page
    navigate("/Slider");
  };
  const navigate = useNavigate();

  const handleTableSelect = (table) => {
    setSelectedTable(prevSelectedTable => {
      if (prevSelectedTable.includes(table)) {
        return prevSelectedTable.filter(t => t !== table);
      }
      if (prevSelectedTable.length < MAX_TABLE) {
        return [...prevSelectedTable, table];
      }
      return prevSelectedTable;
    });
  };
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Select Table</h1>
      <img src={seating} alt='' className='w-96 h-72 ml-72 mb-4'/>
      <p className="text-lg font-medium">Maximum {MAX_TABLE} table</p>
      <div className="grid grid-cols-4 gap-2">
        {[...Array(12)].map((_, i) => {
          const table = `T${i + 1}`;
          const isSelected = selectedTable.includes(table);
          return (
            <button
              key={table}
              type="button"
              className={`bg-gray-200 ${isSelected ? 'bg-blue-600 hover:bg-blue-600  focus:bg-blue-600 active:bg-blue-600'  : ''} ${i % 4 === 0 ? 'rounded-l-md' : ''} ${i % 4 === 3 ? 'rounded-r-md' : ''} px-3 py-2 text-sm font-medium`}
              onClick={() => handleTableSelect(table)}
            >
              {table}
            </button>
          );
        })}
      </div>
      <div className="mt-8">
        <p className="text-sm font-medium">Selected table:</p>
        <ul className="list-disc ml-4">
          {selectedTable.map(table => (
            <li key={table}>{table}</li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        className="block mt-8 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md"
        disabled={selectedTable.length < 1}
        onClick={handleOnClick}
      >
        Book Table
      </button>
    </div>
  );
};

export default Table;