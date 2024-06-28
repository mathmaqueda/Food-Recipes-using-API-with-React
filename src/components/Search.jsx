import {useState, useEffect} from 'react';
import styles from './nav.module.css';

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "4b2b65ddd390447094f0d8c3f2627480";

export default function Search({setFoodData}) {
    const [query, setQuery] = useState("");
    useEffect(()=>{
        async function fetchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await res.json();
            setFoodData(data.results);
        }
        fetchFood();
    }, [query]);
    return(
        <div>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search for food recipes"
                className={styles.search}
            />
        </div>
    );
}