import './Project.css';

import DividerTop from "../../assets/ataleofsap/exclude/divider.png";
import DividerBottom from "../../assets/ataleofsap/exclude/divider2.png";

const images = import.meta.glob('../../assets/ataleofsap/*.{png,jpg,jpeg,svg}', { eager: true });
const imageArray = Object.values(images).map(img => img.default);

function buildImageList(expandImage) {
    return imageArray.map((src, index) => (
        <img
            key={index}
            src={src}
            className="galleryImg"
            onClick={() => expandImage(imageArray, index)}
            alt=""
        />
    ));
}

function PageLayout({expandImage}) {
    const imageList = buildImageList(expandImage);

    return (
        <div className="ProjectContainer">
            <div>
                {imageList[0]}
            </div>

            <div className="Project">
                <div className="projectWrapper halfL">
                    {imageList[1]}
                </div>

                <div className="projectWrapper halfR gridText">
                    <p>A Tale of Sap is a game I've created during a one week game jam for the theme "community".
                        You play as a little deer trying to save her father through a mystical substance known as
                        sap. However on your way you meet others in dire need of the substance. Who do you decide
                        to help?
                        <br/>
                        All the art, music, game design, story and programming was done by me.
                    </p>
                </div>
                <div className="projectWrapper banner">
                    <img src={DividerTop} alt="Screenshot1" className="projectImg"/>
                </div>

                <div className="projectWrapper gridCentered">
                    <p>"The sap used to be everywhere. A bright blue light spending life, healing wounds and giving
                        hope. I don't envy those who possess it, for they are the ones responsible to choose who is
                        worthy in their eyes. Choose between life and death. And they are the ones, who know it's true
                        dark secrets. When the day comes and you have to choose, promise me you'll do so with a pure
                        heart as to not repeat what happened in the past."</p>
                </div>
                <div className="projectWrapper banner">
                    <img src={DividerBottom} alt="Screenshot1" className="projectImg"/>
                </div>

                <div className="projectWrapper banner">
                    {imageList[2]}
                    {imageList[3]}
                    {imageList[4]}

                    {imageList[5]}
                    {imageList[6]}
                    {imageList[7]}
                    {imageList[8]}

                </div>
            </div>
        </div>
    )
}

export default function ATaleOfSap({expandImage}){

    return(
        <PageLayout expandImage={expandImage}/>
    )
}