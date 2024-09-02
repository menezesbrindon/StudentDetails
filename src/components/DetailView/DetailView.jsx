import { useParams, NavLink } from 'react-router-dom';
import './DetailView.css';

function DetailView({ student }) {
  const { id } = useParams();
  return (
    <div className="detail-view">
      <h2>{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Details: {student.details}</p>
      <NavLink to="/">Back to Grid View</NavLink>
    </div>
  );
}

export default DetailView;
