import  './back-page-button.css';
import {useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import React from 'react';

function BackPageButton () {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
      location.pathname === '/' 
        ? document.querySelector('.back-page-button').style.display = 'none' 
        : document.querySelector('.back-page-button').style.display = 'block';
  } , [location]);

    return (
        <div className='back-page-button'>
            <button className='back' onClick={() => {navigate(-1)}}><ion-icon name="arrow-back-outline"></ion-icon></button>
        </div>
    );
}
export default BackPageButton;