import React from 'react';

const Navbar = () => {
    const logo = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
    return (
        <div>
            <nav>
                <img
                    alt='PokeAPI-LOGO'
                    src={logo}
                    className='navbar-img'
                />
            </nav>
        </div>
    )
}

export default Navbar;
