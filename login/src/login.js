import React from 'react'
import { Link } from 'react-router-dom'

export default function login() {
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Signup</h2>
                <form>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' name='email'
                            className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter password' name='password'
                            className='form-control rounded-0' />
                    </div>
                    <button type='submit' className='btn-btn-success w-100 rounded-0'>Login</button>
                    <p>You are agree  to our terms and polics</p>
                    <Link to="/register" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Register</Link>
                </form>
            </div>
        </div>
    )
}
