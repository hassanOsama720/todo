import "./edit.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Edit = () => {
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/items/${id}`)
            .then((res) => {
                setContent(res.data.content);
                setDate(res.data.date);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.length < 5 || content.length > 100) {
            alert("Content length must be between 5 and 100 characters");
            return;
        }
        axios.put(`http://localhost:3000/items/${id}`, { content, date })
            .then((res) => {
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleBack = () => {
        navigate("/");
    }

    return (
        <div className="edit">
                <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control edit__input" id="content" value={content} onChange={(e) => { setContent(e.target.value) }} />
                    <div className="d-flex justify-content-around w-50">
                        <button type="submit" className="btn btn-primary">Update</button>
                        <button className="btn btn-lg btn-outline-success" onClick={handleBack}>Back</button>
                    </div>
                </form>
        </div>
    );
}

export default Edit;