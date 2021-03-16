import { UploadedFile } from "../models/UploadedFile"

interface MergerSessionState {
    Pdfs: UploadedFile[] | null,
    IsUploadInitiated: boolean,
    IsUploadCompleted: boolean,
    IsSubmitCompleted: boolean,
    UploadMessage: string,
    ErrorMessage: string,
    SubmitMessage: string,
    Error: boolean
};

interface MergerSession {
    MaxFilesAllowed: number
};

export type { MergerSession, MergerSessionState }