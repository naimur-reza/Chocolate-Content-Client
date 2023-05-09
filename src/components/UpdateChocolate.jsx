import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLoaderData } from "react-router-dom";
const UpdateChocolate = () => {
  const loadedChoc = useLoaderData();
  const { name, _id, category, country, img } = loadedChoc;
  console.log(loadedChoc);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:5000/updateChocolate/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Updated");
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
          defaultValue={name}
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
          defaultValue={country}
          placeholder="enter country"
          className="border-2 px-3 py-2 "
          {...register("country", { required: true })}
        />
        <br />
        <p className="pb-1 text-sm text-gray-600 font-semibold">Photo URL</p>
        <input
          defaultValue={img}
          placeholder="photo url"
          className="border-2 px-3 py-2 "
          {...register("img", { required: true })}
        />
        <br />
        <select
          defaultValue={category}
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
          value="Update Now"
        />
      </form>
    </>
  );
};

export default UpdateChocolate;
