import jsQR from "jsqr"
import Jimp from "jimp"

const qrReader = async (file: File, url: string) => {
    // To be implemented
    return;


    const img = new Image();
    img.onload = async (e: any) => {
        const width = img.width;
        const height = img.height;
        console.log(width, height);
        const buffer = await file.arrayBuffer();
        alert(buffer.byteLength);
        const imgArr = new Uint8ClampedArray(buffer);
        alert(imgArr.length);
        // const newArray = await Jimp.intToRGBA(buffer);

        const imageData = new ImageData(4 * width * height, width);
        console.log("imgdata", imageData);
        
        console.log(imgArr);
        
        const data = jsQR(imageData.data, height, width);
        console.log("data", data);
    }
    img.src = url;
    // console.log(file);
}

export default qrReader;