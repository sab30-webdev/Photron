import React from "react";

const Title = ({ user }) => {
  return (
    <div className="title">
      <h1>Photron</h1>
      <div className="user">
        <img src={user.picture} alt={user.name} />
        {console.log(user.picture)}
        <h2>{user.nickname}</h2>
      </div>
      <h2>Your Pictures</h2>
    </div>
  );
};

export default Title;
