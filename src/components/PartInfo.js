import React, { useState } from 'react';
import { getPartInfo } from '../api';

const PartInfo = () => {
  const [partNumber, setPartNumber] = useState('');
  const [partInfo, setPartInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleFetchPartInfo = async () => {
    try {
      const data = await getPartInfo(partNumber);
      setPartInfo(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch part information');
      setPartInfo(null);
    }
  };

  return (
    <div>
      <h1>Part Information</h1>
      <input
        type="text"
        value={partNumber}
        onChange={(e) => setPartNumber(e.target.value)}
        placeholder="Enter part number"
      />
      <button onClick={handleFetchPartInfo}>Get Part Info</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {partInfo && (
        <div>
          <h2>Part Details:</h2>
          <p>{partInfo}</p>
        </div>
      )}
    </div>
  );
};

export default PartInfo;