// src/components/Footer.tsx
import { Instagram, Twitter, XIcon, Youtube } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-white py-4">
      <div className="container mx-auto text-center">
        <nav className="mt-4 text-white">
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="#" className="hover:underline">
                <Youtube />
              </a>
            </li>
            <li>
              <a href="#">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <Instagram />
              </a>
            </li>
          </ul>
        </nav>
        <p className="text-sm mt-5">
          &copy; 2024 soundley. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
