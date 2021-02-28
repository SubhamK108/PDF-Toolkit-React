import React from 'react';
import '../assets/App.css';

const App: React.FC = () => {
    return (
        <div>

            <div className="header">
                <h1>PDF Toolkit</h1>
            </div>

            <div className="tools">
                <h1>Available Tools</h1>
            </div>

            <div className="tools-section">
                <a className="button" href="/">Button 1</a>
                <a className="button" href="/">Button 2</a>
                <a className="button" href="/">Button 3</a>
                <a className="button" href="/">Button 4</a>
            </div>

        </div>
    );
}

export default App;
