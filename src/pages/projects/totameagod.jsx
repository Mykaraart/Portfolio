const images = import.meta.glob('../../assets/totameagod/*.{png,jpg,jpeg,svg}', { eager: true });
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
    const images = buildImageList(expandImage)

    return(
        <div className="ProjectContainer">
            <div className="Project">
                <div className="projectWrapper halfL">
                    {images[0]}
                </div>
                <div className="projectWrapper halfR">
                    <p>
                        "To Tame a God" was my bachelor thesis project at the HAW Hamburg, exploring how visual
                        worldbuilding works in Comics. It explorers a world of worshippers and gods, their customs and
                        dresses and the environment they live in.
                    </p>
                </div>

                <div className="projectWrapper halfL">
                    {images[1]}
                </div>
                <div className="projectWrapper halfR">
                    {images[2]}
                </div>
                <div className="projectWrapper halfL">
                    {images[3]}
                </div>
                <div className="projectWrapper halfR">
                    {images[4]}
                </div>
                <div className="projectWrapper halfL">
                    {images[5]}
                </div>
                <div className="projectWrapper halfR">
                    {images[6]}
                </div>
                <div className="projectWrapper banner">
                    {images[7]}
                </div>
                <div className="projectWrapper banner">
                    {images[8]}
                </div>
                <div className="projectWrapper banner">
                    {images[9]}
                </div>
                <div className="projectWrapper banner">
                    {images[10]}
                </div>
                <div className="projectWrapper banner">
                    {images[11]}
                </div>
            </div>
        </div>
    )
}

export default function Totameagod({expandImage}) {
    return (
        <PageLayout expandImage={expandImage}/>
    )
}