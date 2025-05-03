import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { AuthFormData } from '../../types';

const SignUp : React.FC = () => {
    const [formData, setFormData] = useState <AuthFormData>({
        email: '',
        password: '',
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData.email, formData.password);
    };

  return <Layout> 
    <div className='flex justify-center w-full'>
      <div className='w-full max-w-md bg-white rounded-lg shadow-lg p-6'>
        <h1 className='text-3xl font-bold text-center text-gray-500 mb-5'>Join Us Today</h1>

        <form className='space-y-7' onSubmit={handleSubmit}>
            <div>
                <label className='block text-sm text-gray-500'>Email</label>
                <input 
                 type="email"
                 name="email" 
                 required 
                 placeholder='Enter your email'
                 className='mt-1 block w-full px-4 py-3 border border-gray-500 rounded-md 
                 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm'
                 value={formData.email} 
                 onChange={handleChange}
                 />

                <label className='block text-sm text-gray-500 mt-1'>Password</label>
                <input 
                 type="password"
                 name="password" 
                 required 
                 placeholder='Enter your password'
                 className='mt-1 block w-full px-4 py-3 border border-gray-500 rounded-md 
                 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm'
                 value={formData.password} 
                 onChange={handleChange}
                 />
            </div>
            <button 
                type='submit' 
                className={`w-full py-3 px-4 bg-green-500 text-white font-bold rounded-md shadow-md transition duration-300 
              disabled:bg-green-300 disabled:cursor-not-allowed hover:bg-green-600 flex items-center justify-center `}>
                    Sign Up
            </button>
        </form>

      </div>
    </div>
   </Layout>;
};

export default SignUp;