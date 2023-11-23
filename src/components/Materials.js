// src/components/Materials.js
import React, { useEffect, useState } from 'react';

function Materials() {
  const [materials, setMaterials] = useState([]);
  const [newMaterial, setNewMaterial] = useState({ name: '', description: '', unit: '', price: 0 });

  useEffect(() => {
    // Fetch materials from your backend API
    fetch('/api/materials')
      .then((response) => response.json())
      .then((data) => setMaterials(data));
  }, []);

  const handleAddMaterial = () => {
    // Send a POST request to add a new material
    fetch('/api/materials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMaterial),
    })
      .then((response) => response.json())
      .then((data) => {
        setMaterials([...materials, data]);
        setNewMaterial({ name: '', description: '', unit: '', price: 0 });
      });
  };

  return (
    <div>
      <h2>Materials</h2>
      <ul>
        {materials.map((material) => (
          <li key={material._id}>
            <p>Name: {material.name}</p>
            <p>Description: {material.description}</p>
            <p>Unit: {material.unit}</p>
            <p>Price: {material.price}</p>
          </li>
        ))}
      </ul>
      <h3>Add New Material</h3>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newMaterial.name}
          onChange={(e) => setNewMaterial({ ...newMaterial, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMaterial.description}
          onChange={(e) => setNewMaterial({ ...newMaterial, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Unit"
          value={newMaterial.unit}
          onChange={(e) => setNewMaterial({ ...newMaterial, unit: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newMaterial.price}
          onChange={(e) => setNewMaterial({ ...newMaterial, price: e.target.value })}
        />
        <button onClick={handleAddMaterial}>Add Material</button>
      </div>
    </div>
  );
}

export default Materials;
