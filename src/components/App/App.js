
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from "../Logo/Logo";
import MovieSection from "../MovieSection/MovieSection";

function App() {


    return( 
        <>
          <BrowserRouter>
            <Logo />
            <Routes>
              <Route path="/" element={<MovieSection/>} />
            </Routes>  
          </BrowserRouter>
        </>
    )
}

export default App;






	