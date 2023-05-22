import "./details.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Details = () => {
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://json-server-react-mauve.vercel.app/items/${id}`)
            .then((res) => {
                setContent(res.data.content);
                setDate(res.data.date);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    const handleBack = () => {
        navigate("/");
    }

    return (
        <div className="details container">
            <div className="details__content">
                <h1>{content}</h1>
                <p>{date}</p>
            </div>
            <div className="d-flex justify-content-around w-50">
                <button className="btn btn-lg btn-outline-success" onClick={handleBack}>Back</button>
            </div>
        </div>
    );
}

export default Details;