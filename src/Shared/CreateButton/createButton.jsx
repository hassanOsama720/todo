import "./createButton.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const CreateButton = () => {
    const navigate = useNavigate();

    const handleCreate = () => {
        navigate("/create");
    }


    return (
        <div className="bt">
            <button className="btn btn-lg btn-outline-primary" onClick={handleCreate}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
}

export default CreateButton;