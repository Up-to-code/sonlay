import React from "react";
import "../styles/LandingPage.css";
import { Button } from "@/components/ui/button";
import { Boxes, Container, Download } from "lucide-react";
import Feature_iteam from "@/components/common/Feature_iteam";
import Link from "next/link";

const LandingPage: React.FC = () => {
  return (
    <>
      <header className="header  pb-10 rounded-b-md">
        <div className="container">
          <nav className="navbar">
            <div className="logo">Soundley</div>
            <ul className="nav-links">
              {/* <li><a href="#features">Features</a></li>
              <li><a href="#categories">Categories</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li> */}
            </ul>
            <div className="flex gap-5">
              <Button className="anime  bg-transparent rounded-md hover:bg-white hover:text-black">
                Login
              </Button>
              <Button className=" anime bg-white text-black rounded-md hover:opacity-80 hover:bg-white">
                Sign Up
              </Button>
            </div>
          </nav>
          <div className="hero py-10 ">
            <h1 className="text-4xl font-semibold  h2">
              Discover the World of Sound Effects
            </h1>
            <p className="py-5">
              Explore, download, and enhance your projects with our extensive
              library of sound effects.
            </p>
            <Link href={"/home"}>
              <Button
                style={{ background: "#FFF", color: "#000" }}
                className="hover:opacity-85 transition-all  anime"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>
      {/* features start  */}
      <section id="features" className="features-section">
        <div className="container">
          <h2 className="font-bold">Features</h2>

          <div className="features-grid">
            <Feature_iteam
              title="High Quality"
              description="All our sound effects are recorded in high definition.
              "
              icon={<Container />}
            />
            <Feature_iteam
              title="Variety of Sounds"
              description="Thousands of sound effects across different categories "
              icon={<Boxes />}
            />

            <Feature_iteam
              title="Downloadable"
              description="Downloadable sound effects for your projects. "
              icon={<Download />}
            />
          </div>
        </div>
      </section>
      {/* features end */}
      <section id="categories" className="categories-section">
        <div className="container">
          <h2>Categories</h2>
          <div className="categories-grid">
            <div className="category-item">
              <h3>Nature</h3>
              <p>Sounds of rain, wind, animals, and more.</p>
            </div>
            <div className="category-item">
              <h3>Urban</h3>
              <p>City sounds, traffic, crowds, and more.</p>
            </div>
            <div className="category-item">
              <h3>Technology</h3>
              <p>Gadgets, machines, beeps, and more.</p>
            </div>
            <div className="category-item">
              <h3>Fantasy</h3>
              <p>Magical spells, mythical creatures, and more.</p>
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section id="about" className="bg-zinc-900 text-white py-5 px-10 rounded-md my-10">
        <div className="container">
          <h2 className="font-bold">About Us</h2>
          <p>
            SoundScape is dedicated to providing high-quality sound effects for
            creatives around the world. Our team of sound engineers and
            designers work tirelessly to bring you the best audio experience.
          </p>
        </div>
      </section> */}
    </>
  );
};

export default LandingPage;
