import React from 'react';

const ProfileCard = ({ data }) => {
  console.log(data);
  return (
    <div className='flex justify-center items-center gap-[85px] border-8 rounded-md  w-[480px] h-[210px]'>
      <div className='flex flex-col gap-[14px]'>
        {' '}
        <div>
          <img className='rounded-full' src={data.picture.large} alt='' />
        </div>
        <div className='flex gap-[3px]'>
          <p className='font-bold text-xl font-barlow'>{data.name.title}</p>
          <p className='font-bold text-xl font-barlow'>
            {data.name.first}
            {data.name.last}
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-[6px]'>
        <p className='font-barlow'>
          <strong>Country:</strong>
          {data.location.country}
        </p>
        <p className='font-barlow'>
          <strong>State:</strong>
          {data.location.state}
        </p>
        <p className='font-barlow'>
          <strong>City:</strong>
          {data.location.city}
        </p>
        <p className='font-barlow'>
          <strong>Sex:</strong>
          {data.gender}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
