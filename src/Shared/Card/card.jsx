import "./card.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo, faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {ThreeCircles} from "react-loader-spinner";
import { useState } from "react";
import axios from "axios";

const Card = ({ content , date , id , deleteItem }) => {
    const [deleting, setDeleting] = useState(false);
    const navigate = useNavigate();

    const handleDelete = (id) => {
        setDeleting(true);
        axios.delete(`https://json-server-react-mauve.vercel.app/items/${id}`)
            .then((res) => {
                setDeleting(false);
                deleteItem((prev) => !prev);
            })
            .catch((err) => {
                console.log(err);
                if (err.response.data.includes("read-only file system, open 'db.json'")) {
                    setDeleting(false);
                    deleteItem((prev) => !prev);
                }
            })
    }

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    }



  return (
    <div className="card">
        <div className="card__content">
            <p className="card__content__text">{content}</p>
        </div>
        <div className="card__date">
            <p className="card__date__text">{date}</p>
        </div>
        <div className="loader">
            <ThreeCircles
                className="loader"
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={deleting}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
        <div className="operations">
            <button className="btn btn-outline-primary" onClick={()=>handleEdit(id)}>
                <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button className="btn btn-outline-info" onClick={()=>{navigate(`/details/${id}`)}}>
                <FontAwesomeIcon icon={faCircleInfo} />
            </button>
            <button className="btn btn-outline-danger" onClick={()=>{handleDelete(id)}}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    </div>
  );
}

export default Card;