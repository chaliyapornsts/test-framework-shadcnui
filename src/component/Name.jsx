import React from 'react';

const Name = ({ selectData }) => {
  if (!selectData) {
    return <div>Artist not found</div>;
  }

  const hasBiographyData = selectData.Born || selectData.Passedaway || selectData.Email || selectData.Education || selectData.Occupation || (selectData.Years && selectData.Years.length > 0);

  return (
    <div className='h-screen'>
      <p className='text-3xl pt-10'>{selectData.artistEn}</p>
      <p className='text-3xl'>{selectData.artistTh}</p>
      {hasBiographyData && (
        <>
          <h4 className='text-3xl pt-10 pb-10'>BIOGRAPHY</h4>
          <div className='text-left mx-5'>
            {selectData.Born && (
              <div className='grid grid-cols-[150px_1fr]'>
                <p className="font-bold">Born :</p>
                <p>{selectData.Born}</p>
              </div>
            )}
            {selectData.Passedaway && (
              <div className='grid grid-cols-[150px_1fr]'>
                <p className="font-bold">Passed away :</p>
                <p>{selectData.Passedaway}</p>
              </div>
            )}
            {selectData.Email && (
              <div className='grid grid-cols-[150px_1fr]'>
                <p className="font-bold">Email :</p>
                <p>
                  {selectData.Email.map((email, index) => (
                    <a href={`mailto:${email}`} className='hover:text-orange-500' key={index}>{email}</a>
                  ))}
                </p>
              </div>
            )}
            {selectData.Education && (
              <div className='grid grid-cols-[150px_1fr]'>
                <p className="font-bold">Education :</p>
                <p>{selectData.Education}</p>
              </div>
            )}
            {selectData.Occupation && (
              <div className='grid grid-cols-[150px_1fr]'>
                <p className="font-bold">Occupation :</p>
                <p>
                  {selectData.Occupation.map((occupation, index) => (
                    <p key={index}>{occupation}</p>
                  ))}
                </p>
              </div>
            )}
            {selectData.Years && selectData.Years.length > 0 && (
              <div className='grid grid-cols-[150px_1fr]'>
                <div>
                  <p className="font-bold">Award & Honor</p>
                  {selectData.Year.map((year, index) => (
                    <p key={index}>{year}</p>
                  ))}
                </div>
                <div>
                  {selectData.Years.map((yearAwards, index) => (
                    <ul key={index}>
                      {yearAwards.map((award, awardIndex) => (
                        <li key={awardIndex}>{award}</li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Name;
