import React from 'react';

const UserDetail = ({ user, showModal, setShowModal, setUserID }) => {
  const handleDelete = () => {
    const { id } = user;
    setUserID(id)
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    User Detail - {user.name}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-column">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Name: {user.name}
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Username: {user.username}
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Email: {user.email}
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Phone: {user.phone}
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Website:{' '}
                    <a href={user.website} className="text-blue-500">
                      {user.website}{' '}
                    </a>
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    City: {user.address.city}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-blue-900 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleDelete()}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default UserDetail;
