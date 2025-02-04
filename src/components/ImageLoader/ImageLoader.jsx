import React, { useState, useEffect } from 'react';

const ImageLoader = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    // Si la imagen ya está en la caché, marcarla como cargada
    if (img.complete) {
      setIsLoaded(true);
    } else {
      // Si no está en la caché, esperar a que se cargue
      img.onload = () => {
        setIsLoaded(true);
      };
    }
  }, [src]);

  return (
    <div>
      {!isLoaded && (
        <div className="loader">
          <span>Cargando imagen...</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ display: isLoaded ? 'block' : 'none' }}
      />
    </div>
  );
};

export default ImageLoader;