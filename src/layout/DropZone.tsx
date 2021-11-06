import React, { useState } from "react";
import UploadIcon from '@mui/icons-material/Upload';
import UploadLogo from "../assets/upload.png";

import Dropzone from "react-dropzone";
import { fontSize } from "@mui/system";

const dropZoneStyle = {
  backgroundColor: "#FFF",
  width: "40vh",
  height: "40vh",
  margin: "auto",
  borderRadius: "10px",
  border: "3px dashed #752901",
};

const draggingStyle = {
  backgroundColor: "#FFF",
  width: "40vh",
  height: "40vh",
  margin: "auto",
  borderRadius: "10px",
  border: "3px dashed green",
}

export default function DropZone() {
  const [fileNames, setFileNames] = useState([]);
  const [isDraging, setIsDragging] = useState(false);

  const handleDrop = (file: Array<File>) => {
    console.log(file);
  };

  return (
    <div className="App">
      <Dropzone
        onDrop={handleDrop}
        accept="image/*"
        minSize={1024}
        maxSize={3072000}
        onDragOver={() => {setIsDragging(true)}}
        onDragLeave={() => {setIsDragging(false)}}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps({ backgroundColor: "red" })}
            style={isDraging ? draggingStyle : dropZoneStyle }
          >
            <input {...getInputProps()} />
            <p><UploadIcon style={{width: "100%", fontSize: "10rem", paddingTop: "20%"}}/></p>
            <p><strong>Upload a QR code</strong></p>
          </div>
        )}
      </Dropzone>
    </div>
  );
}
