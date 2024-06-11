import './Tictactoe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'
import { useState } from 'react'

let data = ["", "", "", "", "", "" , "", "", ""]

const Tictactoe = () => {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);

    const toggle = (w, num) => {
        if(lock) {
            return 0;
        }
        if(count%2===0)
        {
            e.target.innerHTML = `<img src='${cross_icon}' >`;
            data[num]='x';
            setCount(++count);
        }
        else {
            e.targe.innerHTML = `<img src='${circle_icon}'>`;
            data[num]='o';
            setCount(++count);
        }
    }
    return (
        <div className='container'>
            <h1 className='title'>Tic Tac Toe Game in <span>React</span></h1>
             <div className='board'>
               <div className='row1'>
                <div className='boxes' onClick={(e)=>{toggle(e,0)}}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,1)}}></div>
                <div className='boxes'></div>
               </div>
               <div className='row2'>
                <div className='boxes'></div>
                <div className='boxes'></div>
                <div className='boxes'></div>
               </div>
               <div className='row3'>
                <div className='boxes'></div>
                <div className='boxes'></div>
                <div className='boxes'></div>
               </div>
             </div>
              <button className='reset'>Reset</button>
        </div>
    )

}
export default Tictactoe