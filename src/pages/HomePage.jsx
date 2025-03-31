import React from 'react';
import chewsLogo from '../assets/chewsLogo.png';
import warpcastIcon from '../assets/farcastericon.svg';
import { FaTwitter, FaTelegram, FaGithub, FaDiscord } from 'react-icons/fa';
import { Typography, Grid, Container } from '@mui/material';
import alloLogo from '../assets/allowht.png';
import envioLogo from '../assets/enviowht.png';
import hatsLogo from '../assets/hatswht.png';
import ipfsLogo from '../assets/ipfswht.png';
import pinataLogo from '../assets/pinatawht.png';
import graphLogo from '../assets/thegraphwht.png';
import { TbRocketOff } from 'react-icons/tb';
import '../style/App.css';

const announcements = ['Chews Protocol is on GG23 OSS Dev Tooling!'];

const Ticker = ({ messages }) => {
  return (
    <div className="ticker-container">
      <div className="ticker-wrap">
        <div className="ticker">
          {messages.map((message, index) => (
            <div className="ticker-item" key={index}>
              {message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function HomePage() {
  return (
    <>
      <Ticker messages={announcements} />
      <img className="logo-container" src={chewsLogo} alt="Chews Logo" />
      <p className="home-title">Chews Protocol</p>
      <p className="byline">
        The Modular Token Curated Registry (TCR) Voting Protocol
      </p>
      {/* About Chews Section */}
      <p className="about-section">
        <strong>Choose Chews Protocol to create custom voting systems.</strong>
      </p>
      <p className="about-section">
        <strong>
          {' '}
          Create flexible and use-case-driven governance with the Chews modular
          architecture.
        </strong>
      </p>
      {/* Social Media Icons */}
      <div className="social-media-icons">
        <a
          href="https://twitter.com/chewsprotocol"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={30} />
        </a>
        <a
          href="https://discord.gg/vShYcxJEuY"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord size={30} />
        </a>
        <a
          href="https://github.com/DAOmasons/chews-protocol"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
      </div>
      <p className="footer">
        © 2023-Present{' '}
        <a
          href="https://daomasons.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          DAO Masons
        </a>
      </p>
    </>
  );
}

export default HomePage;
