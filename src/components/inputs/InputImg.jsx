import React, { useState } from "react";

const InputImg = ({ name, value, onChange }) => {
  const [preview, setPreview] = useState(value || null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && ["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;
        setPreview(base64Image); // Actualiza la previsualización.
        onChange(base64Image); // Actualiza el estado en el componente padre con base64Image.
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
      onChange(null); // En caso de archivo inválido, limpiamos el estado.
    }
  };

  return (
    <div className="imagen">
      <input
        type="file"
        accept="image/jpeg, image/png, image/jpg"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="foto-upload"
      />
      <label htmlFor="foto-upload" style={{ position: "relative", display: "inline-block" }}>
        {preview ? (
          <img
            src={preview}
            alt="Vista previa"
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          />
        ) : (
          <div
            style={{
              width: "150px",
              boxShadow: "0px 0px 25px -5px rgba(255,255,255,1)",
              height: "150px",
              borderRadius: "50%",
              backgroundColor: "#e0e0e0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <span style={{ color: "black" }}>Subir Foto</span>
          </div>
        )}
      </label>
    </div>
  );
};

export default InputImg;
