import { Link } from 'react-router-dom';
import bg from '../../assets/home/banner.jpg'
import { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {
    const {createuser} =useContext(AuthContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) =>{
        createuser(data.email, data.password)
        .then(result =>{
            const logUser =result.user;
            console.log(logUser)
        })
      } 
  return (
    <>
    <Helmet>
        <title>Restro Boss | Sign Up</title>
    </Helmet>
    <div style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
    }} className=''>

        <div className="hero bg-blue-200 bg-opacity-10 "  >
            <div className="mt-10 mb-10">
                <div className="text-center mt-10">
                    <h1 className="text-5xl font-bold text-white">Please Sign Up now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-50">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="name" name="name" placeholder="name" className="input input-bordered" required />
                            {errors.name && <span>This field is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input {...register("photo", { required: true })} type="text" name="photo" placeholder="Photo" className="input input-bordered" required />
                           

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" name="email" placeholder="email" className="input input-bordered" required />
                            {errors.email && <span>This field is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true, pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}/ } )} type="password" name="password" placeholder="password" className="input input-bordered" required />
                            {errors.password?.type === 'pattern' && <span className='text-red-600'>less than eight characters OR anything with no numbers OR anything with no uppercase OR or anything with no lowercase OR anything with no special characters</span>}

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
    </>
  )
}

export default SignUp
