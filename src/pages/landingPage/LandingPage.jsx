import React, { useState, useEffect } from 'react';
import ProfileCard from '../../components/profileCard/ProfileCard';

import axios from 'axios';

const LandingPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get('https://randomuser.me/api/?page=1&results=1&seed=abc ')
      .then((res) => {
        console.log(res.data.results[0]);
        setData(res.data.results);
      });
  };

  return (
    <div>
      <ProfileCard data={data} />
    </div>
  );
};

export default LandingPage;
