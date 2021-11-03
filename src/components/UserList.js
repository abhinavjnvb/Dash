import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidenav from "./Sidenav";
import { fetchUsers } from "../features/UsersSlice.js";
import { useDispatch, useSelector } from "react-redux";
import User from "./User";
function UserList() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  let data = useSelector((state) => state.users.users);
  const [listArr, setListArr] = useState("");
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  useEffect(() => {
    setListArr(data);
    if (text.length > 2) {
      let arr = listArr.filter((item) => {
        return item.firstName.toUpperCase().includes(text.toUpperCase());
      });
      setListArr(arr);
    }
  }, [data, text]);
  const handleSearch = (text) => {
    setText(text);
  };
  return (
    <div className="home-wrapper">
      <Sidenav active="users" />
      <section className="main">
        <Header title="Users" handleSearch={handleSearch} searchable={true} />
        {listArr &&
          listArr.map((user) => (
            <User
              key={user.id}
              first={user.firstName}
              last={user.lastName}
              avatar={user.picture}
            />
          ))}
        {listArr.length < 1 ? <p>No user found</p> : ""}
      </section>
    </div>
  );
}

export default UserList;
