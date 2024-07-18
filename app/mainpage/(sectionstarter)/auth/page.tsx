"use client"
import { useForm } from "react-hook-form";
import { signup } from "./actions";

export default function Signin() {

  const {register, handleSubmit, formState: {errors}} = useForm();

  return (
    <>
    <div className="flex px-2 items-center justify-center rounded-2xl bg-gray-800 border-transparent border-t-white border-b-white border-2">
      <div className="flex p-4">
        <form className=" flex flex-col text-[10px] w-full space-y-5" onSubmit={handleSubmit(data => console.log(data))}>
          <div className=" space-y-2">
            <label htmlFor="email" className="text-[10px] text-white">Enter your email to get started</label>
            <input type="email" id="email" placeholder="email" required {...register('email', { required: true })} className="rounded-lg w-full p-1"/>
            {errors.email && <p className="text-red">Email is required</p>}
          </div>
          <div className=" space-y-2">
            <label htmlFor="name" className="text-[10px] text-white">Enter your full name</label>
            <input type="text" id="name" placeholder="full name" required {...register('name', { required: true })} className="rounded-lg w-full p-1"/>
            {errors.fullname && <p className="text-red">full name is required</p>}
          </div>

          <div className=" space-y-2">
            <label htmlFor="password" className="text-[10px] text-white">Just a password, 8 is the limit </label>
            <input type="password" id="password" placeholder="password" required {...register('password', { required: true })} className="rounded-lg w-full p-1"/>
            {errors.password && <p className="text-red">password is required</p>}
          </div>
          {/* Submit button */}
          <div className='flex flex-col w-full'>
            <button type='submit' className='p-3 bg-gray-900 rounded transition duration-200 hover:bg-gray-700 text-white' formAction={signup}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}


