import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='text-center header rounded'>
            <nav className="navbar navbar-expand-lg navbar-dark header ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">BDbar Council</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav manu-bar">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            <a className="nav-link active" href="/member">Member of Cuncil</a>
                            <a className="nav-link active" href="/about">About</a>
                        </div>
                    </div>
                </div>
            </nav>
            <h1>Bangladesh Bar Council Association</h1>
            <h2>Total Budget : 5 Milion</h2>
        </div>
    );
};

export default Header;