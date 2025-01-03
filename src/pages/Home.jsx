import React from 'react';
import { info } from '../utils/data';

const Home = () => {
  return (
    <>
      <div>
        <img src={info?.profilePhoto} alt="profile" />
      </div>
      <div>
        <p>{info?.firstName} {info?.lastName}</p>
        <p>I'm a Software Developer Engineer</p>
      </div>
      <div>
        Birthday: {info?.dateOfBirth}
        {/* Age: 22 */}
        Degree: Bachelor of Technology
        Current City: Indore, M.P.
        <button
          onClick={() => window.open(info?.resume, '_blank', "noopener, noreferrer")}
        >
          My Resume
        </button>
      </div>
    </>
  )
}

export default Home;