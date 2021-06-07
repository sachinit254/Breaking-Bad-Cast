import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from '../UI/Spinner'
const CharacterGrid = ({ Loading, items }) => {
  return Loading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
