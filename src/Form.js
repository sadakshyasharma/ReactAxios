import React from "react";
import { useState, useRef } from "react";
import axios from "axios";
import addNewProfile from "./addNewProfile";
import Card from "./Card";

const Form = () => {
  const [UserName, setUserName] = useState("");
  const inputRef = useRef("");
  const [profile, setProfile] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const resp = await axios.get(
      `https://api.github.com/users/${inputRef.current.value}`
    );
    console.log("App", resp.data);
    inputRef.current.value = "";

    setProfile(resp.data);
  }

  return (
    <>
      <form className="form">
        <input
          className="formbutton"
          type="text"
          placeholder="GitHub username"
          ref={inputRef}
          required
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className="formbutton" onClick={handleSubmit}>
          Add Card
        </button>
      </form>
      <Card profile={profile} />
    </>
  );
};
export default Form;
