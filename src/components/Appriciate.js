import React from 'react';
import logo from '../assets/images/illustration-thank-you.svg';
import { useNavigate } from 'react-router';

const Appriciate = ({nums, setnums}) => {
    const navigate = useNavigate();
    const okay = () => {
        setnums(0)
        navigate("/", { replace: true })
      }
  console.log(nums, 'in appreciate');

    return (
        <>
            <div className="w-[18rem] p-5 bg-gray-900 m-auto mt-40 rounded-xl flex flex-col justify-center">
                <img src={logo} alt="" className='d-block m-auto h-16' />
                <p className='text-xs bg-gray-800 rounded-full text-center p-1 my-4 text-orange-400 w-44 m-auto'>You selected {nums} out of 5</p>
                <div className='my-4'>
                    <h4 className='text-white text-center font-semibold'>Thank you!</h4>
                    <p className='text-gray-500 text-xs text-center my-2'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                </div>
                <div className='mx-auto'>
                    <button className="w-10 rounded bg-orange-500 text-white text-sm p-1 hover:bg-white hover:text-orange-500" onClick={ okay }>Ok</button>
                </div>
            </div>
        </>
    )
}

export default Appriciate
