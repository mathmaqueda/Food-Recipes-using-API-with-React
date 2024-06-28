import styles from './nav.module.css';
import Search from './Search';

export default function Nav({setFoodData}) {
    return(
        <div className={styles.nav}>
            🍔FoodApp🍔
            <Search setFoodData={setFoodData}/>
        </div>
    );
}