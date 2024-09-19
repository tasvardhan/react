import react from 'react'
import Home from './Home';
import Info from './Info';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import {Link} from "react-router-dom";
const App = () => {
    return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
       <Route path ="/info" element ={<Info/>}/>

    </Routes>
    </BrowserRouter>
    )
}
export default App;