import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './components/Home';
import NavbarLoading from './NavbarLoading';

const Layout = () => {

    const navigation = useNavigation();
    const location = useLocation(); // Access the current location/path

    const isLoading = navigation.state === 'loading';

    // Check if the current path is the home path
    const isNavHomePath = location.pathname === '/'

    useEffect(() => {

    }, [])

    return (
        <div className='layout-comp relative'>
            <div className="inside"></div>
            {isLoading ? (
                <NavbarLoading />
            ) : (
                <Navbar />
            )}

            <main>
                <Outlet />
                {isNavHomePath && <Home />}
            </main>

        </div>
    )
}

export default Layout