import React, { useState } from 'react';

const ImageLoader = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div>
      {!isLoaded && (
        <div className="image-loader">
          <span>Cargando...</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        {...props}
        onLoad={handleImageLoad}
        style={{ display: isLoaded ? 'block' : 'none' }}
      />
    </div>
  );
};

export default ImageLoader;
