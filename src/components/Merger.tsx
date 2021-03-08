import React, { ReactElement } from "react";

const Merger: React.FC = (): ReactElement => {
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
                <input type="file" />
                Drag and Drop or Click to Upload.
            </div>

        </div>
    );
}

export default Merger;