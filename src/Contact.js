import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {

  const navigate = useNavigate();
  const gotoHome = () =>{
    navigate("/");
  }
  const goBack = () =>{
    navigate(-1)
  }
  return (
    <>
      <section>
        <h1>Contact Page</h1>
        <button onClick={gotoHome}>go to Home page</button>
        <button onClick={() => goBack()}>go back</button>
      </section>
    </>
  );
}

export default Contact