import React from 'react';

import imgUrl from '@/assets/images/image-avatar.jpg';

import './user.style.scss';

const User = () => {
  // @todo: get User data from context

  return (
    <div className="user">
      <img
        alt=""
        className="user__avtar"
        src={imgUrl}
      />
    </div>
  );
};

export default User;
