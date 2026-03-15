import React, { useState } from "react";
import Nav from "../../Components/navbar";

export default function ArtCraftPage() {

  const [showMore, setShowMore] = useState(false);

  const crafts = [
    {
      name: "Terracotta Art",
      image: "/Terracotta Art.jpg",
      description:
        "Bishnupur’s terracotta art is world-famous for decorating temples with detailed carvings of mythology and daily life."
    },
    {
      name: "Baluchari Saree",
      image: "/Baluchari Saree.jpg",
      description:
        "Baluchari sarees are luxurious silk textiles featuring intricate woven scenes from the Ramayana and Mahabharata."
    },
    {
      name: "Dokra Craft",
      image: "/Dokra Craft.jpg",
      description:
        "Dokra is an ancient metal casting technique that creates beautiful tribal figurines and ornaments."
    },
    {
      name: "Conch Shell Craft",
      image: "/Conch shell craft.jpg",
      description:
        "Artisans carve conch shells into bangles, jewelry, and ritual objects used in Bengali traditions."
    },
    {
      name: "Stone Carving",
      image: "/Stone Carving.jpg",
      description:
        "Stone carvings inspired by temple architecture showcase Bishnupur’s historical craftsmanship."
    },
    {
      name: "Clay Pottery",
      image: "/Clay Pottery.jpg",
      description:
        "Traditional clay pottery represents rural Bengal’s culture and artistic creativity."
    },
    {
      name: "Wooden Craft",
      image: "/Wooden Craft.jpg",
      description:
        "Wooden toys, idols, and decorative items reflect centuries of handcrafted tradition."
    },
    {
      name: "Brass & Metal Craft",
      image: "/Brass & Metal Craft.jpg",
      description:
        "Brass and metal crafts include lamps, utensils, and decorative sculptures."
    }
  ];

  const visibleCrafts = showMore ? crafts : crafts.slice(0, 4);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "80px 20px 50px",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <Nav />

      {/* Glass Container */}
      <div
        style={{
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(8px)",
          padding: "40px",
          borderRadius: "18px",
          maxWidth: "1200px",
          margin: "auto"
        }}
      >

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ fontSize: "34px", color: "#b45309" }}>
            🎨 Art & Craft of Bishnupur
          </h1>

          <p style={{ color: "#555", marginTop: "10px", maxWidth: "700px", marginInline: "auto" }}>
            Bishnupur is famous for its artistic heritage where traditional
            craftsmanship meets culture and history through beautiful handmade creations.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
            gap: "25px"
          }}
        >
          {visibleCrafts.map((craft, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 8px 18px rgba(0,0,0,0.2)",
                transition: "transform 0.3s"
              }}
            >
              <img
                src={craft.image}
                alt={craft.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover"
                }}
              />

              <div style={{ padding: "15px" }}>
                <h3 style={{ color: "#b45309" }}>{craft.name}</h3>

                <p style={{ fontSize: "14px", color: "#555" }}>
                  {craft.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showMore && (
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button
              onClick={() => setShowMore(true)}
              style={{
                padding: "12px 30px",
                fontSize: "16px",
                borderRadius: "30px",
                border: "none",
                background: "linear-gradient(45deg,#ea580c,#f97316)",
                color: "white",
                cursor: "pointer",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
              }}
            >
              Explore More Crafts
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

