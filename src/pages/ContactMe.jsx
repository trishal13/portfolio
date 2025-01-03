import React from 'react';
import { Link } from 'react-router-dom';
import { socialNetworks } from '../utils/data';

const ContactMe = () => {
  return (
    <>
      <div>Connect with me</div>
      <div>
        {socialNetworks.map((item, index) => (
          <Link to={item?.url} target='_blank' rel="noopener noreferrer" key={index}>
            <img src={item?.logo} alt={`${item?.platform}-${item?.userName}`} />
          </Link>
        ))}
      </div>


      {/* linkedin, email, mobile number, (location), twitter, instagram */}
      {/* if possible make a form */}
    </>
  )
}

export default ContactMe;