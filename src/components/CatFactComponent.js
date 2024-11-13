import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import styles from '../App.module.css';

const CatFactComponent = () => {
  const [catFacts, setCatFacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCatFact = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setCatFacts((prevFacts) => [...prevFacts, data.fact]);
    } catch (error) {
      console.error("Error fetching cat fact:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteAllData = () => {
    setCatFacts([]);
  };

  return (
    <div>
      <button onClick={fetchCatFact}>GET MORE INFO</button>
      {catFacts.length > 0 && (
        <button className={styles.deleteButton} onClick={deleteAllData}>
          DELETE ALL DATA
        </button>
      )}
      
      <div className={styles.factContainer}>
        {loading && <Loader />}
        {catFacts.map((fact, index) => (
          <p key={index}>{fact}</p>
        ))}
      </div>
    </div>
  );
};

export default CatFactComponent;