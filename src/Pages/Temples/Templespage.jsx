import { useState, useEffect } from "react";
import Nav from "../../Components/navbar";

export default function TemplePage() {

  const temples = [
    {
      id: 1,
      name: "Rasmancha",
      description:
        "The Rasmancha is the oldest brick temple in Bishnupur built by King Hambir Malla Dev around 1600 AD. Its pyramid-like structure and terracotta work make it one of the most unique temples in India.",
      image: "/Bishnupur_Rashmancha.jpg",
      map: "https://maps.google.com/?q=Rasmancha Bishnupur"
    },
    {
      id: 2,
      name: "Jor Bangla Temple",
      description:
        "Built in 1655 by King Raghunath Singh, the Jor Bangla temple has a twin-hut design representing Bengal village architecture.",
      image: "/jor banglo temple.jpg",
      map: "https://maps.google.com/?q=Jor Bangla Temple Bishnupur"
    },
    {
      id: 3,
      name: "Madan Mohan Temple",
      description:
        "Built in 1694 by King Durjana Singh Deva, this temple is famous for its terracotta panels depicting scenes from Hindu epics.",
      image: "/Madan mahan temple.jpg",
      map: "https://maps.google.com/?q=Madan Mohan Temple Bishnupur"
    },
    {
      id: 4,
      name: "Shyam Rai Temple",
      description:
        "The Shyam Rai temple built in 1643 features Pancha Ratna architecture with five towers and beautiful terracotta carvings.",
      image: "/Shaym rai temple.jpg",
      map: "https://maps.google.com/?q=Shyam Rai Temple Bishnupur"
    },
    {
      id: 5,
      name: "Kalachand Temple",
      description:
        "Kalachand Temple is an Ek-Ratna temple famous for its carved walls and historical significance.",
      image: "/Kalachand Temple.jpg",
      map: "https://maps.google.com/?q=Kalachand Temple Bishnupur"
    },
    {
      id: 6,
      name: "Radha Shyam Temple",
      description:
        "Built in 1758, Radha Shyam temple features a dome shaped tower and rich terracotta decoration.",
      image: "/Radha Shyam Temple.jpg",
      map: "https://maps.google.com/?q=Radha Shyam Temple Bishnupur"
    },
    {
      id: 7,
      name: "Radha Gobinda Temple",
      description:
        "Located near Lalbandh, this temple has beautiful curved roofs and decorated carvings.",
      image: "/Radha Gobinda Temple.jpg",
      map: "https://maps.google.com/?q=Radha Gobinda Temple Bishnupur"
    },
    {
      id: 8,
      name: "Lalji Temple",
      description:
        "Built in 1658, Lalji Temple is dedicated to Radha Krishna and represents classic Bishnupur temple architecture.",
      image: "/Lalji Temple.jpg",
      map: "https://maps.google.com/?q=Lalji Temple Bishnupur"
    },
    {
      id: 9,
      name: "Nandalal Temple",
      description:
        "The Nandalal Temple is a peaceful Ek-Ratna temple located near Lalbandh lake.",
      image: "/Nandalal Temple.jpg",
      map: "https://maps.google.com/?q=Nandalal Temple Bishnupur"
    }
  ];

  const [selectedTemple, setSelectedTemple] = useState(temples[0]);

  /* Auto Image Change (Slider Effect) */
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % temples.length);
      setSelectedTemple(temples[(index + 1) % temples.length]);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (

    <div
      className="min-h-screen flex pt-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <Nav />

      {/* Glass Overlay with Enhanced Design */}
      <div className="flex w-full bg-linear-to-br from-white/90 via-white/85 to-white/90 backdrop-blur-xl relative z-10">

        {/* Enhanced Sidebar */}
        <div className="w-80 bg-linear-to-b from-white/95 to-white/90 shadow-2xl p-8 border-r border-white/20 backdrop-blur-sm">

          {/* Decorative Header */}
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-linear-to-br from-orange-100 to-orange-200 rounded-2xl shadow-lg mb-4">
              <span className="text-4xl">🏛️</span>
            </div>
            <h2 className="text-3xl font-bold bg-linear-to-r from-orange-600 via-orange-700 to-orange-800 bg-clip-text text-transparent mb-2">
              Bishnupur Temples
            </h2>
            <div className="w-16 h-1 bg-linear-to-r from-orange-400 to-orange-600 rounded-full mx-auto"></div>
          </div>

          <ul className="space-y-4">
            {temples.map((temple) => (
              <li
                key={temple.id}
                onClick={() => setSelectedTemple(temple)}
                className={`cursor-pointer p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg border
                ${
                  selectedTemple.id === temple.id
                    ? "bg-linear-to-r from-orange-200 to-orange-300 text-orange-900 font-bold shadow-xl border-orange-300 scale-105"
                    : "hover:bg-linear-to-r hover:from-orange-50 hover:to-orange-100 border-transparent hover:border-orange-200"
                }`}
              >
                <div className="flex items-center">
                  <span className="text-lg mr-3">🕉️</span>
                  <span className="font-medium">{temple.name}</span>
                </div>
              </li>
            ))}
          </ul>

        </div>

        {/* Enhanced Temple Details */}
        <div className="flex-1 p-12 relative">

          {/* Floating Decorative Elements */}
          <div className="absolute top-8 right-8 opacity-20">
            <div className="w-20 h-20 bg-linear-to-br from-orange-300 to-pink-300 rounded-full blur-xl animate-bounce delay-300"></div>
          </div>
          <div className="absolute bottom-8 left-8 opacity-15">
            <div className="w-16 h-16 bg-linear-to-tr from-purple-300 to-blue-300 rounded-full blur-lg animate-bounce delay-700"></div>
          </div>

          <div className="max-w-4xl mx-auto">

            {/* Temple Title with Enhanced Styling */}
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold bg-linear-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-fade-in">
                {selectedTemple.name}
              </h1>
              <div className="w-24 h-1 bg-linear-to-r from-orange-400 via-red-400 to-pink-400 rounded-full mx-auto"></div>
            </div>

            {/* Enhanced Image Container */}
            <div className="relative mb-8 group">
              <div className="absolute inset-0 bg-linear-to-r from-orange-400/20 to-pink-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img
                src={selectedTemple.image}
                alt={selectedTemple.name}
                className="relative w-full max-w-4xl h-96 object-cover rounded-2xl shadow-2xl border border-white/50 backdrop-blur-sm hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Enhanced Description */}
            <div className="bg-linear-to-br from-white/80 to-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30 mb-8">
              <p className="text-gray-800 text-xl leading-relaxed font-medium">
                {selectedTemple.description}
              </p>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

              {/* Map Button */}
              <a
                href={selectedTemple.map}
                target="_blank"
                rel="noreferrer"
                className="group px-8 py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg"
              >
                <span className="flex items-center">
                  <span className="text-xl mr-2 group-hover:animate-bounce">📍</span>
                  View on Map
                </span>
              </a>

              

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}