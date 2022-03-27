import './seats-section.css'
import { useParams, useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';
import Seat from '../Seat/Seat';
import Footer from '../Footer/Footer';

function SeatsSection() {

    const {idSessao} = useParams();
    const [seatSection, setSeatSection] = useState('screen1');
    const [seats, setSeats] = useState([]);
    const [footer, setFooter] = useState({});
    const [schedule, setSchedule] = useState({});
    const [cpf, setCpf] = useState('');
    const [name, setName] = useState('');
    const [seatIdList, setSeatIdList] = useState([]);
    const [seatNameList, setSeatNameList] = useState([]);
    const postObject = {
        ids: seatIdList,
        name: name,
        cpf: cpf.replace(/[^0-9]/g, '')
    };
    const navigate = useNavigate();
    
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then(response => {
          const {data} = response;
          setFooter(data.movie);
          setSeats(data.seats);
          setSchedule(data);
        })
      },[]);

    function saveSeats(seatId, seatName) {
        (seatIdList.includes(seatId)) ? setSeatIdList(seatIdList.filter(item => item !== seatId)) : setSeatIdList([...seatIdList, seatId]);
        (seatNameList.includes(seatName)) ? setSeatNameList(seatNameList.filter(item => item !== seatName)) : setSeatNameList([...seatNameList, seatName]);
    }

    function sendRequest(event) {
        event.preventDefault();
        
        const promise = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', postObject);
        promise.then(response => {
            console.log(response);
            navigate(`/sucesso`, 
                {state: {post: postObject,
                        footer: footer,
                        schedule: schedule, 
                        seatNameList: seatNameList}} 
            );
        })
        promise.catch(error => {
            console.log(error);
        })
        console.log(postObject);

    }

    
    
    return(
        <>
           
                <main>
                    <p className='seat-section-title'>Selecione o(s) assentos(s)</p>  
                    <div className='seats'>
                        {seats.map((seat) => {
                            return (
                                <Seat  
                                    seatStatus={seat} 
                                    key={seat.id}
                                    callback={saveSeats}
                                    />
                            );
                        })}
                    </div>
                    <div className='seat-description'>
                            <div className='selected-description'>
                                <div></div>
                                <p>Selecionado</p>
                            </div>
                            <div className='available-description'>
                                <div></div>
                                <p>Disponivel</p>
                            </div>
                            <div className='unvailable-description'>
                                <div></div>
                                <p>Indisponível</p>
                            </div>
                        </div>
                    <form className='form' onSubmit={sendRequest}>
                        <div>
                            <label htmlFor='name'>Nome do comprador:</label>
                            <input 
                                type='text' 
                                id='name' 
                                placeholder='Digite seu nome...' 
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                required>
                            </input>    
                        </div>
                        <div>
                            <label htmlFor='cpf'>CPF do comprador:</label>
                            <input 
                                type='text' 
                                id='cpf' 
                                placeholder='Digite seu CPF...' 
                                onChange={(e) => setCpf(e.target.value)}
                                value={cpf}
                                required>
                            </input>    
                        </div>
                        <button type='submit'>Reservar assento(s)</button>
                    </form>
                </main>
                <Footer 
                    posterURL={footer.posterURL} 
                    movieName={footer.title} 
                    schedule={schedule.name}
                    day={schedule.day}
                />
                </>
    );
}

export default SeatsSection;