import React, { ReactElement, useState } from "react";
import { UploadedFile } from "../models/UploadedFile";
import FileListDisplay from "./FileListDisplay";
import { UploadLoader, UploadDone } from "../shared/UploadFeedback";
import { SubmitButton, SubmitProgress } from "../shared/SubmitFeedback";
import { MergerSession, MergerSessionState } from "./MergerData";

const Merger: React.FC = (): ReactElement => {
    const initialState: MergerSessionState = {
        Pdfs: [],
        IsUploadInitiated: false,
        IsUploadCompleted: false,
        IsSubmitCompleted: false,
        UploadMessage: "",
        ErrorMessage: "",
        SubmitMessage: "",
        Error: false
    };

    const session: MergerSession = {
        MaxFilesAllowed: 4
    };

    const [sessionState, setSessionState] = useState<MergerSessionState>(initialState);

    const RefreshApp = (): void => {
        setSessionState(initialState);
    }

    const onInputFileChange = (inputFileChange: FileList | null): void => {
        RefreshApp();

        setSessionState(prevState => ({
            ...prevState,
            IsUploadInitiated: true,
            UploadMessage: "Uploading your files... ⏳"
        }));

        if (inputFileChange!.length > session.MaxFilesAllowed) {
            setSessionState(prevState => ({
                ...prevState,
                UploadMessage: "Upload failed! ❌",
                ErrorMessage: `Max ${session.MaxFilesAllowed} PDF files allowed!`,
                Error: true
            }));

            return;
        } else if (inputFileChange!.length === 1) {
            setSessionState(prevState => ({
                ...prevState,
                UploadMessage: "",
                ErrorMessage: "Just 1 PDF file uploaded which is not enough! You have to upload at least 2 files. 😕",
                Error: true
            }));

            return;
        }

        for (let i: number = 0; i < inputFileChange!.length; i++) {
            let currentFile: UploadedFile = {
                Id: (Math.random() + Math.random()),
                Data: inputFileChange![i]
            };

            setSessionState(prevState => ({
                ...prevState,
                Pdfs: prevState.Pdfs!.concat(currentFile)
            }));
        }

        setSessionState(prevState => ({
            ...prevState,
            UploadMessage: `${inputFileChange!.length} PDF files uploaded. ✅`,
            IsUploadCompleted: true
        }));
    }

    const RemoveFile = (file: UploadedFile): void => {
        let tempFileArray: UploadedFile[] | null = sessionState.Pdfs!.filter(x => x.Id !== file.Id);

        setSessionState(prevState => ({
            ...prevState,
            Pdfs: tempFileArray
        }));

        if (sessionState.Pdfs!.length - 1 === 1) {
            setSessionState(prevState => ({
                ...prevState,
                UploadMessage: "",
                ErrorMessage: "Not enough PDF files left! At least 2 files are needed. 😕",
                Error: true
            }));
        } else {
            setSessionState(prevState => ({
                ...prevState,
                UploadMessage: `${sessionState.Pdfs!.length - 1} PDF files are left. ✅`
            }));
        }
    }

    const MoveFileUp = (file: UploadedFile): void => {
        let index: number = sessionState.Pdfs!.indexOf(file);
        let tempFileArray: UploadedFile[] | null = sessionState.Pdfs!.filter(x => x.Id !== file.Id);
        tempFileArray!.splice(index - 1, 0, file);

        setSessionState(prevState => ({
            ...prevState,
            Pdfs: tempFileArray
        }));
    }

    const MoveFileDown = (file: UploadedFile): void => {
        let index: number = sessionState.Pdfs!.indexOf(file);
        let tempFileArray: UploadedFile[] | null = sessionState.Pdfs!.filter(x => x.Id !== file.Id);
        tempFileArray!.splice(index + 1, 0, file);

        setSessionState(prevState => ({
            ...prevState,
            Pdfs: tempFileArray
        }));
    }

    const Submit = (): void => {
        setSessionState(prevState => ({
            ...prevState,
            SubmitMessage: `Merging ${sessionState.Pdfs!.length} PDF files, please have patience... ⏳`,
            IsSubmitCompleted: true
        }));
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

            {sessionState.IsUploadInitiated ? ((!sessionState.IsUploadCompleted && !sessionState.Error) ? <UploadLoader UploadMessage={sessionState.UploadMessage} /> : <UploadDone UploadMessage={sessionState.UploadMessage} ErrorMessage={sessionState.ErrorMessage} />) : ""}

            {(sessionState.IsUploadCompleted && !sessionState.Error) ? <FileListDisplay FileArray={sessionState.Pdfs} RemoveFile={RemoveFile} MoveFileUp={MoveFileUp} MoveFileDown={MoveFileDown} /> : ""}

            {(sessionState.IsUploadCompleted && !sessionState.Error && !sessionState.IsSubmitCompleted) ? <SubmitButton Submit={Submit} /> : ""}

            {sessionState.IsSubmitCompleted ? <SubmitProgress SubmitMessage={sessionState.SubmitMessage} /> : ""}
        </div>
    );
}

export default Merger;