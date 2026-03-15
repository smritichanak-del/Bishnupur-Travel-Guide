import React, { useState, useEffect } from "react";
import { Link, Navigate,useNavigate } from "react-router-dom";
import Nav from "../../Components/navbar";

// Particle Component
const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleCount = 50;
    const newParticles = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    setParticles(newParticles);

    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;

          // Wrap around screen edges
          if (newX > window.innerWidth) newX = 0;
          if (newX < 0) newX = window.innerWidth;
          if (newY > window.innerHeight) newY = 0;
          if (newY < 0) newY = window.innerHeight;

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="particles-container">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
};

// Scroll Progress Component
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = (totalScroll / windowHeight) * 100;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress">
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default function HomePage() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Bishnupur Travel Guide";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (currentIndex < fullText.length && !isLoading) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText, isLoading]);

  const pages = [
    {
      title: "Temples",
      image: "data:image/jpeg;base64,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",
      path: "/temples"
    },
    {
      title: "Art & Craft",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ggiuJCcPsuS33sxo63jOwAehmWr3YtU-NA&s",
      path: "/artandcraft"
    },
    {
      title: "Natural Beauty",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QjlUIYSORvPxs9hxHwcWUylKLZ2ijVxayQ&s",
      path: "/naturalview"
   }
    
  ];

  const navigate = useNavigate();

  return (
    <div className="homepage-root">
      <ScrollProgress />
      <Particles />
      <Nav />

      {/* Hero / Title Section */}
      <header className="homepage-hero">
        <div className="hero-glass animate-fade-in">
          <h1 className="hero-title">{displayText}<span className="cursor"></span></h1>
          <p className="hero-sub">Explore the temples, crafts and natural beauty of Bishnupur </p>
          <div className="hero-actions">
        </div>
        </div>
      </header>

      

      {/* Cards Section */}
      <div id="cards" className="cards-grid">
        {pages.map((page, index) => (
          <Link
            to={page.path}
            key={index}
            className="page-card animate-fade-in floating-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="card-image-container">
              <img src={page.image} alt={page.title} className="card-image" />
              <div className="card-overlay">
                <div className="card-icon">
                  {page.title === "Temples" && "🏛️"}
                  {page.title === "Art & Craft" && "🎨"}
                  {page.title === "Natural Beauty" && "🌿"}
                </div>
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title">{page.title}</h3>
              <p className="card-description">
                {page.title === "Temples" && "Explore the magnificent terracotta temples of Bishnupur"}
                {page.title === "Art & Craft" && "Discover traditional crafts and artistic heritage"}
                {page.title === "Natural Beauty" && "Experience the serene natural landscapes and parks"}
              </p>
            </div>
          </Link>
        ))}
      </div>


      {/* Footer */}
      <footer className="homepage-footer mt-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-orange-600 mb-4">🏛️ Bishnupur Travel</h3>
              <p className="text-sm text-gray-600">
                Discover the rich heritage, stunning temples, and vibrant culture of Bishnupur, West Bengal.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-600 mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/temples" className="text-gray-600 hover:text-orange-600 transition">Temples</Link></li>
                <li><Link to="/artandcraft" className="text-gray-600 hover:text-orange-600 transition">Art & Craft</Link></li>
                <li><Link to="/naturalview" className="text-gray-600 hover:text-orange-600 transition">Natural Beauty</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-orange-600 transition">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-600 mb-4">Contact Info</h3>
              <p className="text-sm text-gray-600 mb-2">📍 Bishnupur, Bankura, West Bengal</p>
              <p className="text-sm text-gray-600 mb-2">📞 03211-24615</p>
              <p className="text-sm text-gray-600">✉️ info@bishnupurtravel.com</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500">
              © 2026 Bishnupur Travel Guide. All rights reserved. | Made by Smri..
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
