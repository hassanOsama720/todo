import "./create.css"
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";


const Create = () => {
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // validate
        if (content.length < 5 || content.length > 100) {
            alert("Content length must be between 5 and 100 characters");
            return;
        }
        const data = {
            content: content,
            date: new Date()
        }
        axios.post("https://json-server-react-mauve.vercel.app/items", data)
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

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e);
        }
    }

    return (
        <div className="create">
            <form onSubmit={handleSubmit}>
                <textarea className="create__input" placeholder="What's on your mind?" onChange={(e) => setContent(e.target.value)} onKeyDown={handleEnter} />
                <div className="d-flex justify-content-around w-50">
                    <button className="btn btn-lg btn-outline-primary" type="submit">Create</button>
                    <button className="btn btn-lg btn-outline-success" onClick={handleBack}>Back</button>
                </div>
            </form>
        </div>
    );


}

export default Create;