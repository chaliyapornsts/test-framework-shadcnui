import React from 'react';

const Name = ({ selectData }) => {
  if (!selectData) {
    return <div>Artist not found</div>;
  }

  return (
    <div>
      <p className='text-3xl pt-10'>{selectData.artist}</p>
      <h4 className='text-3xl pt-10 pb-10'>BIOGRAPHY</h4>
      <div className='text-left'>
        {selectData.Born && (
          <div className='grid grid-cols-[200px_minmax(900px,_1fr)]'>
            <p className="font-bold">Born :</p>
            <p>{selectData.Born}</p>
          </div>
        )}
        {selectData.Passedaway && (
          <div className='grid grid-cols-[200px_minmax(900px,_1fr)]'>
            <p className="font-bold">Passed away :</p>
            <p>{selectData.Passedaway}</p>
          </div>
        )}
        {selectData.Email && (
          <div className='grid grid-cols-[200px_minmax(900px,_1fr)]'>
            <p className="font-bold">Email :</p>
            <p>
              {selectData.Email.map((email, index) => (
                <a href={`mailto:${email}`} className='hover:text-orange-500' key={index}>{email}</a>
              ))}
            </p>
          </div>
        )}
        {selectData.Education && (
          <div className='grid grid-cols-[200px_minmax(900px,_1fr)]'>
            <p className="font-bold">Education :</p>
            <p>{selectData.Education}</p>
          </div>
        )}
        {selectData.Occupation && (
          <div className='grid grid-cols-[200px_minmax(900px,_1fr)]'>
            <p className="font-bold">Occupation :</p>
            <p>
              {selectData.Occupation.map((occupation, index) => (
                <p key={index}>{occupation}</p>
              ))}
            </p>
          </div>
        )}
        {selectData.Years && selectData.Years.length > 0 && (
          <div className='grid grid-cols-[200px_minmax(900px,_1fr)]'>
            <p className="font-bold">Award & Honor</p>
            <ul>
              {selectData.Years.map((yearAwards, index) => (
                <li key={index}>
                  <p>{selectData.Year[index]}</p>
                  <ul>
                    {yearAwards.map((award, awardIndex) => (
                      <li key={awardIndex}>{award}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Name;
