import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Table() {
    const  navigate= useNavigate();
    const [state2, changeState2] = useState();
    const {state, colorState} = useState();
    const toggleActive2 = (color) =>{
        if(confirm === false){
            changeState2("gray")
            setTimeout(() =>{
                changeState2("")
            }, 9000);
        }
        else changeState2("green")
    }

    const confirm = ()=> {
        if(colorState === 'gray'){
            changeState2("green")
            setInterval(()=> {
                changeState2("green")
            },100);
        }
    }
    setInterval( () => {
        navigate("/Menu1")
    }, 1000);
  return (
    <div style={{height:"100px", display:'grid', gridTemplateColumns:'repest(2, auto)', backgroundColor: colorState,display:'flex', cursor:'pointer'}} onClick={() => toggleActive2()}>
       <div className='border-2 border-black h-20 w-20'></div>
       <div className='border-2 border-black h-20 w-20'></div>
       <div className='border-2 border-black h-20 w-20'></div>
       <div className='border-2 border-black h-20 w-20'></div>
       <button onClick={()=> confirm}>confirm</button>
    </div>
   
  )
}
