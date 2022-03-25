import './footer.css'
function Footer({posterURL, movieName, schedule}) {
    return(
        <div className="footer">
            <div className='footer-poster'>
                <img src={posterURL}></img>
            </div>
            <div>
                <p>{movieName}</p>
                <p>{schedule}</p>
            </div>
        </div>
    );    
}

export default Footer;