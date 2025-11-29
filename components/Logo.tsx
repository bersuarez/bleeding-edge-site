import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  color?: 'white' | 'red' | 'black';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  variant = 'full',
  color = 'white'
}) => {
  // Using the official asset provided by the user.
  // Note: This image is "Red/Gray". It works best on dark backgrounds.
  const logoUrl = "https://cdn.prod.website-files.com/68ee81b98b61c2da36d41238/68ee8b107f604fdab603c836_Logo%20BE_rojo%20gris_sin%20tagline%20(1).png";

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoUrl} 
        alt="Bleeding Edge" 
        className="h-10 w-auto object-contain"
      />
    </div>
  );
};