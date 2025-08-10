import React from 'react';

interface MiloLogoProps {
  className?: string;
}

const MiloLogo: React.FC<MiloLogoProps> = ({ className = 'h-10 w-auto' }) => {
  return (
    <img 
      src="/milo-logo.svg" 
      alt="Milo Logo" 
      className={className}
    />
  );
};

export default MiloLogo;