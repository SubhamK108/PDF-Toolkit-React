import React, { ReactElement } from "react";

interface SubmitProgressProps {
    SubmitMessage: string,
    Submit: Function
};

const SubmitProgress: React.FC<SubmitProgressProps> = (props): ReactElement => {
    return (
        <div>
            <div className="sub-tools">
                <h2 style={{ fontSize: 21 }}>{props.SubmitMessage}</h2>
            </div>
            <div className="sub-tools">
                <button onClick={e => props.Submit()} className="button-secondary"><i style={{ background: "inherit" }} className="icon solid fas fa-check-circle"></i> &nbsp;Submit</button>
            </div>
        </div>
    );
}

export { SubmitProgress }