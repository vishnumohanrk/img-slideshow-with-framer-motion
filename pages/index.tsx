import * as React from 'react';

import InfoText from '../components/InfoText';
import MetaHead from '../components/MetaHead';
import MyImg from '../components/MyImg';
import useAPI from '../hooks/useAPI';

const AppHome = () => {
  const { data, isError, isLoading } = useAPI();

  if (isLoading) return <InfoText txt="RANDOM PICS LOADING..." />;

  if (isError) return <InfoText txt="An Error Occurred" />;

  return (
    <>
      <MetaHead />
      <main className="h-screen overflow-y-scroll mainCard">
        {data.map(i => (
          <MyImg {...i} key={i.picID} />
        ))}
      </main>
    </>
  );
};

export default AppHome;
