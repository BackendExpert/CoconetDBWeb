import React from 'react';

function FileList({ files }) {
  return (
    <ul className="">
      {files.length > 0 ? (
        files.map((file, index) => (
          <li key={index} className="border-l-4 border-yellow-500 py-4 px-4  bg-white my-2 shadow-md last:shadow-none">
            <h1 className=""><span className='font-semibold text-yellow-500'>Collection Name:</span> {file}</h1>

            <div className="my-4">
                Data Count: 
            </div>
          </li>
        ))
      ) : (
        <li className="text-gray-500">No JSON files found</li>
      )}
    </ul>
  );
}

export default FileList;
