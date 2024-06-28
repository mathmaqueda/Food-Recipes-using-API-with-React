import {useState, useEffect, React} from 'react';
import styles from './nav.module.css';
console.log("KEY: " + import.meta.env.VITE_API_KEY);
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = import.meta.env.VITE_API_KEY;

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