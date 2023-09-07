import React from "react";
import { useForm } from "react-hook-form";
import { useUpdateUsersMutation } from "./endpoints";

function UpdateModal({ setShowUpdateModal, modalinfo }) {
  let { register, handleSubmit, reset } = useForm();
  let [updateUser, { data: userData }] = useUpdateUsersMutation();
  console.log(userData);

  let onSubmit = (data) => {
    updateUser({ id: modalinfo.id, user: data });
    reset();
  };
  return (
    <div className="fixed flex justify-center items-center [backdrop-filter:blur(5px)] top-0 left-0 w-[100%] h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg p-[30px] w-[400px] h-auto text-start"
      >
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-center text-[20px]">Update Entry</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Name:</label>
            <input
              className="outline-none outline-green-400 rounded-md py-[4px] px-[10px]"
              type="text"
              placeholder="Name"
              defaultValue={modalinfo.name}
              {...register("name")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">User Name:</label>
            <input
              className="outline-none outline-green-400 rounded-md py-[4px] px-[10px]"
              type="text"
              placeholder="User Name"
              defaultValue={modalinfo.username}
              {...register("username")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="">Email:</label>
            <input
              className="outline-none outline-green-400 rounded-md py-[4px] px-[10px]"
              type="text"
              placeholder="Email"
              defaultValue={modalinfo.email}
              {...register("email")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="">Mobile:</label>
            <input
              className="outline-none outline-green-400 rounded-md py-[4px] px-[10px]"
              type="text"
              placeholder="Mobile"
              defaultValue={modalinfo.mobile}
              {...register("mobile")}
            />
          </div>
        </div>
        <div className="flex gap-1 mt-[20px]">
          <button className="bg-blue-400 py-[5px] px-[8px] text-white rounded-md">
            Update
          </button>
          <button
            onClick={() => setShowUpdateModal(false)}
            className="bg-red-400 py-[5px] px-[8px] text-white rounded-md"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateModal;
