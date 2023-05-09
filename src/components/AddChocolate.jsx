import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const AddChocolate = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/chocolate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((comingData) => {
        if (comingData.insertedId) {
          alert("Added successfully");
        }
      });
  };

  return (
    <>
      <Link to={"/"}>
        <li className="list-none rounded bg-gray-300 text-white  font-semibold  px-2 py-1 w-fit">
          Back To Home
        </li>
      </Link>
      <form
        className="flex-col flex max-w-lg justify-center mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <p className="pb-1 text-sm text-gray-600 font-semibold">Enter Name</p>

        <input
          placeholder="enter name"
          className="border-2 px-3 py-2 mb-2 "
          {...register("name")}
        />
        <br />
        {/* include validation with required or other standard HTML validation rules */}
        <p className="pb-1 text-sm text-gray-600 font-semibold">
          Enter Country
        </p>
        <input
          name="country"
          placeholder="enter country"
          className="border-2 px-3 py-2 "
          {...register("country", { required: true })}
        />
        <br />
        <p className="pb-1 text-sm text-gray-600 font-semibold">Photo URL</p>
        <input
          placeholder="photo url"
          className="border-2 px-3 py-2 "
          {...register("img", { required: true })}
        />
        <br />
        <select
          className="border-2 px-4 py-2 outline-none"
          {...register("category")}
        >
          <option disabled className="disabled" value="">
            Select Country
          </option>
          <option value="Base">Base</option>
          <option value="Regular">Regular</option>
          <option value="Premium">Premium</option>
        </select>
        <br />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input
          className="block bg-yellow-800 text-white px-4 py-2 rounded-lg cursor-pointer"
          type="submit"
        />
      </form>
    </>
  );
};

export default AddChocolate;
