import React, { ReactElement, useState } from "react";
import "../assets/Loader.css";


const Merger: React.FC = (): ReactElement => {

    const [fileArray, setFileArray] = useState<File[]>([]);

    const onInputFileChange = (inputFileChange: FileList | null) => {
        let loader: HTMLElement | null = document.getElementById("upload-loader");
        let fileList: HTMLElement | null = document.getElementById("file-list");
        loader!.hidden = false;

        let files: FileList | null = inputFileChange;

        for (let i: number = 0; i < files!.length; i++) {
            setFileArray(fileArray => fileArray.concat(files![i]));
        }

        loader!.hidden = true;
        fileList!.hidden = false;
    }

    return (
        <div>

            <div className="sub-header">
                <h1>PDF Merger</h1>
            </div>

            <div>
                <h2 style={{fontSize: 21}} className="sub-tools">Upload your PDF files.</h2>
                <h4 className="sub-tools">Limit - 20 Files / 20 MB Each</h4>
            </div>

            <div className="dropzone">
                <input onChange={e => onInputFileChange(e.target.files)} type="file" multiple accept="application/pdf" title="" />
                Drag and Drop or Click to Upload.
            </div>

            <div id="upload-loader" hidden>
                <h2 style={{fontSize: 21}} className="sub-tools">Uploading...</h2>
                <div className="loader">Loading...</div>
            </div>

            <div id="file-list" hidden>
                {fileArray.map((file: File) => (
                    <p className="file-display" key={file.lastModified}>{file.name}</p>
                ))}
            </div>

        </div>
    );
}

export default Merger;