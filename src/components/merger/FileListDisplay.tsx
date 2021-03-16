import React, { ReactElement } from "react";
import { UploadedFile } from "../models/UploadedFile";

interface FileListDisplayProps {
    FileArray: UploadedFile[] | null,
    RemoveFile: Function,
    MoveFileUp: Function,
    MoveFileDown: Function
};

const FileListDisplay: React.FC<FileListDisplayProps> = (props): ReactElement => {
    return (
        <div style={{ marginBottom: 35 }}>
            {(props.FileArray || []).map((file: UploadedFile) => (
                <div key={file.Id} className="file-display">
                    <p>{file.Data.name}</p>
                    <span onClick={e => props.RemoveFile(file)} className="icon solid fas fa-times-circle" title="Remove File" style={{ paddingLeft: 20, cursor: "pointer" }}></span>
                    {props.FileArray!.indexOf(file) > 0 ? <span onClick={e => props.MoveFileUp(file)} className="icon solid fas fa-arrow-circle-up" title="Move File Up" style={{ paddingLeft: 10, cursor: "pointer" }}></span> : ""}
                    {props.FileArray!.indexOf(file) < (props.FileArray!.length - 1) ? <span onClick={e => props.MoveFileDown(file)} className="icon solid fas fa-arrow-circle-down" title="Move File Down" style={{ paddingLeft: 10, cursor: "pointer" }}></span> : ""}
                </div>
            ))}
        </div>
    );
}

export default FileListDisplay;