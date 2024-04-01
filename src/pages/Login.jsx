import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../autho_provider/AuthoProvider";

const Login = () => {

    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleForm = (e) => {
        e.preventDefault();

        const email     = e.target.email.value;
        const password  = e.target.password.value;

        // Login User
        loginUser(email, password)
        .then(loginResult => {
            console.log(loginResult.user)
            e.target.reset('');
            navigate("/profile");
        })
        .catch(error => {
            console.log(error)
        })
        
        console.log(email, password);
    }
    
    return (
        <div className="bg-base-200">
            <div className="container">
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold mb-10">Login now!</h1>
                        </div>
                        <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                            <form onSubmit={handleForm} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <p>Not a member yet? <Link to="/register">Register Now!</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;