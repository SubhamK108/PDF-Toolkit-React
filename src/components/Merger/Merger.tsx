import React, { ReactElement, useState } from "react";
import "../../assets/Loader.css";
import "@fortawesome/fontawesome-free/css/all.css"
import UploadedFile from "../Models/UploadedFile";
import FileListDisplay from "./FileListDisplay";
import { UploadLoader, UploadDone } from "../Shared/UploadFeedback";

const Merger: React.FC = (): ReactElement => {

    const [fileArray, setFileArray] = useState<UploadedFile[] | null>([]);
    const [uploadMessage, setUploadMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const [uploadInitiated, setUploadInitiated] = useState<boolean>(false);
    const [uploadCompleted, setUploadCompleted] = useState<boolean>(false);

    const RefreshApp = (): void => {
        setFileArray([]);
        setUploadMessage("");
        setErrorMessage("");
        setError(false);
        setUploadInitiated(false);
        setUploadCompleted(false);
    }

    const onInputFileChange = (inputFileChange: FileList | null): void => {
        RefreshApp();
        setUploadInitiated(true);
        setUploadMessage("Uploading...");

        if (inputFileChange!.length > 4) {
            setErrorMessage("Cannot Upload more than 4 PDF Files");
            setUploadMessage("Upload Again");
            setError(true);
            return;
        } else if (inputFileChange!.length === 1) {
            setErrorMessage("Just 1 PDF File uploaded which is not enough");
            setUploadMessage("Upload Again.")
            setError(true);
            return;
        }

        for (let i: number = 0; i < inputFileChange!.length; i++) {
            
            let currentFile: UploadedFile = {
                Id: (Math.random() + Math.random()),
                Data: inputFileChange![i]
            };

            setFileArray(fileArray => fileArray!.concat(currentFile));
        }

        setUploadMessage(`Uploaded ${inputFileChange!.length} PDF Files`);
        setUploadCompleted(true);
    }

    const RemoveFile = (file: UploadedFile): void => {
        let tempFileArray: UploadedFile[] | null = fileArray!.filter(x => x.Id !== file.Id);
        setFileArray(tempFileArray);

        if (fileArray!.length - 1 === 1) {
            setErrorMessage("Just 1 PDF File remaining which is not enough");
            setUploadMessage("Upload Again.")
            setError(true);
        } else {
            setUploadMessage(`${fileArray!.length - 1} PDF Files are remaining`);
        }

        tempFileArray = null;
    }

    const MoveFileUp = (file: UploadedFile): void => {
        let index: number = fileArray!.indexOf(file);
        let tempFileArray: UploadedFile[] | null = fileArray!.filter(x => x.Id !== file.Id);
        tempFileArray!.splice(index - 1, 0, file);
        setFileArray(tempFileArray);
        tempFileArray = null;
    }

    const MoveFileDown = (file: UploadedFile): void => {
        let index: number = fileArray!.indexOf(file);
        let tempFileArray: UploadedFile[] | null = fileArray!.filter(x => x.Id !== file.Id);
        tempFileArray!.splice(index + 1, 0, file);
        setFileArray(tempFileArray);
        tempFileArray = null;
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

            {uploadInitiated ? ((!uploadCompleted && !error) ? <UploadLoader UploadMessage={uploadMessage} /> : <UploadDone UploadMessage={uploadMessage} ErrorMessage={errorMessage} />) : ""}

            {(uploadCompleted && !error) ? <FileListDisplay FileArray={fileArray} RemoveFile={RemoveFile} MoveFileUp={MoveFileUp} MoveFileDown={MoveFileDown} /> : ""}

        </div>
    );
}

export default Merger;