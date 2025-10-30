import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImg1 from "../../assets/bike1.png";
import heroImg2 from "../../assets/bike2.png";
import heroImg3 from "../../assets/bike3.png";
import bgVideo from "../../assets/bike-bg.mp4";

const sectionStyle = {
  minHeight: "100vh",
  width: "100%",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};

const videoStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  left: 0,
  top: 0,
  zIndex: 1,
  objectFit: "cover",
  filter: "blur(5px) brightness(0.5)",
};

const glassCard = {
  position: "relative",
  zIndex: 2,
  padding: "60px 48px",
  borderRadius: "32px",

  boxShadow: "0 8px 40px #0006",
  backdropFilter: "blur(14px) saturate(160%)",
  WebkitBackdropFilter: "blur(14px) saturate(160%)",
  maxWidth: 950,
  minWidth: 320,
  display: "flex",
  alignItems: "center",
  gap: "60px",
  border: "1.5px solid rgba(255,255,255,0.2)",
};

const bikeImages = [heroImg1, heroImg2, heroImg3];

function Hero() {
  const [index, setIndex] = useState(0);

  // Auto-change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bikeImages.length);
    }, 2000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const nextBike = () => setIndex((index + 1) % bikeImages.length);
  const prevBike = () =>
    setIndex((index - 1 + bikeImages.length) % bikeImages.length);

  return (
    <>
      <section style={sectionStyle}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={videoStyle}
          src={bgVideo}
          type="video/mp4"
        />

        {/* ✅ Wrap both sides inside glassCard */}
        <motion.div
          style={glassCard}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Left: Text */}
          <motion.div
            style={{ flex: 1, color: "#fff" }}
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              style={{
                fontSize: "3.1rem",
                fontWeight: 800,
                marginBottom: "20px",
                letterSpacing: "0.9px",
                textShadow: "0 2px 30px #2225",
              }}
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Yamaha Showroom <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #67e8f9, #fbbf24, #fb7185)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              ></span>
            </motion.h1>
            <motion.p
              style={{
                fontSize: "1.31rem",
                marginBottom: 28,
                lineHeight: 1.6,
                textShadow: "0 1px 10px #2224",
              }}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.5 }}
            >
              Precision engineering meets Italian soul. Explore the latest
              Ducati lineup—crafted for speed, control, and emotion.
            </motion.p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <motion.button
                whileHover={{
                  scale: 1.06,
                  background: "linear-gradient(90deg,#67e8f9,#fb7185)",
                  color: "#fff",
                  boxShadow: "0 6px 32px #fbbf2460",
                }}
                style={{
                  padding: "10px 20px",
                  borderRadius: "35px",
                  background: "linear-gradient(90deg,#fb7185,#fbbf24)",
                  color: "#fff",
                  border: "none",
                  fontSize: "1.12rem",
                  fontWeight: 700,
                  boxShadow: "0 6px 32px #0003",
                  cursor: "pointer",
                }}
              >
                Explore
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.06,
                  background: "linear-gradient(90deg,#67e8f9,#fb7185)",
                  color: "#fff",
                  boxShadow: "0 6px 32px #fbbf2460",
                }}
                style={{
                  marginLeft: 20,
                  padding: "10px 20px",
                  borderRadius: "35px",
                  background: "linear-gradient(90deg,#fb7185,#fbbf24)",
                  color: "#fff",
                  border: "none",
                  fontSize: "1.12rem",
                  fontWeight: 700,
                  boxShadow: "0 6px 32px #0003",
                  cursor: "pointer",
                }}
              >
                Test Ride
              </motion.button>
            </div>
          </motion.div>

          {/* Right: Carousel */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 320,
              position: "relative",
            }}
          >
            <button
              onClick={prevBike}
              style={{
                position: "absolute",
                left: -40,
                zIndex: 3,
                fontSize: 32,
                background: "none",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                top: "45%",
                transform: "translateY(-50%)",
              }}
              aria-label="Previous Bike"
            >
              ‹
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={bikeImages[index]}
                src={bikeImages[index]}
                alt="Hero Bike"
                style={{
                  width: "100%",
                  maxWidth: 390,
                  borderRadius: "24px",
                }}
                initial={{ x: 100, opacity: 0, scale: 0.96 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  y: [0, -16, 0],
                  rotate: [0, -6, 0],
                }}
                exit={{ x: -100, opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, type: "tween", ease: "easeOut" }}
              />
            </AnimatePresence>

            <button
              onClick={nextBike}
              style={{
                position: "absolute",
                right: -40,
                zIndex: 3,
                fontSize: 32,
                background: "none",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                top: "45%",
                transform: "translateY(-50%)",
              }}
              aria-label="Next Bike"
            >
              ›
            </button>
          </div>
        </motion.div>
      </section>

      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6  bg-white text-gray-900 rounded-xl shadow-lg"
        style={{ padding: "30px" }}
      >
        {[
          { title: "216 Hp", subtitle: "Peak Power" },
          { title: "198 kg", subtitle: "Dry Weight" },
          { title: "V4", subtitle: "Desmosedici Stradale" },
          { title: "6-Axis", subtitle: "IMU & Electronics" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <h1 className="text-4xl font-extrabold tracking-wide mb-2 text-red-600">
              {item.title}
            </h1>
            <p className="text-sm uppercase tracking-wider text-gray-600">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
export default Hero;
