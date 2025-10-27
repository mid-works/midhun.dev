import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";
import { motion } from "framer-motion";
import CryptoJS from "crypto-js";

// Encryption key
const ENCRYPTION_KEY = "mySecretKey";

// Encrypted social links
const socialLinks = [
  {
    icon: <FaLinkedinIn />,
    encryptedUrl: "U2FsdGVkX1/GenByvNr0aJbr+ppalOjLIGRQeH27LmUhe5WYwq6Z/EeldhrPsGH5YUAB92PAsvH0WrAPx8UZTvA4rFy2LqUvPQSC0FdkxX8=",
    hoverClass: "hover:text-[#0a66c2]",
  },
  {
    icon: <FaInstagram />,
    encryptedUrl: "U2FsdGVkX18zpz/hBzCaid1NMG+hm5Qe1TJIbFhIjSChLsc2E3FPVHDqtvd9edaYXr5GMKlllpEqAfZgEueYRAdfuHq+/YW7NdEdtUoBTeFGkuvHCryFSw7Duh4S0aoo",
    hoverClass: "hover:text-[#e4405f]",
  },
  {
    icon: <FaGithub />,
    encryptedUrl: "U2FsdGVkX19fPRl927rsfe99ufkjO/pQHBlS/Wjr5wz0hLBFzfd/t+ZhDLuvlHr5",
    hoverClass: "hover:text-[#915eff]",
  },
  {
    icon: <FaEnvelope />,
    encryptedUrl: "U2FsdGVkX18DK/VMKgbiyGb9mxDAT/Kxl5MjqRVEposw5yb17hPjYcJoKJ2razZh",
    hoverClass: "hover:text-[#915eff]",
    isMail: true,
  },
];

const Footer = () => {
  const openEncryptedLink = (encryptedUrl, isMail = false) => {
    try {
      const decrypted = CryptoJS.AES.decrypt(encryptedUrl, ENCRYPTION_KEY).toString(
        CryptoJS.enc.Utf8
      );
      if (decrypted) {
        if (isMail) {
          window.location.href = `mailto:${decrypted}`;
        } else {
          window.open(decrypted, "_blank", "noopener,noreferrer");
        }
      } else {
        alert("Failed to open link!");
      }
    } catch (e) {
      alert("Failed to decrypt link!");
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col space-y-10 justify-center px-10 py-10 text-center bg-primary"
    >
      {/* Navigation Links */}
      <nav className="flex justify-center flex-wrap gap-6 text-gray-400 font-medium">
        <a href="#about" className="hover:text-[#915eff] transition-colors">
          About
        </a>
        <a href="#work" className="hover:text-[#915eff] transition-colors">
          Work
        </a>
        <a href="#contact" className="hover:text-[#915eff] transition-colors">
          Contact
        </a>
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 text-2xl">
        {socialLinks.map((social, idx) => (
          <button
            key={idx}
            onClick={() => openEncryptedLink(social.encryptedUrl, social.isMail)}
            className={`text-gray-400 transition-colors duration-300 ${social.hoverClass}`}
          >
            {social.icon}
          </button>
        ))}
      </div>

      <p className="text-gray-500 font-medium">
        © {new Date().getFullYear()} Crafted with ⚡ and 💻 by Midhun
      </p>
    </motion.footer>
  );
};

export default Footer;
