import React from 'react';


const Buttons = (props) => {
  
  return (
    <div className="btn-group-vertical">
    <button onClick={props.startCounter} className="btn btn-outline-dark btn-sm mb-2 rounded mx-2 rounded-pill">
      <i className="fas fa-play"></i> 
    </button>
    <button onClick={props.pauseInterval} className="btn btn-outline-dark btn-sm mb-2 rounded mx-2 rounded-pill"> 
      <i className="fas fa-stop"></i> 
    </button>
    <button onClick={props.resetInterval}className="btn btn-outline-dark btn-sm mb-2 rounded mx-2 rounded-pill"> 
      <i className="fas fa-undo"></i> 
    </button>
  </div>
);
};

export default Buttons;
