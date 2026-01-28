import React from 'react';
import logoImg from '../../../assets/comtranz/logo.png';

const Logo = () => {
    return (
        <div className="flex items-center gap-2 group">
            <div className="w-24 h-18 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                <img src={logoImg} alt="Comtranz Global Logo" className="w-full h-full object-contain" />
            </div>
          
        </div>
    );
};

export default Logo;
