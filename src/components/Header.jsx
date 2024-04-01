import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../autho_provider/AuthoProvider";

const Header = () => {

    const { user, logOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser()
            .then(() => console.log('Logout Success'))
            .catch(error => console.error(error))

    }

    return (
        <div className="border-b">
            <div className="container">
                <div className="navbar px-0 bg-base-100">
                    <div className="flex-1">
                        <Link to="/"><span className="text-2xl font-extrabold">FireBase</span></Link>
                    </div>
                    <div className="flex-none gap-2">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="/avatar.png" alt="" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] space-y-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                {
                                    user ? <>
                                        <li><NavLink to="/profile">Profile</NavLink></li>
                                        <li><NavLink to="/orders">Orders</NavLink></li>
                                        <li><button onClick={handleLogOut} className="btn btn-sm">Logout</button></li>
                                    </>
                                        : <>
                                            <li><NavLink to='/login'>Login</NavLink></li>
                                            <li><NavLink to="/register">Register</NavLink></li>
                                        </>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;