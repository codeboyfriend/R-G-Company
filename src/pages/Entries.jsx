import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Entries = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [ssn, setSSN] = useState('');
  const [phone, setPhone] = useState('');
  const [occupation, setOccupation] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const submitForm = () => {
    if (firstName && lastName && middleName && phone && occupation &&  street && city && state && zipCode !== '') {
      console.log('Yes')
    } else {
      console.log('No')
    }
  }

  return (
    <div className='box w-[360px] overflow-hidden px-4 py-3'>
        <h4 className='text-[1.2rem] text-center font-[500] text-[rgba(0, 0, 0, 0.8)]'>R&G INSURANCE ASSOCIATES</h4>
        <h3 className='text-center text-[.9rem]'>SHORT FORM INHERITANCE</h3>

        <div className="line" mb-4></div>

        <p className='text-sm py-3'>Please, make sure to go through the <Link className='text-[red]' to='/instruction'>instruction</Link> before filling the form</p>

        <div className="line" mb-4></div>

        <div className="box-form">
          <p className='text-[.9rem] mt-2 mb-[-.3rem]'>Name of decendent</p>

          <div className='flex pr-[5rem]'>
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
              <label>Social Security Number:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'721-07-4426'}
              />
            </div>
          </div>

          <div className='flex'>
            <div className='my-form'>
              <label>Date of Death:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'13-03-2013'}
              />
            </div>
            <div className='my-form'>
              <label>Age of Decendent:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'45 years'}
              />
            </div>
          </div>

          <div className='flex'>
            <div className='my-form'>
              <label>Occupation:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'Antique material trading'}
              />
            </div>
          </div>

          <div className='my-form flex my-1'>
            <label>Did decendent have a will?</label>
            <div className='mx-2'>
                <label>Yes</label>
                <input className='ml-1' type="checkbox" checked/>
              </div>
              <div>
                <label>NO</label>
                <input className='check_box ml-1' type="checkbox"/>
            </div>
          </div>

          <div className="line_form" mb-4></div>

          <p className='text-[.9rem] mb-[-.3rem]'>Personal Representative Name (executor, etc)</p>

          <div className='flex'>
            <div className='my-form'>
              <label>Last Name:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'Taratino'}
              />
            </div>
            <div className='my-form'>
              <label>First Name:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'Christopher'}
              />
            </div>
          </div>
          
          <div className='flex'>
            <div className='my-form'>
                <label>Middle Name:</label>
                <input
                  type="text"
                  className='input text-[#777777] bg-transparent outline-none border-none'
                  value={'      I'}
                />
              </div>
          </div>

          <div className='flex'>
            <div className='my-form'>
              <label>Address:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'13 Murray Hill'}
              />
            </div>
            <div className='my-form'>
              <label>City:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'Dayton'}
              />
            </div>
          </div>

          <div className='flex'>
            <div className='my-form'>
              <label>State:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'Ohio'}
              />
            </div>
            <div className='my-form'>
              <label>Zip code:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'45403'}
              />
            </div>
          </div>

          {/* BENEFICIARY  */}
          <div className="line_form" mb-4></div>

          <p className='text-[.9rem] mb-[-.3rem]'>Beneficiary:</p>

          <div className='flex'>
            <div className='my-form'>
              <label>Last Name:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'Smith'}
              />
            </div>
            <div className='my-form'>
              <label>First Name:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'Nancy'}
              />
            </div>
          </div>

          <div className='flex'>
            <div className='my-form'>
              <label>Phone:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'(781) 365-8296'}
              />
            </div>
            <div className='my-form'>
              <label>Sex:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'   F'}
              />
            </div>
          </div>

          <div className='flex'>
            <div className='my-form'>
              <label>Address:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'4210 32ND Ave W'}
              />
            </div>
            <div className='my-form'>
              <label>City:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'Seattle'}
              />
            </div>
          </div>

          <div className='flex'>
            <div className='my-form'>
              <label>State:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'Washington'}
              />
            </div>
            <div className='my-form'>
              <label>Zip code:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'98199'}
              />
            </div>
          </div>

          {/* ATTORNEY */}
          <div className="line_form" mb-4></div>

          <p className='text-[.9rem] mb-[-.3rem]'>Attorney for the Insurance</p>

          <div className='flex'>
            <div className='my-form'>
              <label>Last Name:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'Brandon'}
              />
            </div>
            <div className='my-form'>
              <label>First Name:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'Musick'}
              />
            </div>
          </div>

          <div className='flex'>
            <div className='my-form'>
                <label>Middle Name:</label>
                <input
                  type="text"
                  className='input text-[#777777] bg-transparent outline-none border-none'
                  value={'A.S'}
                />
              </div>

              <div className='my-form'>
                <label>Phone:</label>
                <input
                  type="text"
                  className='input text-[#777777] bg-transparent outline-none border-none'
                  value={'(347) 433-7368'}
              />
            </div>
          </div>

          <div className='flex'>
            <div className='my-form'>
              <label>Address:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'Newlands Farm'}
              />
            </div>
            <div className='my-form'>
              <label>City:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'Aylesbeare'}
              />
            </div>
          </div>

          <div className='flex'>
            <div className='my-form'>
              <label>State:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={' United Kingdom'}
              />
            </div>
          </div>

          {/* Receiver */}
          <div className="line_form" mb-4></div>

          <p className='text-[.9rem] mb-[-.3rem]'>Receiver {'>'} Spouse</p>

          <div className='flex'>
            <div className='filled_form'>
              <label>First Name:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className='filled_form'>
              <label>Last Name:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>


          <div className='flex'>
            <div className='filled_form'>
              <label>Middle Name:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </div>
            <div className='filled_form'>
              <label>Social Security Number:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={ssn}
                onChange={(e) => setSSN(e.target.value)}
              />
            </div>
          </div>

          <div className='flex'>
            <div className='filled_form'>
              <label>Phone Number:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className='filled_form'>
              <label>Occupation:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
              />
            </div>
          </div>

          <div className='flex'>
            <div className='filled_form'>
              <label>Address Street:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div className='filled_form'>
              <label>City:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>

          <div className='flex'>
            <div className='filled_form'>
              <label>State:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className='filled_form'>
              <label>Zip Code:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
          </div>

          <div className='my-form flex my-1'>
            <label>Source of funds:</label>
            <div className='mx-2'>
                <input className='check_box mr-1' type="checkbox" />
                <label>Salary</label>
              </div>
              <div>
                <input className='check_box mr-1' type="checkbox" />
                <label>Investment</label>
              </div>
              <div>
                <input className='mr-1' type="checkbox" checked />
                <label>Inheritance</label>
              </div>
          </div>

          <div className='my-form flex my-1'>
            <label>Currency:</label>
            <div className='mx-2'>
                <label>USD</label>
                <input className='check_box ml-1' type="checkbox" checked/>
              </div>
              <div>
                <label>BTC</label>
                <input className='check_box ml-1' type="checkbox" />
              </div>
            </div>

            <div className='my-form flex my-1'>
            <label>Form of Claim:</label>
            <div className='mx-2'>
                <label>Box</label>
                <input className='ml-1' type="checkbox" checked />
              </div>
              <div>
                <label>Bank</label>
                <input className='check_box ml-1' type="checkbox" />
              </div>
          </div>

          <div className='flex'>
            <div className='my-form'>
              <label>Batch No:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'66840090040'}
              />
            </div>
            <div className='my-form'>
              <label>Year Deposited:</label>
              <input
                type="text"
                className='input text-[#777777] bg-transparent outline-none border-none'
                value={'2013'}
              />
            </div>
          </div>

          <div className='my-form flex'>
            <label>Secret Question: My Pets Name?</label>
            <label className='ml-2 text-[#777777]'>King</label>
          </div>
          <div className='my-form flex'>
            <label>Secret Code:</label>
            <label className='ml-2 text-[#777777]'>24-YWS-9060040</label>
          </div>
          <div className='flex'> 
            <div className='my-form flex'>
              <label>Total Amount:</label>
              <label className='ml-2 text-[#777777]'>$100,000</label>
            </div>
            <div className='my-form flex ml-2'>
              <label>Amount Received:</label>
              <label className='ml-2 text-[#777777]'>$2000</label>
            </div>
          </div>
          <div className='my-form flex'>
              <label>Balance:</label>
              <label className='ml-2 text-[#777777]'>$98,000</label>
            </div>
            <div className='flex'> 
            <div className='my-form flex'>
              <label>VAT:</label>
              <label className='ml-2 text-[#777777]'>$500</label>
            </div>
            <div className='my-form flex ml-2'>
              <label>VAT Balance:</label>
              <label className='ml-2 text-[#777777]'>$100</label>
            </div>
          </div>

          <button 
            onClick={() => submitForm()}
            className='w-full mt-2 rounded-lg bg-[#0069be] text-[#fff] p-2 hover:bg-[#0083ee]'>SUBMIT
          </button>
        </div>
    </div>
  )
}

export default Entries;
