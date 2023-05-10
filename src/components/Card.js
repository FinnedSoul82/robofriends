import React from 'react'
import './Card.css'

const Card = ({ name, email, id }) => {
    
    return (
        <div className='robo-cards'>
            <img src={`https://robohash.org/${id}?2200x200`} alt='robots'></img>
            <div>
                <h2>{name}</h2>
                <h2>{email}</h2>
            </div>
        </div>
    );
}

export default Card;