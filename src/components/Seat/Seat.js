import './seat.css'
import {useState} from 'react';

function Seat({seatStatus, callback}) {
    const {id,name, isAvailable} = seatStatus
    const [selected, setSelected] = useState(false);
    
   return(
    <>
        {isAvailable 
            ? <div  
                    className={selected ? 'available selected' : 'available'} 
                    onClick={() => {setSelected(!selected); callback(id, name) }}>{name}
              </div> 
            
            : <div className='unavailable' onClick={() => alert('O assento não está disponivel')}>{name}</div> }
    </>
   );
}

export default Seat;