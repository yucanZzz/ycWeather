import React from "react";

const Loader = () => {
  return (
    <div className="spinner-border text-warning" role="status">
      <span>Loading</span>
      <img src="img/loading2.gif" alt="" />
    </div>
  );
};

export default Loader;
