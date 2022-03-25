import './show-time.css'
import {Link} from 'react-router-dom'

function ShowTime({time}) {

    return (
            <div className="time">
                {time.map((obj) => {
                    return(
                        <Link to={`/movieSeats/${obj.id}`}>
                            <p key={obj.id}>{obj.name}</p>
                        </Link>
                    )
                })}
            </div>
    );
}

export default ShowTime;
