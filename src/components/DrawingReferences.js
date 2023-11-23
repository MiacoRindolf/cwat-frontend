import React, { useEffect, useState } from 'react';

function DrawingReferences() {
  const [references, setReferences] = useState([]);

  useEffect(() => {
    // Fetch drawing references from your backend API
    fetch('/api/drawing-references')
      .then((response) => response.json())
      .then((data) => setReferences(data));
  }, []);

  return (
    <div>
      <h2>Drawing References</h2>
      <ul>
        {references.map((reference) => (
          <li key={reference._id}>
            <a href={reference.file_path} target="_blank" rel="noopener noreferrer">
              {reference.file_name}
            </a>
            <p>{reference.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DrawingReferences;