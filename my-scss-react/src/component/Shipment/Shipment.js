import React, { useContext } from 'react';
import { categoriesContext } from '../../App';

const Shipment = () => {
    
    const categorie = useContext(categoriesContext);
    return (
        <div>
            <h1>This is Shipment page: {categorie}</h1>
        </div>
    );
};

export default Shipment;