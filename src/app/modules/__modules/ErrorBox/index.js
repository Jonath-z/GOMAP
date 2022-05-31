import React from "react";

const ErrorBox = ({ ErrorMessage, isClosed, onCloseErrorBox }) => {
  return (
    <div
      className={`bg-black bg-opacity-40 absolute top-0 bottom-0 left-0 right-0 h-full w-full flex justify-center items-center z-40 font-robotto ${
        isClosed ? "hidden" : ""
      }`}
    >
      <div className="bg-white text-center w-full mx-10 rounded-xl">
        <p className="text-red py-10">{ErrorMessage}</p>
        <button
          onClick={onCloseErrorBox}
          className="py-2 px-10 mb-5 bg-matisse font-robotto font-bold text-white rounded-md"
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default ErrorBox;
