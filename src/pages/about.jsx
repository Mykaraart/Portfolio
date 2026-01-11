import selfPortrait from "../assets/2024.04.07_Selfportrait transparent.png";

export default function About(){
    return(
        <>
            <div className="About">
                <div className="AboutImg">
                    <img className="AboutImg" src={selfPortrait}/>
                </div>
                <div className="AboutText">
                    <h1>About Me</h1>
                    <p>
                        Heya! I'm Mika and I create out of passion. As a self proclaimed bard seeing how games and comics
                        are made made me want to learn it all. I was
                        enthralled by the stories people could tell and the worlds they build. I believe everyone has stories
                        worth being told. To make these stories come to live visually is my greatest joy. <br/><br/>
                        I have a special
                        focus on character design and environmental art and love to use colors to evoke just the right
                        emotion for each piece. Every artwork is unique and deserves a special approach to become alive, you
                        just have to listen close enough to it to know what it
                        wants.<br/><br/>
                        I graduated the HAW in Hamburg with a focus of world building in comics but have also
                        worked as an artist and team lead in multiple projects ever since. Currently I'm pursuing a second
                        bachelor as a software developer to sharpen my skills for the game industry and follow a second
                        passion of mine.<br/><br/>
                        When you don't find me drawing I'm probably busy writing a new song or dreaming of the two cats I
                        will hopefully one day have.
                    </p>
                </div>
            </div>

            <hr/>

            <div className="Skills">
                <h2>Skills</h2>
                <p>
                    2D-Art: Clip Studio Paint, Photoshop<br/>
                    2D-Animation: Cip Studio Paint, Blender, Adobe After Effects<br/>
                    3D-Modelling and texturing: Blender<br/>
                    Compositing and Editing: After Effects, DaVinci, Blender<br/>
                </p>

                <h2>Education</h2>
                <table>
                    <tr>
                        <td>2025</td>
                        <td>University of Applied Sciences, Hamburg<br/>
                        Graduated with a bachelor in illustration with a special focus on worldbuilding, game art and comics</td>
                    </tr>
                </table>

                <h2>Exxhibitions</h2>
                <table>
                    <tr>
                        <td>2024</td>
                        <td>Comicfestival Hamburg<br/>
                            Part of the exhibition "Comics and Stereotypes" with my comic "Beneath the Layers"</td>
                    </tr>
                </table>
            </div>
        </>
    )
}