import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from "../Logo/Logo";
import MovieSection from "../MovieSection/MovieSection";
import TimeSection from "../TimeSection/TimeSection";
import SeatsSection from "../SeatsSection/SeatsSection";


function App() {


    return( 
        <>
          <BrowserRouter>
            <Logo />
            <Routes>
              <Route path="/" element={<MovieSection/>} />
              <Route path="/movieSchedule/:movieId" element={<TimeSection />} />
              <Route path='/movieSeats/:scheduleId' element={<SeatsSection />} />
            </Routes>  
          </BrowserRouter>
        </>
    )
}

export default App;






	