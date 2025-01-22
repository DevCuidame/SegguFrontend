const InputImg = ({ name, value, onChange }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && ["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;
        onChange(base64Image); // Actualiza el estado en el padre.
      };
      reader.readAsDataURL(file);
    } else {
      onChange(null); // Limpia la imagen en caso de error.
    }
  };

  return (
    <div className="imagen">
      <input
        type="file"
        accept="image/jpeg, image/png, image/jpg"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id={`foto-upload-${name}`} // Usar un id único basado en `name` para evitar conflictos.
      />
      <label htmlFor={`foto-upload-${name}`} style={{ position: "relative", display: "inline-block" }}>
        {value ? (
          <img
            src={value} // Mostrar la vista previa desde `value`.
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
