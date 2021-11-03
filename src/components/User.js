import React from "react";

function User(props) {
  const { first, last, avatar } = props;
  return (
    <div className="user-row">
      <div>
        <img src={avatar} alt="avatar" />
      </div>
      <div>{first}</div>
      <div>{last}</div>
    </div>
  );
}

export default User;
