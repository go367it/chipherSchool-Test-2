import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="rounded-md space-y-3 bg-black">
        <img
          className="w-full"
          src={props.image} // displaying image by getting the image prop
          alt="img"
        />
        <div className="w-full h-full p-4">
          <h4 className="text-xl text-gray-100 text-center font-semibold">
            {/* displaying name by getting the name prop  */}
            {props.name}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
