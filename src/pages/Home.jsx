import { useContext } from "react";
import Card from "../components/Card";
import HeroBanner from "../components/HeroBanner";
import { AuthContext } from "../autho_provider/AuthoProvider";

const Home = () => {
    const authInfo = useContext(AuthContext);

    console.log(authInfo)
    return (
        <div className="mb-10 mt-10">
            <div className="container">
                <div>
                    <HeroBanner></HeroBanner>
                </div>
                <div className="mt-20">
                    <Card></Card>
                </div>
            </div>
        </div>
    );
};

export default Home;