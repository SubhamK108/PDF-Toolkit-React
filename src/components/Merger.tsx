import React, { ReactElement, useState } from "react";
import "../assets/Loader.css";


interface FilesDisplayProps {
    files: File[]
};


const Merger: React.FC = (): ReactElement => {

    const [fileArray, setFileArray] = useState<File[]>([]);
    const [totalFiles, setTotalFiles] = useState<number>(0);
    const [uploadDone, setUploadDone] = useState<boolean>(false);

    const onInputFileChange = (inputFileChange: FileList | null) => {
        console.clear();
        let files: FileList | null = inputFileChange;
        let totalFiles2: number = files!.length;

        for (let i: number = 0; i < totalFiles2; i++) {
            let fileName: string = files![i].name;
            let fileSize: number = Math.round(files![i].size / 1024);

            console.log(`File - ${i + 1} Details:`);
            console.log(`File Name: ${fileName}`);
            console.log(`File Size: ${fileSize} KB`);
            console.log("");

            setFileArray(fileArray => fileArray.concat(files![i]));
        }

        setTotalFiles(files!.length);
        setUploadDone(true);
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

            {uploadDone === false ? "" : (totalFiles === 0 ? <UploadLoader /> : <FilesDisplay files={fileArray} />)}

        </div>
    );
}

export default Merger;


const UploadLoader: React.FC = (): ReactElement => {
    return (
        <div>

            <h2 style={{fontSize: 21}} className="sub-tools">Uploading...</h2>
            <div className="loader">Loading...</div>

        </div>
    );
}


const FilesDisplay: React.FC<FilesDisplayProps> = (props): ReactElement => {
    return (
        <div>

            {props.files.map((file: File) => (
                <h4 key={file.lastModified} className="sub-tools">{file.name}</h4>
            ))}

        </div>
    );
}