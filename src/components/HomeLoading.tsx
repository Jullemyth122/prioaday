import React from 'react'
import '../scss/home.scss';

const HomeLoading: React.FC = () => {

    return (
        <div className='home-comp'>
            <div className="home-subcomp loading">
                <div className="loader flex items-center justify-center">
                    {/* <h1> .... </h1> */}
                    <div className="boxR"></div>
                    <div className="boxR"></div>
                    <div className="boxR"></div>
                </div>
            </div>
        </div>
    )
}

export default HomeLoading