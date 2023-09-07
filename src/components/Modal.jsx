import React from "react";
import { useForm } from "react-hook-form";
import { useCreateUsersMutation } from "./endpoints";

function Modal({ setShowCreateModal }) {
  let { register, handleSubmit, reset } = useForm();
  let [addUser, { data: userData }] = useCreateUsersMutation();
  console.log(userData);

  let onSubmit = (data) => {
    addUser(data);
    reset();
  };
  return (
    <div className="fixed flex justify-center items-center [backdrop-filter:blur(5px)] top-0 left-0 w-[100%] h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg p-[30px] w-[400px] h-auto text-start"
      >
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-center text-[20px]">Add Entry</h1>

          <div className="flex flex-col gap-2">
            <label htmlFor="">Name:</label>
            <input
              className="outline-none outline-green-400 rounded-md py-[4px] px-[10px]"
              type="text"
              placeholder="Name"
              {...register("name")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">User Name:</label>
            <input
              className="outline-none outline-green-400 rounded-md py-[4px] px-[10px]"
              type="text"
              placeholder="User Name"
              {...register("username")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="">Email:</label>
            <input
              className="outline-none outline-green-400 rounded-md py-[4px] px-[10px]"
              type="text"
              placeholder="Email"
              {...register("email")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="">Mobile:</label>
            <input
              className="outline-none outline-green-400 rounded-md py-[4px] px-[10px]"
              type="text"
              placeholder="Mobile"
              {...register("mobile")}
            />
          </div>
        </div>
        <div className="flex gap-1 mt-[20px]">
          <button className="bg-blue-400 py-[5px] px-[8px] text-white rounded-md">
            Add
          </button>
          <button
            onClick={() => setShowCreateModal(false)}
            className="bg-red-400 py-[5px] px-[8px] text-white rounded-md"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
