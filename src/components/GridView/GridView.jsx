// src/components/GridView.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './GridView.css';

function GridView() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('https://freetestapi.com/api/v1/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleButtonClick = (id, action) => {
    // Handle button clicks for edit, flag, delete, etc.
    console.log(`Student ID: ${id}, Action: ${action}`);
    // You can implement further logic based on the action
  };

  return (
    <div className="grid-view">
      {students.map(student => (
        <div key={student.id} className="tile">
          <h3>{student.name}</h3>
          <p>{student.age}</p>
          <div className="tile-actions">
            <button className="btn-options" onClick={() => handleButtonClick(student.id, 'edit')}>Edit</button>
            <button className="btn-options" onClick={() => handleButtonClick(student.id, 'flag')}>Flag</button>
            <button className="btn-options" onClick={() => handleButtonClick(student.id, 'delete')}>Delete</button>
          </div>
          <Link to={`/student/${student.id}`} className="view-details">View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default GridView;
