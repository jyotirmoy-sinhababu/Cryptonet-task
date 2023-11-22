import React, { useState, useEffect } from 'react';
import ProfileCard from '../../components/profileCard/ProfileCard';
import Nav from '../../components/nav/Nav';

import axios from 'axios';

const LandingPage = () => {
  const [data, setData] = useState();
  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get('https://randomuser.me/api/?page=1&results=1&seed=abc ')
      .then((res) => {
        console.log(res.data.results[0]);
        setData(res.data.results[0]);
      });
  };

  return (
    <div className='flex flex-col justify-center items-center m-[11%]'>
      <Nav />
      <div>{data ? <ProfileCard data={data} /> : null}</div>
    </div>
  );
};

export default LandingPage;
