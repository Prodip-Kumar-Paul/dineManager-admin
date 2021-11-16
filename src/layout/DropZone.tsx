import React, { useState } from "react";
import UploadIcon from "@mui/icons-material/Upload";
import Dropzone from "react-dropzone";

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
};

const qrStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  width: "90%",
  height: "90%"
}

const iconStyle = {
  width: "100%",
  fontSize: "10rem",
  paddingTop: "20%",
}

interface Props {
  onDrop: (files: Array<File>) => void,
  fileUrl: undefined | string
}

export default function DropZone(props: Props) {
  const [isDraging, setIsDragging] = useState(false);

  const handleDrop = (files: Array<File>) => {
    setIsDragging(false);
    props.onDrop(files);
  };

  return (
    <div className="App">
      <Dropzone
        onDrop={handleDrop}
        accept="image/*"
        minSize={1024}
        maxSize={3072000}
        onDragOver={() => {
          setIsDragging(true);
        }}
        onDragLeave={() => {
          setIsDragging(false);
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps({ backgroundColor: "red" })}
            style={isDraging ? draggingStyle : dropZoneStyle}
          >
            <input {...getInputProps()} />
            {!props.fileUrl && (
              <div>
                <p>
                  <UploadIcon
                    style={iconStyle}
                  />
                </p>
                <p>
                  <strong>Drop a QR code</strong>
                </p>
              </div>
            )}
            {props.fileUrl && <img style={qrStyle} src={props.fileUrl} />}
          </div>
        )}
      </Dropzone>
    </div>
  );
}
