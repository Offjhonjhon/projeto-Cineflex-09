import './sucess-section.css'
import { useLocation, useNavigate } from 'react-router-dom';

function SucessSection () {
    const {state} = useLocation();
    const {post, footer, schedule, seatNameList} = state;
    const navigate = useNavigate();

    function backHome(){
        navigate('/');
    }

    return(

        <>
                <main>
                   <p className='seat-section-title sucess'>Pedido feito<br></br> com sucesso!</p>
                   <div className='movie-section title'>
                       <p className='first'>Filme e sessão</p>
                       <p>{footer.title}</p>
                       <p>{schedule.day ? schedule.day.date : null } {schedule.name}</p>
                   </div>
                   <div className='tickets title'>
                       <p className='first'>Ingressos</p>
                       {seatNameList.map((seat, index) => {return(<p key={index}>Assento {seat}</p>)})}
                   </div>
                   <div className='buyer title'>
                       <p className='first'>Comprador</p>
                       <p>Nome: {post.name}</p>
                       <p>CPF: {post.cpf}</p>
                   </div>
                   <div className='button'>
                        <button className='back-home' onClick={() => backHome()}>Voltar pra Home</button>
                    </div>
                </main>
        </>
    );
}

export default SucessSection;