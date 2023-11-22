import React from 'react';

const ProfileCard = ({ data }) => {
  console.log(data);
  return (
    <div className='flex gap-[45px]'>
      <div className='flex flex-col'>
        {' '}
        <div>
          <img className='rounded-full' src={data.picture.large} alt='' />
        </div>
        <div className='flex gap-[3px]'>
          <p>{data.name.title}</p>
          <p>
            {data.name.first}
            {data.name.last}
          </p>
        </div>
      </div>

      <div>
        <p>
          <strong>Country:</strong>
          {data.location.country}
        </p>
        <p>
          <strong>State:</strong>
          {data.location.state}
        </p>
        <p>
          <strong>City:</strong>
          {data.location.city}
        </p>
        <p>
          <strong>Sex:</strong>
          {data.gender}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
