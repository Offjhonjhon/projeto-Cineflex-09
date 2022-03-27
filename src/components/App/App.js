import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from "../Logo/Logo";
import MovieSection from "../MovieSection/MovieSection";
import TimeSection from "../TimeSection/TimeSection";
import SeatsSection from "../SeatsSection/SeatsSection";
import SucessSection from "../SucessSection/SucessSection";


function App() {


    return( 
        <>
          <BrowserRouter>
            <Logo />
            <Routes>
              <Route path="/" element={<MovieSection/>} />
              <Route path="/sessoes/:idFilme" element={<TimeSection />} />
              <Route path='/assentos/:idSessao' element={<SeatsSection />}/>
              <Route path='/sucesso' element={<SucessSection />}/>
            </Routes>  
          </BrowserRouter>
        </>
    )
}

export default App;






	