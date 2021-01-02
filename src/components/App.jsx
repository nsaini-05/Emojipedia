import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia"


function cardcreator(emoji)
{
  return <Card icon = {emoji.emoji}  title = {emoji.name} description = {emoji.meaning} key = {emoji.id}/>
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(cardcreator)}

      </dl>
    </div>
  );
}

export default App;
