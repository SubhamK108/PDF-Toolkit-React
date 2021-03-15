import React, { ReactElement } from "react";

interface SubmitProgressProps {
    SubmitMessage: string
};

interface SubmitButtonProps {
    Submit: Function
};

const SubmitProgress: React.FC<SubmitProgressProps> = (props): ReactElement => {
    return (
        <div>
            <div className="sub-tools">
                <h2 style={{ fontSize: 21 }}>{props.SubmitMessage}</h2>
            </div>
            <div style={{ marginTop: 50 }} className="loader">Loading...</div>
        </div>
    );
}

const SubmitButton: React.FC<SubmitButtonProps> = (props): ReactElement => {
    return (
        <div className="sub-tools">
            <button onClick={e => props.Submit()} className="button-secondary"><i style={{ background: "inherit" }} className="icon solid fas fa-check-circle"></i> &nbsp;Submit</button>
        </div>
    );
}

export { SubmitProgress, SubmitButton }