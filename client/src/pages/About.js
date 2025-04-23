// About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-intro">
  <p>
    You may be wondering... 
    <strong>“<i>Who the hell are you?</i>”</strong>
    <br />
    <img 
      src="/assets/memes/what-the-hell-are-you.gif "
      alt="Hashirama Who the hell are you meme" 
      className="intro-meme" 
    />
  </p>

  <p>
    I'm <strong>Nithyananthan</strong> – a professional imposter syndrome collector 🫠 and a full-time technophile. 
    I'm that one friend who gets excited over every new JavaScript framework like it's a Marvel trailer drop. 😅
  </p>

  <p>
    My current obsession? Cybersecurity 🔐 — especially Web Pentesting. Yes, I poke websites 
  </p>

  <p>
    But before you imagine me in a hoodie with green terminal text...
    <br />
    The hacker I thinking of myself 	:
    <br />
    <img 
      src="assets/memes/hacker.gif" 
      alt="Hollywood Hacker Meme" 
      className="intro-meme" 
	  width="495px"
    />
    <br />
    My expertise in cyber security like:
    <br />
    <img 
      src="/assets/memes/m1.jpg"
      alt="Reality meme" 
      className="intro-meme" 
	  width="350px"
	  height="500px"
    />
  </p>
</div>

  );
};

export default About;