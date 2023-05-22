import "./edit.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Dna} from "react-loader-spinner";

const Edit = () => {
    const [content, setContent] = useState(null);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.length < 5 || content.length > 100) {
            alert("Content length must be between 5 and 100 characters");
            return;
        }
        axios.put(`https://json-server-react-mauve.vercel.app/items/${id}`, { content, date })
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
            {content ? (
                <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control edit__input" id="content" value={content} onChange={(e) => { setContent(e.target.value) }} />
                    <div className="d-flex justify-content-around w-50">
                        <button type="submit" className="btn btn-primary">Update</button>
                        <button className="btn btn-lg btn-outline-success" onClick={handleBack}>Back</button>
                    </div>
                </form>
            ):(
                <Dna
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                />
            )}
        </div>
    );
}

export default Edit;