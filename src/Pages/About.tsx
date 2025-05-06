import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ArtistCard from "../components/Artistcard";
import woman1 from "../assets/images/woman2.jpg";
import man1 from "../assets/images/man1.jpg";
import man2 from "../assets/images/man1.jpg";

const artists = [
  { Name: "Artist 1", Image: woman1, Description: "Lorem ipsum dolor sit amet..." },
  { Name: "Artist 2", Image: man1, Description: "Lorem ipsum dolor sit amet..." },
  { Name: "Artist 3", Image: man2, Description: "Lorem ipsum dolor sit amet..." },
  { Name: "Artist 4", Image: man2, Description: "Lorem ipsum dolor sit amet..." },
  { Name: "Artist 5", Image: man2, Description: "Lorem ipsum dolor sit amet..." },
  { Name: "Artist 6", Image: man2, Description: "Lorem ipsum dolor sit amet..." },
];

const About = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % artists.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Determine visible indices for 4-card display
  const visibleArtists = [
    artists[(centerIndex - 1 + artists.length) % artists.length],
    artists[centerIndex],
    artists[(centerIndex + 1) % artists.length],
    artists[(centerIndex + 2) % artists.length],
  ];

  return (
    <section className="bg-gradient-to-r from-gray-900 via-black to-gray-950 py-8">
      <h2 className="text-4xl text-white text-center font-bold mb-12">Performing artists</h2>

      <div className="flex justify-center overflow-hidden px-4">
        <div className="flex gap-12 w-full max-w-4xl justify-center">
          {visibleArtists.map((artist, idx) => {
            const isCenter = idx === 1;
            return (
              <motion.div
                key={`${artist.Name}-${centerIndex}-${idx}`}  // unique key
                className="flex-none"
                animate={{ scale: isCenter ? 1.25 : 1.0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ width: isCenter ? "260px" : "220px" }}
              >
                <ArtistCard
                  Name={artist.Name}
                  Image={artist.Image}
                  Description={artist.Description}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="h-7 w-4xl bg-amber-300 border-l-8 rounded-br-2xl rounded-tr-2xl mt-8"></div>
    </section>
  );
};

export default About;
