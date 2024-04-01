import { useContext } from "react";
import { AuthContext } from "../autho_provider/AuthoProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <div className="container">
                <div className="mt-20 mb-20 border rounded-xl p-10 pt-5 m-auto max-w-[500px]">
                    <div className="flex justify-center max-w-[150px] m-auto">
                        <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="rounded-full" />
                    </div>
                    <div>
                        <h1>Name: {user && user.name}</h1>
                        <h2>Email: {user && user.email}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;