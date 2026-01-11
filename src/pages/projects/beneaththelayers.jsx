const images = import.meta.glob('../../assets/beneaththelayers/*.{png,jpg,jpeg,svg}', { eager: true });
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

    return(
        <div className="ProjectContainer">
            <div className="Project">
                <div className="projectWrapper halfL">
                    {imageList[0]}
                </div>
                <div className="projectWrapper halfR">
                    <p>
                        "Beneath the Layers" is a Comic created for the exhibition "Comics and Stereotypes" at the
                        Comicfestival 2024 in Hamburg. It explorers how the way we dress and express our gender impacts
                        the way we are perceived by looking at the lives of Mary Read and Anne Bonny, two real life
                        pirates dressing as men.<br/><br/>
                        The full Comic is available on my <a href="https://ko-fi.com/s/8c81f3577a" target="_blank"
                                                             rel="noopener noreferrer">Kofi</a>.
                    </p>
                </div>

                <div className="projectWrapper halfL">
                    {imageList[1]}
                </div>
                <div className="projectWrapper halfR">
                    {imageList[2]}
                </div>
                <div className="projectWrapper halfL">
                    {imageList[3]}
                </div>
                <div className="projectWrapper halfR">
                    {imageList[4]}
                </div>
                <div className="projectWrapper banner">
                    {imageList[5]}
                </div>
                <div className="projectWrapper banner">
                    {imageList[6]}
                </div>
            </div>
        </div>
    )
}

export default function BeneathTheLayer({expandImage}) {
    return (
        <PageLayout expandImage={expandImage}/>
    )
}