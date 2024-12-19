import React, { useEffect, useState } from 'react';
import FileList from '../../components/FileList';
import axios from 'axios';

const CWeb = () => {
    const [isBackendRunning, setIsBackendRunning] = useState(false);
    const [files, setFiles] = useState([]);
    const [ServerPort, SetServerPort] = useState(localStorage.getItem('port') || '5000');
    const [ProtData, SetPortData] = useState({
        portno: ServerPort,
    });

    // This useEffect will now run whenever ServerPort changes
    useEffect(() => {
        // Check if the backend is running
        axios
          .get(`${import.meta.env.VITE_APP_API}${ServerPort}/config/dbconfig`)
          .then((response) => {
            if (response.status === 200) {
              setIsBackendRunning(true);
              setFiles(response.data); // Assuming response contains file data
            } else {
              setIsBackendRunning(false);
            }
          })
          .catch((error) => {
            console.error('Error connecting to backend:', error);
            setIsBackendRunning(false);
          });
    }, [ServerPort]);  // Adding ServerPort to the dependency array to re-run when it's updated

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        SetPortData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const chagePort = (e) => {
        e.preventDefault();
        const newPort = ProtData.portno;
        SetServerPort(newPort);
        localStorage.setItem('port', newPort); // Save the new port to localStorage
    };

    return (
        <div className="min-h-auto bg-gray-200/50 p-4 px-32">
            <h1 className="text-2xl text-gray-500 my-4 text-center font-semibold mb-4">
                Database Configuration of Your CERN Project (CoconutDB Express ReactJs NodeJs)
            </h1>
            <div className="flex mt-8">
                <div className="w-1/2 mr-2 bg-white p-4 rounded shadow-md">
                    {
                        isBackendRunning ?
                            <div>
                                <div className="my-2">
                                    <span className='text-blue-500 font-semibold'>Server Status</span>: <span className='text-green-800 font-semibold'>Online</span>
                                </div>
                                <div className="my-2">
                                    <span className='text-blue-500 font-semibold'>Server Running Port</span>: <span className='text-green-500'>{ServerPort}</span>
                                </div>

                            </div>
                        :
                            <div>
                                <div className="my-2">
                                    <span className='text-blue-500 font-semibold'>Server Status</span>: <span className='text-red-500'>Offline</span>
                                </div>
                                <div className="my-2">
                                    <span className='text-blue-500 font-semibold'>Server Running Port</span>: <span className='text-red-500'>Server Not Started</span>
                                </div>
                            </div>
                    }
                </div>
                <div className="w-1/2 ml-2 bg-white p-4 rounded shadow-md">
                    <form action="" onSubmit={chagePort}>
                        <label htmlFor="" className='text-gray-500'>Enter Backend Running Port (Server Port) </label>
                        <input
                            required
                            type="number"
                            name="portno"
                            id=""
                            className="w-full bg-gray-200 h-12 pl-2 mt-2"
                            placeholder='Server Port if not 5000'
                            value={ProtData.portno}
                            onChange={handleInputChange}
                        />

                        <button type="submit" className='bg-blue-500 py-2 px-4 text-white rounded mt-4'>Run</button>
                    </form>
                </div>
            </div>
            <div className="my-2 shadow-md">
                {isBackendRunning ? <FileList files={files} /> : <p className="text-center">Please start the backend.</p>}
            </div>
        </div>
    );
};

export default CWeb;
