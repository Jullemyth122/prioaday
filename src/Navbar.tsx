import React, { useEffect, useState } from 'react'
import './scss/navigation.scss';
import { Link } from 'react-router-dom';
import NavbarLoading from './NavbarLoading';
const Navbar = () => {


    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any>(null);

    useEffect(() => {
            // Simulate fetching data with a 2-second delay
        const timer = setTimeout(() => {
            // You could also use the static data from your loader here
            setData({ message: 'Data loaded' });
            setLoading(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <NavbarLoading />;
    }

    return (
        <div className='navbar-comp'>
            <ul className='flex items-center justify-center gap-5'>
                <li>
                    <Link to={'/'}>
                        <h4> Home </h4>
                    </Link>
                </li>
                <li>
                    <Link to={'/signup'}>
                        <h4> Signup </h4>
                    </Link>
                </li>
                <li>
                    <Link to={'/settings'}>
                        <h4> Settings </h4>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar