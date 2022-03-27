import './show-time.css'
import {Link} from 'react-router-dom'

function ShowTime({time}) {

    return (
            <div className="time">
                {time.map((obj) => {
                    return(
                        <Link className='link' key={obj.id} to={`/assentos/${obj.id}`}>
                            <p >{obj.name}</p>
                        </Link>
                    )
                })}
            </div>
    );
}

export default ShowTime;
