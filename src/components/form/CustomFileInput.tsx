import React, { useState, ChangeEvent, useEffect } from "react";

const CustomFileInput: React.FC = (props: any) => {
  const { formik, name, label, required } = props;

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    formik.setFieldValue([name], file);
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  useEffect(() => {
    const file = formik.values[name];

    const hardcodedFile = new File([formik.values[name]], file.name, { type: file.type });

    const reader = new FileReader();
    reader.onloadend = () => {
      file && setPreview(reader.result as string);
    };
    reader.readAsDataURL(hardcodedFile);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
      <input type="file" onChange={handleFileChange} style={{ display: "none" }} id="file-input" />
      <div className="form-input-container">
        <p className="form-label">
          {label} {required && <span className="required">*</span>}
        </p>

        <label htmlFor="file-input" style={{ cursor: "pointer", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
          Choose a file
        </label>
      </div>
      <div style={{ marginTop: "auto" }}>
        {preview ? (
          <img src={preview} alt="Selected File" style={{ maxWidth: "50px", height: "50px" }} />
        ) : selectedFile ? (
          <p>{selectedFile.name}</p>
        ) : (
          <p>No file selected</p>
        )}
      </div>
    </div>
  );
};

export default CustomFileInput;
