import React from "react";
import { useState, CSSProperties } from "react";
import BarLoader from "react-spinners/BarLoader";

const Loader = () => {
 
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  const override ={
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  };
  return (
    <div className="sweet-loading text-center">
      <BarLoader
        color='#000'
        loading={loading}
        cssOverride={override}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
