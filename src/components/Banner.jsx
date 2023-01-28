import React from "react";

function Banner() {
  return (
    <div
      className="h-[550px] pl-44 flex items-center  "
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-1/2 text-white ">
        <h1 className="text-7xl">Tabiat rasmi</h1>
        <p className="text-2xl text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          voluptate quo delectus cupiditate itaque nisi libero similique fugit,
          incidunt necessitatibus!
        </p>
      </div>
    </div>
  );
}

export default Banner;
