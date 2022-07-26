import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function CreateEntry(EmojiTerm) {
  return (
    <Entry
      key={EmojiTerm.id}
      emoji={EmojiTerm.emoji}
      name={EmojiTerm.name}
      meaning={EmojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dt className="dictionary">{emojipedia.map(CreateEntry)}</dt>
    </div>
  );
}

export default App;
