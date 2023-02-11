import React from 'react';
import { Link } from 'react-router-dom';

const Entries = () => {
  return (
    <div className='px-4 py-3'>
        <h4 className='text-[1.2rem] text-center font-[500] text-[rgba(0, 0, 0, 0.8)]'>R&G INSURANCE ASSOCIATES</h4>
        <h3 className='text-center text-[.9rem]'>SHORT FORM INHERITANCE</h3>

        <div className="line" mb-4></div>

        <p className='text-sm py-3'>Please, make sure to go through the <Link to='/instruction'>instruction</Link> before filling the form</p>

        <div className="line" mb-4></div>
    </div>
  )
}

export default Entries
