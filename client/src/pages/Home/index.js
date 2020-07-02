import React, { useEffect } from "react";

function Home({ currentUser }) {
  useEffect(() => {
    document.body.style.backgroundColor = "#f4f4f9";
  }, []);
  return <p> Home Page, Coming Soon....., {currentUser.uid}</p>;
}
export default Home;
