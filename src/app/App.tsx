import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.css"
import '../assets/App.css';
import '../assets/Loader.css';
import Encryptor from '../components/Encryptor';
import Home from '../components/Home';
import ImageToPdf from '../components/ImageToPdf';
import Merger from '../components/merger/Merger';
import PageDeleter from '../components/PageDeleter';

const App: React.FC = (): ReactElement => {
    return (
        <div>
            
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/pdfmerger" exact component={Merger} />
                    <Route path="/pdfencryptor" exact component={Encryptor} />
                    <Route path="/pdfpagedeleter" exact component={PageDeleter} />
                    <Route path="/imagetopdf" exact component={ImageToPdf} />
                </Switch>
            </Router>

        </div>
    );
}

export default App;
