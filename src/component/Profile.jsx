import React from 'react';
import { useParams } from 'react-router-dom';

const data = [
  { id: 1, imgSrc: '../src/assets/1.jpg', artist: (<>Aaron <br />(แอรอน)</>) },
  { id: 2, imgSrc: '../src/assets/2.jpg', artist: (<>Abel <br />(อาเบล)</>) },
  { id: 3, imgSrc: '../src/assets/3.jpg', artist: (<>Aden <br />(เอเดน)</>) },
  { id: 4, imgSrc: '../src/assets/4.jpg', artist: (<>Adrian <br />(เอเดรียน)</>) },
  { id: 5, imgSrc: '../src/assets/5.jpg', artist: (<>Amil <br />(เอมิล)</>) },
  { id: 6, imgSrc: '../src/assets/6.jpg', artist: (<>Amir <br />(เอเมอร์)</>) },
  { id: 7, imgSrc: '../src/assets/7.jpg', artist: (<>Ashton <br />(แอชตัน)</>) },
  { id: 8, imgSrc: '../src/assets/8.jpg', artist: (<>Austin <br />(ออสติน)</>) },
  { id: 9, imgSrc: '../src/assets/9.jpg', artist: (<>Brayden <br />(เบรย์เดน)</>) },
  { id: 10, imgSrc: '../src/assets/10.jpg', artist: (<>Brooke <br />(บรูค)</>) },
  { id: 11, imgSrc: '../src/assets/11.jpg', artist: (<>Braxton <br />(แบรกซ์ตัน)</>) },
  { id: 12, imgSrc: '../src/assets/12.jpg', artist: (<>Brooklyn <br />(บรูคลิน)</>) },
  { id: 13, imgSrc: '../src/assets/13.jpg', artist: (<>Bible <br />(ไบเบิล)</>) },
  { id: 14, imgSrc: '../src/assets/14.jpg', artist: (<>Carter <br />(คาร์เตอร์)</>) },
  { id: 15, imgSrc: '../src/assets/15.jpg', artist: (<>Colton <br />(คอลตัน)</>) },
  { id: 16, imgSrc: '../src/assets/16.jpg', artist: (<>Cooper <br />(คูเปอร์)</>) },
  { id: 17, imgSrc: '../src/assets/17.jpg', artist: (<>Dylan <br />(ดีแลน)</>) },
  { id: 18, imgSrc: '../src/assets/18.jpg', artist: (<>Devin <br />(เดวิน)</>) }
];

const Profile = () => {
  let { id } = useParams();
  const selectData = data.find((item) => item.id === Number(id));

  if (!selectData) {
    return <div>Artist not found</div>;
  }

  return (
    <div>
      <div className="h-0 pb-[100%] relative">
        <img className="object-cover w-72 h-72 absolute top-44 bottom-0 left-14 right-0 rounded-full z-10" src={selectData.imgSrc} alt={selectData.artist} />
        <div>
          <img className="object-cover w-full h-80" src="../src/assets/8.jpg" alt="" />
        </div>
        <div className='flex flex-col items-center text-center'>
          <p className='text-3xl pt-10'>{selectData.artist}</p>
          <h4 className='text-3xl pt-10 pb-10'>BIOGRAPHY</h4>
          <div className='text-left'>
            <div className='grid grid-cols-2'>
              <p className="font-bold">Born :</p>
              <p>1929, Bangkok</p>
            </div>
            <div className='grid grid-cols-2'>
              <p className="font-bold">Passed away :</p>
              <p>1992</p>
            </div>
            <div className='grid grid-cols-2'>
              <p className="font-bold">Education :</p>
              <p>The School of Fine Arts</p>
            </div>
            <div className='grid grid-cols-2'>
              <p className="font-bold">Occupation :</p>
              <p>- Archaeology Division, The Department of Fine Arts <br />
                - Traditional Arts Division, The Department of Fine Arts</p>
            </div>
            <div className='grid grid-cols-2'>
              <p className="font-bold">Award & Honor</p>
            </div>
            <div className='grid grid-cols-2'>
              <p>1949 :</p>
              <p>- Bronze Medal Award (Sculpture), 1st National Exhibition of Art, Bangkok <br />
                - Silver Medal Award (Sculpture), 2nd National Exhibition of Art, Bangkok</p>
            </div>
            <div className='grid grid-cols-2'>
              <p>1950 :</p>
              <p>1st Prize, The 1st Asian Game in New Delhi, India from the sculpture "Wrestler"</p>
            </div>
            <div className='grid grid-cols-2'>
              <p>1951 :</p>
              <p>Gold Medal Award (Sculpture), 3rd National Exhibition of Art, Bangkok</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
