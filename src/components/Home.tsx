import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = (): ReactElement => {
    return (
        <div>

            <div className="header">
                <h1>PDF Toolkit</h1>
            </div>

            <div className="tools">
                <h1>Available Tools</h1>
            </div>

            <div className="tools-section">
                <Link to="/pdfmerger">
                    <button className="button">Merger</button>
                </Link>

                <Link to="/pdfencryptor">
                    <button className="button">Encryptor</button>
                </Link>

                <Link to="/pdfpagedeleter">
                    <button className="button">Page Deleter</button>
                </Link>
                
                <Link to="imagetopdf">
                    <button className="button">Image to PDF</button>
                </Link>
            </div>

        </div>
    );
}

export default Home;