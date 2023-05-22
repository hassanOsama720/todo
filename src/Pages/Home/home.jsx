import Card from "../../Shared/Card/card";
import "./home.css"
import CreateButton from "../../Shared/CreateButton/createButton";
import { useState, useEffect } from "react";
import axios from "axios";
import {Dna, ThreeCircles} from "react-loader-spinner";

const Home = () => {
    const [items, setItems] = useState(null);
    const [deleteItem, setDeleteItem] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:3000/items")
            .then((res) => {
                setItems(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [deleteItem])



    return (
        <>
            <CreateButton />
            {
                items ? (
                    <div className="container">
                        {
                            items.map((item) => {
                                return <Card content={item.content} date={item.date} key={item.id} id={item.id} deleteItem={setDeleteItem} />
                            })
                        }
                    </div>
                ) : (
                    <div className="container">
                        <Dna
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="dna-loading"
                            wrapperStyle={{}}
                            wrapperClass="dna-wrapper"
                        />
                    </div>
                )
            }
        </>
    );
}

export default Home;