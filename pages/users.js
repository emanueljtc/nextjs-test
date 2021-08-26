import React, { useEffect, useState } from 'react';
import NavBar from '../components/Nav';
import { getListUsers } from '../utils/services/';
// Redux
import { connect } from 'react-redux';
import { showUsers, deleteUser } from './../redux/actions/usersActions';
import DataTable from 'react-data-table-component';
import UserDetail from '../components/UserDetail';


const Users = ({ users, showUsers, deleteUser }) => {
  const [userSelected, setUserSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userID, setUserID] = useState(null);


  useEffect(() => {
    showUsers();
  }, []);
  useEffect(() => {
    if (!!userSelected) {
      setShowModal(true);
    }
  }, [userSelected]);

  useEffect(() => {
    console.log('paso por aqui', userID)
    if(!!userID){
      deleteUser(userID, setShowModal)
    }
  }, [userID])
  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true,
    },
    {
      name: 'Username',
      selector: 'username',
      sortable: true,
    },
    {
      name: 'Website',
      selector: 'website',
      sortable: true,
    },
  ];

  return (
    <>
      <NavBar />
      <div className="main">
        <div className="content-title flex justify-center pt-24">
          <p className="text-gray-500 font-extrabold  uppercase text-5xl">
            List Users
          </p>
        </div>
        <div className="px-24">
          <DataTable
            data={users}
            columns={columns}
            onRowClicked={(row) => setUserSelected(row)}
          />
        </div>
      </div>
      <UserDetail
        showModal={showModal}
        user={userSelected}
        setShowModal={setShowModal}
        setUserID={setUserID}
      />
    </>
  );
};

// state
const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};

export default connect(mapStateToProps, { showUsers, deleteUser })(Users);
