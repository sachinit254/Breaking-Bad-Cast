import React, { useEffect, useState } from "react";
import Header from "./components/UI/Header";
import Search from './components/UI/Search'
import CharacterGrid from "./components/characters/CharacterGrid";
import axios from "axios";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(value)=> setQuery(value)}/>
      <CharacterGrid  Loading={isLoading} items={items}/>
    </div>
  );
};

export default App;
