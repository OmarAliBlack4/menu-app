// import './App.css';
import NavMenu from './components/Nav';
import { Container } from 'react-bootstrap';
import TitleMenu from './components/TitleMenu';
import Cat from './components/Cat';
import ProductCard from './components/ProductCard';
import { items } from './data';
import { useState } from 'react';


function App() {

  const [foodData , setFoodData] = useState(items);

  // fillter category
  const allCategory = ["all",...new Set(items.map((el)=> el.category))]


  // filter buttons functiion 
  const foodFillter = (cat) =>{
    if (cat === "all"){
      setFoodData(items);
    }else{
      const newArray = items.filter((el)=>el.category === cat )
      setFoodData(newArray);
    }
  }


    // filter buttons functiion 
    const foodFillterSearch = (word) =>{
      if (word !== "a"){
        const newArray = items.filter((el)=>el.title === word )
        setFoodData(newArray);
      }
    }

  return (
    <div className="App">
      <NavMenu foodFillterSearch={foodFillterSearch}/>
      <Container>
        <TitleMenu/>
        <Cat foodFillter={foodFillter} allCategory={allCategory}/>
        <ProductCard foodData={foodData}/>
      </Container>
    </div>
  );
}

export default App;
