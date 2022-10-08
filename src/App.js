import "./styles.css";
import Editor from "./Editor";
import Preview from "./Preview";
import { useState } from "react";

export default function App() {
  const [heading, setHeading] = useState("");
  const [picture, setPicture] = useState("");
  const [emails, setEmails] = useState([]);
  return (
    <div className="App">
      <Editor
        heading={heading}
        setHeading={setHeading}
        picture={picture}
        setPicture={setPicture}
        emails={emails}
        setEmails={setEmails}
      />
      <Preview heading={heading} picture={picture} emails={emails} />
    </div>
  );
}
