import './Portfolio.css';

const images = import.meta.glob('../../assets/CharacterDesign/*.{png,jpg,jpeg,svg}', { eager: true });
const imageArray = Object.values(images).map(img => img.default);

function GalleryPage({expandImage, setIndex, setImages}) {
    const imageList = Object.values(images).map((image, index) => (
        <img key={index} src={image.default} alt={`Image ${index + 1}`} onClick={() => expandImage(imageArray, index)} className="galleryImg" />
    ));

    return (
        <div className="Portfolio">
            <div className="galleryWrapper">
                {imageList}
            </div>
        </div>
    );
}


export default function Characterdesign({expandImage}){
    return (
        <GalleryPage expandImage={expandImage}/>
    )
}