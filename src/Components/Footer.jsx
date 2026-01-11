import './NavigationBar.css'

import bsky from "../assets/icons/Bluesky--Streamline-Font-Awesome.png";
import insta from "../assets/icons/Instagram--Streamline-Font-Awesome.png";
import email from "../assets/icons/Envelope--Streamline-Font-Awesome.png";
import twitch from "../assets/icons/Twitch--Streamline-Font-Awesome.png";

export default function Footer() {
     return (
         <div className="Footer">
             <a target="_blank" rel="noopener noreferrer" href="https://bsky.app/profile/mykara-art.bsky.social">
                 <img className="SocialMediaIcon" src={bsky} alt={"bluesky"}/>
             </a>
             <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mykaraart/">
                 <img className="SocialMediaIcon" src={insta} alt={"instagram"}/>
             </a>
             <a target="_blank" rel="noopener noreferrer" href="https://www.twitch.tv/myka_illu">
                 <img className="SocialMediaIcon" src={twitch} alt={"twitch"}/>
             </a>
             <a target="_blank" rel="noopener noreferrer" href="mailto:mykara.art@gmx.net">
                 <img className="SocialMediaIcon" src={email} alt={"e-mail"}/>
             </a>
         </div>
     )
}