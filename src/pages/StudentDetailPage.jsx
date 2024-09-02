import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import DetailView from '../components/DetailView/DetailView';

function StudentDetailPage() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios.get(`https://freetestapi.com/api/v1/students/${id}`)
      .then(response => setStudent(response.data))
      .catch(error => console.error('Error fetching student data:', error));
  }, [id]);

  if (!student) return <p>Loading...</p>;

  return (
    <div className="student-detail-page">
      <DetailView student={student} />
    </div>
  );
}

export default StudentDetailPage;
