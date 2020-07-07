import React, { useEffect } from "react";

function Home({ currentUser, LocalId }) {
  useEffect(() => {
    document.body.style.backgroundColor = "#f4f4f9";
  }, []);
  return (
    <p>
      {" "}
      Home Page, Coming Soon....., FirebaseID: {currentUser.uid}, LocalID:{" "}
      {LocalId}
    </p>
  );
}
export default Home;
