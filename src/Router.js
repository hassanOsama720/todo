import {Route , Routes} from "react-router-dom";
import Home from "./Pages/Home/home";
import Create from "./Pages/Create/create";
import Edit from "./Pages/Edit/edit";
import Details from "./Pages/Details/details";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/edit/:id" element={<Edit/>}/>
            <Route path="/details/:id" element={<Details/>}/>
        </Routes>
    )
}

export default Router;