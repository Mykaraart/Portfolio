import React from "react";
import { useState } from 'react';
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import './App.css'

import NavigationBar from './components/NavigationBar'
import Footer from './Components/Footer.jsx'
import ExpandedImage from './Components/ExpandedImage'

import Homepage from './pages/homepage.jsx'

import Illustrations from './pages/portfolio/illustrations.jsx'
import CharacterDesign from './pages/portfolio/characterdesign.jsx'
import Sketchbook from './pages/portfolio/sketchbook.jsx'

import BeneathTheLayers from './pages/projects/beneaththelayers.jsx'
import ATaleOfSap from './pages/projects/ataleofsap.jsx'
import ToTameAGod from './pages/projects/totameagod.jsx'

import About from './pages/about.jsx'



function App() {

    const [expandedView, setExpandedView] = useState(false);
    const [expandedImages, setExpandedImages] = useState(null);
    const [expandedImageIndex, setExpandedImageIndex] = useState(null);

    function expandImage(images, index){
        setExpandedImageIndex(index);
        setExpandedImages(images);
        setExpandedView(true);
    }

    return(
        <>
            <HashRouter>
                <NavigationBar/>
                <Routes>

                    <Route exact path="/" element={<Homepage/>}/>
                    <Route path="/about" element={<About/>}/>

                    <Route path="/illustrations" element={<Illustrations
                        expandImage={expandImage}
                        setIndex={setExpandedImageIndex}
                        setImages={setExpandedImages}
                    />}/>
                    <Route path="/characterdesign" element={<CharacterDesign
                        expandImage={expandImage}
                        setIndex={setExpandedImageIndex}
                        setImages={setExpandedImages}
                    />}/>
                    <Route path="/sketchbook" element={<Sketchbook
                        expandImage={expandImage}
                        setIndex={setExpandedImageIndex}
                        setImages={setExpandedImages}
                    />}/>

                    <Route path="/totameagod" element={<ToTameAGod
                        expandImage ={expandImage}
                        setIndex={setExpandedImageIndex}
                        setImages={setExpandedImages}
                    />}/>
                    <Route path="/beneaththelayers" element={<BeneathTheLayers
                        expandImage ={expandImage}
                        setIndex={setExpandedImageIndex}
                        setImages={setExpandedImages}
                    />}/>
                    <Route path="/ataleofsap" element={<ATaleOfSap
                        expandImage ={expandImage}
                        setIndex={setExpandedImageIndex}
                        setImages={setExpandedImages}
                    />}/>

                </Routes>
                <Footer/>
            </HashRouter>

            <ExpandedImage
                expandImage={setExpandedView}
                isExpanded={expandedView}
                images={expandedImages}
                index={expandedImageIndex}
                setIndex={setExpandedImageIndex}
            />
        </>
    )

}

export default App
