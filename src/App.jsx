import {useState} from 'react';
import "./App.css";
import Nav from "./components/Nav";
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';
import FoodList from './components/FoodList';
import FoodDetails from './components/FoodDetails';

function App() {
    const [foodData, setFoodData] = useState([]);
    const [foodId, setFoodId] = useState("715415");
    return(
        <div>
            <Nav setFoodData={setFoodData}/>
            <Container>
                <InnerContainer>
                    <FoodList foodData={foodData} setFoodId={setFoodId}/>
                </InnerContainer>
                <InnerContainer>
                    <FoodDetails foodId={foodId}/>
                </InnerContainer>
            </Container>
        </div>
    );
}

export default App
