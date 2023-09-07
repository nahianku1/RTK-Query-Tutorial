import React, { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa6";
import Modal from "./Modal";
import UpdateModal from "./UpdateModal";
import { useDeleteUsersMutation, useGetUsersQuery } from "./endpoints";
import Loader from "./Loader";

function RTKQuery() {
  let [showCreateModal, setShowCreateModal] = useState(false);
  let [showUpdateModal, setShowUpdateModal] = useState(false);
  let [modalinfo, setModalinfo] = useState(null);
  let { data, isLoading, isError, error } = useGetUsersQuery();
  console.log(data);
  console.log(error);

  let [deleteUsers, { data: deletedata }] = useDeleteUsersMutation();
  console.log(deletedata);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <h1>{error.error}</h1>;
  }

  let handleEdit = (user) => {
    setModalinfo(user);
    setShowUpdateModal(true);
  };
  let handleDelete = (id) => {
    deleteUsers(id);
  };

  return (
    <div className="text-center">
      {showCreateModal && <Modal setShowCreateModal={setShowCreateModal} />}
      {showUpdateModal && (
        <UpdateModal
          setShowUpdateModal={setShowUpdateModal}
          modalinfo={modalinfo}
        />
      )}

      <button
        onClick={() => setShowCreateModal(!showCreateModal)}
        className="bg-lime-400 font-bold text-white p-[10px] mb-[20px] rounded-md"
      >
        Create New
      </button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr key={crypto.randomUUID()}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>
                <div className="flex justify-center items-center gap-2">
                  <button
                    onClick={() => handleEdit(user)}
                    className="bg-blue-400 p-[5px] text-[15px] rounded-md text-white"
                  >
                    <FaPen />
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-400 p-[5px] text-[15px] rounded-md text-white"
                  >
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RTKQuery;
