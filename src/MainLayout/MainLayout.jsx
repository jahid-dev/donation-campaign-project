import { Outlet } from 'react-router-dom';
import NavSection from '../components/Header/NavSection/NavSection';
const MainLayout = () => {
    return (
        <div className="w-11/12 mx-auto mb-20">
            <NavSection></NavSection>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;