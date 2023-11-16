import { Link } from 'react-router-dom';
import bg from '../../assets/home/banner.jpg'
import { useState } from 'react';

const SignUp = () => {
    const [name, setName] =useState('');
    const [photo, setPhoto] =useState('');
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');

    const handleSignUp = event =>{
        event.preventDefault();
        const user ={
            name, photo, email, password
        }
        console.log(user);
    }
  return (
    <div style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
    }}>

        <div className="hero bg-blue-200 bg-opacity-10"  >
            <div className="">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white">Please Sign Up now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-50">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input onBlur={(e)=>setName(e.target.value)} type="name" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input onBlur={(e)=>setPhoto(e.target.value)} type="photo" name="photo" placeholder="Photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onBlur={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>

                    </form>
                    {/* <div className="form-control mt-6">
                        <button onClick={handleGoogleSignIn} type="submit" className="btn btn-primary">Google</button>
                    </div> */}
                    {/* {
                        loginError && <p>{loginError}</p>
                    }
                    {
                        succcesLogin && <p>{succcesLogin}</p>
                    } */}
                    <p className="text-center text-xl">Don't Have an Account <Link to='/login' className="text-red-400 font-bold">Login</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp
