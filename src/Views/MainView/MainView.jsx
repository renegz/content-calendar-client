import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../../Componentes/Posts/Posts";

function MainView() {
    const baseURL = "http://localhost:8080";

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`${baseURL}/api/content`);
            setPosts(data); //Mi api solamente me devuelve directamente, no los envuelve en un objeto.
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        
        <Post posts={posts} />
        
    );
}

export default MainView;