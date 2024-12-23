import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const OneDoc = () => {
    const { file } = useParams();
    const [documentData, setDocumentData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [ServerPort, SetServerPort] = useState(localStorage.getItem('port'));

    useEffect(() => {
        axios
          .get(`${import.meta.env.VITE_APP_API}${ServerPort}/config/documents/${file}`) 
          .then((response) => {
            setDocumentData(response.data); 
            setLoading(false);
          })
          .catch((err) => {
            setError(err.response?.data?.error || err.message); 
            setLoading(false);
          });
      }, [file]);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const renderStyledJSON = (data) => {
        if (Array.isArray(data)) {
          return (
            <>
              <span style={{ color: 'blue' }}>[</span>
              <div style={{ paddingLeft: '20px' }}>
                {data.map((item, index) => (
                  <div key={index}>{renderStyledJSON(item)}</div>
                ))}
              </div>
              <span style={{ color: 'blue' }}>]</span>
            </>
          );
        }
    
        if (typeof data === 'object' && data !== null) {
          return (
            <>
              <span style={{ color: 'red' }}>{'{'}</span>
              <div style={{ paddingLeft: '20px' }}>
                {Object.entries(data).map(([key, value], index) => (
                  <div key={index}>
                    <span style={{ color: '#990F02' }}>"{key}"</span>
                    <span style={{ color: '#3344BC' }}>:</span> {renderStyledJSON(value)}
                  </div>
                ))}
              </div>
              <span style={{ color: 'red' }}>{'}'}</span>
            </>
          );
        }
    
        if (typeof data === 'string') {
          return <span style={{ color: '#446D1D' }}>"{data}"</span>;
        }
    
        if (typeof data === 'number') {
          return <span style={{ color: 'green' }}>{data}</span>;
        }
    
        return <span>{String(data)}</span>;
      };

  return (
    <div className="mx-32 py-8">

      <a href="/">
        <button className='bg-blue-500 text-white rounded py-2 px-4 mb-4'>Back to Documents</button>
      </a>

      <h1 className="text-2xl font-bold">Document: {file}</h1>
      <div className="flex">
        <div className="w-full mr-4 bg-gray-100 p-4 mt-4 rounded shadow">
          {renderStyledJSON(documentData)}
        </div>
        <div className="w-full ml-4 p-4 mt-4 rounded shadow">
          <div className="flex">
            <div className="">
              <button className='bg-green-500 text-white rounded py-2 px-4 mx-2'>Add New Data</button>
              <button className='bg-blue-600 text-white rounded py-2 px-4 mx-2'>View By ID</button>
              <button className='bg-blue-400 text-white rounded py-2 px-4 mx-2'>Update By ID</button>
              <button className='bg-red-500 text-white rounded py-2 px-4 mx-2'>Delete By ID</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default OneDoc