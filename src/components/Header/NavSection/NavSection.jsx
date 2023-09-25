import { NavLink } from "react-router-dom";
import "./NavSection.css"
const NavSection = () => {
    return (
        <div>
            <div className="div flex flex-row justify-between items-center my-10">
                <h1 className="text-5xl font-extrabold">Donation</h1>
                <div className="space-x-5 font-medium">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/donation"}>Donation</NavLink>
                    <NavLink to={"/statistics"}>Statistics</NavLink>
                </div>
            </div>
        </div>
    );
};

export default NavSection;