// src/components/TileView.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TileView.css';

function TileView({ student }) {
  const handleButtonClick = (action) => {
    //console.log(`Student ID: ${student.id}, Action: ${action}`);
    // further logic based on the action to be implemented here
    //Out of scope for this task
  };

  return (
    <div className="tile-view">
      <h2>{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Details: {student.details}</p>
      <div className="tile-actions">
        <button className="btn-options" onClick={() => handleButtonClick('edit')}>Edit</button>
        <button className="btn-options" onClick={() => handleButtonClick('flag')}>Flag</button>
        <button className="btn-options" onClick={() => handleButtonClick('delete')}>Delete</button>
      </div>
      <Link to="/">Back to Grid View</Link>
    </div>
  );
}

export default TileView;
