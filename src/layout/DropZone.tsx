import { DropzoneArea } from "material-ui-dropzone";

const DropZone = () => {
  return (
    <div>
      <DropzoneArea
        acceptedFiles={["image/*"]}
        dropzoneText={"Drag and drop an image here or click"}
        onChange={(files) => console.log("Files:", files)}
      />
    </div>
  );
};

export default DropZone;
