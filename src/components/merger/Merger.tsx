import React, { ReactElement, useState } from "react";
import UploadedFile from "../models/UploadedFile";
import FileListDisplay from "./FileListDisplay";
import { UploadLoader, UploadDone } from "../shared/UploadFeedback";
import { SubmitButton, SubmitProgress } from "../shared/SubmitFeedback";

const Merger: React.FC = (): ReactElement => {

    const [fileArray, setFileArray] = useState<UploadedFile[] | null>([]);
    const [uploadMessage, setUploadMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const [isUploadInitiated, setIsUploadInitiated] = useState<boolean>(false);
    const [isUploadCompleted, setIsUploadCompleted] = useState<boolean>(false);
    const [isSubmitCompleted, setIsSubmitCompleted] = useState<boolean>(false);
    const [submitMessage, setSubmitMessage] = useState<string>("");
    const maxFilesAllowed: number = 4;

    const RefreshApp = (): void => {
        setFileArray([]);
        setUploadMessage("");
        setErrorMessage("");
        setError(false);
        setIsUploadInitiated(false);
        setIsUploadCompleted(false);
        setIsSubmitCompleted(false);
        setSubmitMessage("");
    }

    const onInputFileChange = (inputFileChange: FileList | null): void => {
        RefreshApp();
        setIsUploadInitiated(true);
        setUploadMessage("Uploading your files... ⏳");

        if (inputFileChange!.length > maxFilesAllowed) {
            setUploadMessage("Upload failed! ❌");
            setErrorMessage(`Max ${maxFilesAllowed} PDF files allowed!`);
            setError(true);
            return;
        } else if (inputFileChange!.length === 1) {
            setUploadMessage("");
            setErrorMessage("Just 1 PDF file uploaded which is not enough! You have to upload at least 2 files. 😕");
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

        setUploadMessage(`${inputFileChange!.length} PDF files uploaded. ✅`);
        setIsUploadCompleted(true);
    }

    const RemoveFile = (file: UploadedFile): void => {
        let tempFileArray: UploadedFile[] | null = fileArray!.filter(x => x.Id !== file.Id);
        setFileArray(tempFileArray);

        if (fileArray!.length - 1 === 1) {
            setUploadMessage("");
            setErrorMessage("Not enough PDF files left! At least 2 files are needed. 😕");
            setError(true);
        } else {
            setUploadMessage(`${fileArray!.length - 1} PDF files are left. ✅`);
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

    const Submit = (): void => {
        setSubmitMessage(`Merging ${fileArray!.length} PDF files, please have patience... ⏳`);
        setIsSubmitCompleted(true);
    }

    return (
        <div>

            <div className="sub-header">
                <h1>PDF Merger</h1>
            </div>

            <div>
                <h2 style={{ fontSize: 21 }} className="sub-tools">Upload your PDF files.</h2>
                <h4 className="sub-tools">Limit - 20 Files / 20 MB Each</h4>
            </div>

            <div className="dropzone">
                <input onChange={e => onInputFileChange(e.target.files)} type="file" multiple accept="application/pdf" title="" />
                Drag And Drop Files Or Click To Upload.
            </div>

            {isUploadInitiated ? ((!isUploadCompleted && !error) ? <UploadLoader UploadMessage={uploadMessage} /> : <UploadDone UploadMessage={uploadMessage} ErrorMessage={errorMessage} />) : ""}

            {(isUploadCompleted && !error) ? <FileListDisplay FileArray={fileArray} RemoveFile={RemoveFile} MoveFileUp={MoveFileUp} MoveFileDown={MoveFileDown} /> : ""}

            {(isUploadCompleted && !error && !isSubmitCompleted) ? <SubmitButton Submit={Submit} /> : ""}

            {isSubmitCompleted ? <SubmitProgress SubmitMessage={submitMessage} /> : ""}

        </div>
    );
}

export default Merger;