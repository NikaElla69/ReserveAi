import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/test')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>ReserveAí</h1>
      <p>Mensagem do backend: <strong>{message}</strong></p>
    </div>
  );
}

export default App;