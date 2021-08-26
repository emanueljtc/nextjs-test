import React from 'react';
import NavBar from '../components/Nav';
import {getListUsers} from '../utils/services/'
const Users = ({users}) => {
  console.log(users)
  return (
    <>
      <NavBar />
      <div className="main">
          <div className="content-title flex justify-center pt-24">
              <p className="text-gray-500 font-extrabold  uppercase text-5xl">List Users</p>
          </div>
      </div>
    </>
  );
};
export default Users;

export async function getServerSideProps() {
  let users;
  try {
    users = await getListUsers();
  } catch (e) {
    return {
      notFound: true,
    };
  }
  if (!users) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      users,
    },
  };
}
