import React from 'react'

const NavbarLoading = () => {
    return (
        <div className='navbar-comp'>
            <ul className='flex items-center justify-center gap-5'>
                <li className='loading'>
                    <div className="boxR"></div>
                </li>
                <li className='loading'>
                    <div className="boxR"></div>
                </li>
                <li className='loading'>
                    <div className="boxR"></div>
                </li>
            </ul>
        </div>
    )
}

export default NavbarLoading