import { Outlet, useLocation } from 'react-router-dom';
import FavouriteBar from "./FavouriteBar.jsx";
import BackButton from "./BackButton.jsx";
import AuthButtons from "@/components/Login/AuthButtons.jsx";
import CoinsBar from "@/components/CoinsBar/CoinsBar.jsx";


const Layout = () => {

    const location = useLocation();

    const blockBackButton = location.pathname === '/leagues' || location.pathname === '/';

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center "
             style={{
                 background: 'radial-gradient(circle at center, green 0%, black 100%)'
             }}>
            <CoinsBar />
            <header className=" text-white text-center flex space-around gap-10">
               <BackButton disable={blockBackButton}/>
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