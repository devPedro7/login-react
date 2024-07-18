import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "../pages/Login";
import Home from "../pages/Home";
import { useContext } from "react";
import { Context } from "../context/Autenticacao";

const Paths = () => {

    const {logado} = useContext(Context);

    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login></Login>}></Route>
                    {
                        logado && (
                        <>
                           <Route path="/home" element={<Home></Home>}></Route>
                        </>
                    )}
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Paths;