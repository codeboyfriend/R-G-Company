import React from 'react';
import { Link } from 'react-router-dom';

const Entries = () => {
  return (
    <div className='box w-[360px] overflow-hidden px-4 py-3'>
        <h4 className='text-[1.2rem] text-center font-[500] text-[rgba(0, 0, 0, 0.8)]'>R&G INSURANCE ASSOCIATES</h4>
        <h3 className='text-center text-[.9rem]'>SHORT FORM INHERITANCE</h3>

        <div className="line" mb-4></div>

        <p className='text-sm py-3'>Please, make sure to go through the <Link className='text-[red]' to='/instruction'>instruction</Link> before filling the form</p>

        <div className="line" mb-4></div>

        <div className="box-form">
          <p className='text-[.9rem] mt-2 mb-[-.3rem]'>Name of decendent</p>

          <div className='flex'>
            <div className='my-form'>
              <label>Last Name:</label>
              <input 
                value='Smith'
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
              />
            </div>

            <div className='my-form'>
              <label>First Name:</label>
              <input 
                value='Sarah'
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
              />
            </div>
          </div>

          <div className='flex'>
            <div className='my-form'>
              <label>Middle Name:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'Lester'}
              />
            </div>
            <div className='my-form'>
              <label>Social Security Number</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'721-07-4426'}
              />
            </div>
          </div>

          <div className='flex'>
            <div className='my-form'>
              <label>Date of Death</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'13-03-2013'}
              />
            </div>
            <div className='my-form'>
              <label>Age of Decendent</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'45 years'}
              />
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Entries
