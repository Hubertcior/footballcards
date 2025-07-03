import { Outlet, useLocation } from 'react-router-dom';
import FavouriteBar from "./FavouriteBar.jsx";
import BackButton from "./BackButton.jsx";
import AuthButtons from "@/components/Login/AuthButtons.jsx";


const Layout = () => {

    const location = useLocation();

    const hideBackButton = location.pathname === '/leagues' || location.pathname === '/';

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center p-10"
             style={{
                 background: 'radial-gradient(circle at center, green 0%, black 100%)'
             }}>
            <header className=" text-white text-center flex space-around gap-10">
                {!hideBackButton && <BackButton />}
                <h1 className="text-4xl font-bold ">⚽ Football Explorer ⚽</h1>
                <AuthButtons/>
            </header>

            <main className="flex-grow justify-center align-center p-4 w-full max-w-6xl">
                <Outlet />
            </main>


            <div className="fixed bottom-8 right-8 z-50">
                <FavouriteBar />
            </div>
        </div>
    );
};

export default Layout;