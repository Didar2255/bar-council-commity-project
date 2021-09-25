import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='text-center header rounded'>
            <nav class="navbar navbar-expand-lg navbar-dark header ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/#">BDbar Council</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/#">Home</a>
                            <a class="nav-link active" href="/#">Member of Cuncil</a>
                            <a class="nav-link active" href="/#">About</a>
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