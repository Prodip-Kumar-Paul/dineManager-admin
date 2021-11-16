import { useState } from "react";

import DropZone from "../../layout/DropZone";
import PageWrapper from "../../layout/PageWrapper";
import errorService from "../../services/error-service";
import qrReader from "../../lib/qrReader";

const NewRetsurant = () => {
  const [fileUrl, setFileUrl] = useState<string>();

  const handleDrop = (files: Array<File>) => {
    console.log(files);
    const file = files[0];
    if(!file) {
        return errorService("Please upload an image");
    }
    const url = URL.createObjectURL(file);
    qrReader(file,url);
    setFileUrl(url);
  };

  return (
    <PageWrapper>
      <div>
        <h1>Restaurant registration</h1>
        <DropZone onDrop={handleDrop} fileUrl={fileUrl} />
      </div>
    </PageWrapper>
  );
};

export default NewRetsurant;
