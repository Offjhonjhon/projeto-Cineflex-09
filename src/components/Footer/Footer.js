import './footer.css'
function Footer({posterURL, movieName, schedule, day}) {
    
    return(
        <div className="footer">
            <div className='footer-poster'>
                <img src={posterURL}></img>
            </div>
            <div>
                <p>{movieName}</p>
                <div className='container'>
                    {  day ? <p>{day.weekday} -</p> : <p></p> }
                    <p>{schedule}</p>
                </div>
                
            </div>
        </div>
    );    
}

export default Footer;