import React from 'react';
import './Card.css';

const Card = ({title, description, person, startDate, endDate}) => {
    return (
        <div className="Card">
        <h2>{title}</h2>
        <p>{description}</p>
        <p><strong>Asignando a: </strong>{person}</p>
        <p><strong>Fecha comienzo: </strong>{startDate}</p>
        <p><strong>Fecha fin: </strong>{endDate}</p>
        </div>
    );
};

export default Card;