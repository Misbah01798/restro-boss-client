import { Link } from 'react-router-dom';
import bg from '../../assets/home/banner.jpg'
import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const {signIn} =useContext(AuthContext);
    const captchaRef = useRef(null);
    const [disabled, setDisabled] =useState(true);
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    useEffect(()=>{
        loadCaptchaEnginge(6);
    }, [])
     const handleLogin = event =>{
        event.preventDefault();
        const logUser ={
            email, password
        }
        console.log(logUser)
        signIn(email, password)
        .then(result =>{
            const user =result.user;
            console.log(user);
            Swal.fire({
                title: "Good!",
                text: `${user?.name} are Login Successful`,
                icon: "success"
              });
        })

     }
     const handleValided =e =>{
        const user_captcha_value =captchaRef.current.value;
        
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false);
        }else{
            setDisabled(false)
        }
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
                    <h1 className="text-5xl font-bold text-white">Please Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-50">
                    <form onSubmit={handleLogin} className="card-body">
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
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input  ref={captchaRef} type="text" name="captcha" placeholder="type text above" className="input input-bordered" required />
                            <button onClick={handleValided} className="btn btn-sm btn-primary">Valided</button>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" disabled={disabled} className="btn btn-primary">Login</button>
                        </div>

                    </form>
                    <div className="form-control mt-6">
                        {/* <button onClick={handleGoogleSignIn} type="submit" className="btn btn-primary">Google</button> */}
                    </div>
                    {/* {
                        loginError && <p>{loginError}</p>
                    }
                    {
                        succcesLogin && <p>{succcesLogin}</p>
                    } */}
                    <p className="text-center text-xl">Don't Have an Account <Link to='/singUp' className="text-red-400 font-bold">Register</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;
