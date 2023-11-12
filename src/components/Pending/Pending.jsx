import React from 'react';
import Loading from '../Loading';
import { Close } from '@mui/icons-material';

const Pending = (props) => {
  return (
    <div className="absolute z-40 top-14 text-black font-extrabold bg-opacity-60 bg-white  h-[100vh] left-0 w-full flex flex-col items-center justify-center">
      <div className="flex gap-4 items-center border border-black -mt-32 bg-white justify-center py-2 px-3 w-auto rounded-md">
        <Loading /> <p className="text-[16px] text-black "> Loading...</p>
      </div>

      <Close
        onClick={() => props.setPending(false)}
        xs={{ width: 20, height: 20 }}
        fontSize=""
        className="absolute cursor-pointer hover text-gray-800 top-4 right-5"
      />
    </div>
  );
};

export default Pending;
