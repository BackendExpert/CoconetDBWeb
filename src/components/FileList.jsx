import React from 'react';

function FileList({ files }) {
  return (
    <ul className="bg-white shadow rounded-lg p-4">
      {files.length > 0 ? (
        files.map((file, index) => (
          <li key={index} className="py-2 px-4 border-b last:border-none">
            {file}
          </li>
        ))
      ) : (
        <li className="text-gray-500">No JSON files found</li>
      )}
    </ul>
  );
}

export default FileList;
