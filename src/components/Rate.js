import React from 'react';
import logo from '../assets/images/icon-star.svg';

const Rate = ({ratings, nums, setnums, submit}) => {
  return (
    <>
      <div className="w-[18rem] p-5 bg-gray-900 m-auto mt-40 rounded-xl">
        <img src={logo} alt="" className='bg-gray-800 rounded-full p-2' />
        <div className='my-4'>
          <h4 className='text-white'>How did we do?</h4>
          <p className='text-gray-500 text-xs text-justify my-2'>Please let us know how we did with your support request. All feedback is appreciated
            to help us improve our offering!</p>
        </div>
        <div className='text-gray-500 mt-3 flex justify-between items-center my-4'>
          {ratings.map((num, id) => {
            return <div key={id} className={`w-8 h-8 rounded-full ${num===nums ? 'bg-orange-500' :  num===nums-1 ? 'bg-gray-200' :'bg-gray-800'} flex justify-center items-center cursor-pointer`} onClick={() => setnums(num)}>{num}</div>}
          )}
        </div>
        <button className="w-full rounded-full bg-orange-500 text-white text-sm p-1 hover:bg-white hover:text-orange-500" onClick={submit} >Submit</button>
      </div>
    </>
  )
}

export default Rate
