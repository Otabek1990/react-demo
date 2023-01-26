import React from "react";

function Main(props) {
  const handleSubmit=e=>{
    e.preventDefault()
  }
  return (
    <main>
      <h1>hello</h1>
      <div className="flex gap-x-3 items-center justify-between h-80 w-3/4 text-white bg-slate-600 mx-auto p-5">
        <p className=" text-3xl ">salom</p>
        <p className=" text-3xl ">salom</p>
        <p className=" text-3xl ">salom</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center text-center shadow-[0_0_17px_rgba(0,0,0,0.5)] gap-y-6 w-3/4 p-5 mx-auto my-5 bg-orange-500" action="">
        <h1>Register</h1>
        <input className="w-1/2 p-3 outline-none"   type="text" />
        <input className="w-1/2 p-3 outline-none" type="text" />
        <input className="w-1/2 p-3 outline-none" type="text" />
        <button className="bg-sky-600 p-3 rounded-md text-2xl text-white font-bold">register</button>
      </form>
    </main>
  );
}

export default Main;
