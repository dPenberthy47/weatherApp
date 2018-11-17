import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{
      height: 300,
      marginTop: 15,
      marginBottom: 15,
      marginLeft: 300,
      marginRight: 300,
      backgroundColor: "lightGrey",
      clear: "both",
      paddingTop: 15,
      paddingBottom: 15,
      display: "flex",
      justifyContent: "center",
      alignItems: "center" 
      
    }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
