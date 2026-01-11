import './NavigationBar.css'
import {Link} from "react-router-dom";
import {useState} from "react";

export default function NavigationBar() {

    const [portfolioHover, setPortfolioHover] = useState(false);
    const [projectHover, setProjectHover] = useState(false);

    return (
        <div className="NavigationBar">
            <div className="Name">
                <Link to="/">
                    <h3>Mykara-Art</h3>
                </Link>
            </div>

            <div className="Menu">
                <Link to="/">
                    <button>Home</button>
                </Link>

                <div
                    className="Dropdown"
                    onMouseEnter={() => setProjectHover(true)}
                    onMouseLeave={() => setProjectHover(false)}
                >
                    <button>Projects</button>

                    {projectHover && (
                        <div className="DropdownMenu">
                            <Link to="/beneaththelayers">Beneath the Layers</Link>
                            <Link to="/totameagod">To Tame a God</Link>
                            <Link to="/ataleofsap">A Tale of Sap</Link>
                        </div>
                    )}
                </div>

                <div
                    className="Dropdown"
                    onMouseEnter={() => setPortfolioHover(true)}
                    onMouseLeave={() => setPortfolioHover(false)}
                >
                    <button>Portfolio</button>

                    {portfolioHover && (
                        <div className="DropdownMenu">
                            <Link to="/illustrations">Illustrations</Link>
                            <Link to="/characterdesign">Character Design</Link>
                            <Link to="/sketchbook">Sketchbook</Link>
                        </div>
                    )}
                </div>

                <Link to="/about">
                    <button>About</button>
                </Link>

            </div>

            <div className="Language">
                <p></p>
            </div>


        </div>
    )
}