import React from 'react'

const photo = () => {
    const animals = [
        'cat',
        'dog',
        'ant'
    ];

    return (
        <div>
            {animals.map((animal, index) => (
                <div key={index}>
                    {animal}
                </div>
            ))}
        </div>
    )
}

export default photo