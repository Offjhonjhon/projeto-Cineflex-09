import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ShowTime from "../ShowTime/ShowTime";
import './time-section.css'
import Footer from "../Footer/Footer";

function TimeSection() {
    
    const {idFilme} = useParams();
    const [schedule, setSchedule] = useState([]);
    const [footer, setFooter] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then(response => {
          const {data} = response;
          setFooter(data);
          setSchedule(data.days);
        })
      },[]);

      return(
        <>
            <main>
                <p className="time-section-title">Selecione o horario</p>
                {schedule.map((obj) => {
                    return(
                    <div key={obj.id}>
                        <p className="time-section" >{obj.weekday} - {obj.date}</p>
                        <ShowTime time={obj.showtimes} />
                    </div>);
                })}
            </main>
                <Footer posterURL={footer.posterURL} movieName={footer.title} />
                
        </>
      );
      
}

export default TimeSection;