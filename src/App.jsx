import { useRef, useState } from "react";
import logoProfile from "./assets/profile.jpg";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <>
      <h1>Upload Image</h1>
      <div onClick={handleImageClick} style={{ width: "330px " }}>
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt="viteLogo"
            height={300}
            width={300}
            style={{ cursor: "pointer", borderRadius: "50%" }}
          />
        ) : (
          <img
            src={logoProfile}
            alt="viteLogo"
            height={300}
            style={{ cursor: "pointer" }}
          />
        )}
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          ref={inputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </div>
    </>
  );
}

export default App;
