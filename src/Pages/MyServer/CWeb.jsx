import React, { useEffect, useState } from 'react'
import FileList from '../../components/FileList';

const CWeb = () => {
    const [isBackendRunning, setIsBackendRunning] = useState(false);
    const [files, setFiles] = useState([]);

    useEffect(() => {
        // Check if the backend is running
        fetch('http://localhost:5000/config/dbconfig')
          .then(response => {
            if (response.ok) {
              setIsBackendRunning(true);
              return response.json();
            }
            throw new Error('Backend not running');
          })
          .then(data => setFiles(data))
          .catch(() => setIsBackendRunning(false));
    }, []);
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        {isBackendRunning ? 'Database Config' : 'Backend Not Running'}
      </h1>
      {isBackendRunning ? <FileList files={files} /> : <p className="text-center">Please start the backend.</p>}
    </div>
  )
}

export default CWeb