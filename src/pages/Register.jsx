import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../autho_provider/AuthoProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();


    const handleRegisterForm = (e) => {
        e.preventDefault();

        const fullName  = e.target.fullName.value;
        const email     = e.target.email.value;
        const password  = e.target.password.value;

        // Create user in firebase
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            e.target.reset('');
            navigate("/profile");
        })
        .catch(error => {
            console.log(error)
        })

        

        console.log(fullName, email, password)
    }


    return (
        <div className="bg-base-200">
            <div className="container">
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold mb-10">Register now!</h1>
                        </div>
                        <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                            <form onSubmit={handleRegisterForm} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" placeholder="enter your full name" className="input input-bordered" name="fullName" required />
                                </div>
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
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                                <p>Already have an account? <Link to="/login">Login Now!</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;