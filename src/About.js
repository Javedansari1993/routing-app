import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const gotoContact = () => {
    navigate("/contact");
  };
  return (
    <>
      <section>
        <h1>About Page</h1>
      </section>
      <button onClick={()=>gotoContact()}>go to Contact page</button>
      <button onClick={() => {navigate(-1)}}>go back</button>
    </>
  );
}

export default About