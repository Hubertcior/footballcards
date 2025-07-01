import { Outlet } from 'react-router-dom';
import FavouriteBar from "./FavouriteBar.jsx";
import BackButton from "./BackButton.jsx";

const Layout = () => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center p-10"
             style={{
                 background: 'radial-gradient(circle at center, green 0%, black 100%)'
             }}>
            <BackButton/>
            <header className=" text-white text-center">
                <h1 className="text-4xl font-bold">⚽ Football Explorer ⚽</h1>
            </header>

            <main className="flex-grow justify-center align-center p-4 w-full max-w-6xl">
                <Outlet />
            </main>

            <footer>
                <FavouriteBar />
            </footer>
        </div>
    );
};

export default Layout;