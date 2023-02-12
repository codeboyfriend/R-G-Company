import React from 'react';
import { Link } from 'react-router-dom';

const Entries = () => {
  return (
    <div className='box w-[360px] px-4 py-3'>
        <h4 className='text-[1.2rem] text-center font-[500] text-[rgba(0, 0, 0, 0.8)]'>R&G INSURANCE ASSOCIATES</h4>
        <h3 className='text-center text-[.9rem]'>SHORT FORM INHERITANCE</h3>

        <div className="line" mb-4></div>

        <p className='text-sm py-3'>Please, make sure to go through the <Link className='text-[red]' to='/instruction'>instruction</Link> before filling the form</p>

        <div className="line" mb-4></div>

        <div className="box-form">
          <p>Name of decendent</p>

          <div className='my-form'>
            <label>Last Name</label>
            <input 
              type="text"
              className='input w-full bg-transparent'
            />
          </div>
          
        </div>
    </div>
  )
}

export default Entries
