import './ExpandedImage.css'
import test from '../assets/illustrations/2022.09.30_Alex kitchen2 smol.png'

export default function ExpandedImage({index, setIndex, images, isExpanded, expandImage}) {
    return (
        <>
            {isExpanded ? (
                <div className="ExpandedImage">
                    <button className="closeImage" onClick={() => expandImage(false)}>x</button>
                    <button className="changeImage left" onClick={() => setIndex(
                        (index!==0) ? (index-1) : (index=images.length-1)
                    )}>x</button>
                    <div className="ExpandedImage__image">
                        <img src={images[index]} alt=""/>
                    </div>
                    <button className="changeImage right" onClick={() => setIndex(
                        (index<images.length-1) ? (index+1) : (index=0)
                    )}>x</button>
                </div>) : ""
            }
        </>
    )
}