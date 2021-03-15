import React, { ReactElement } from "react";

interface UploadLoaderProps {
    UploadMessage: string
};

interface UploadDoneProps extends UploadLoaderProps {
    ErrorMessage: string
};

const UploadLoader: React.FC<UploadLoaderProps> = (props): ReactElement => {
    return (
        <div>
            <h2 style={{ fontSize: 21 }} className="sub-tools">{props.UploadMessage}</h2>
            <div style={{ marginTop: 60 }} className="loader">Loading...</div>
        </div>
    );
}

const UploadDone: React.FC<UploadDoneProps> = (props): ReactElement => {
    return (
        <div>
            <h2 style={{ fontSize: 21 }} className="sub-tools">{props.UploadMessage}</h2>
            <h2 style={{ fontSize: 21 }} className="sub-tools">{props.ErrorMessage}</h2>
        </div>
    );
}

export { UploadLoader, UploadDone }