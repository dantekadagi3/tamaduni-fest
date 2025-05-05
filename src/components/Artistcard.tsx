interface ArtistCardProps {
    Name: string;
    Image: string;
    Description: string;
  }
  
  const ArtistCard: React.FC<ArtistCardProps> = ({ Name, Image, Description }) => {
    return (
      <div className="flex flex-col overflow-hidden rounded-lg shadow-md bg-white">
        {/* Top image */}
        <img src={Image} alt={Name} className="w-full h-48 object-cover" />
  
        {/* Bottom section with black gradient and white text */}
        <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-t from-black to-gray-900 text-white">
          <h2 className="text-xl font-semibold mb-2">{Name}</h2>
          <p className="text-center text-sm">{Description}</p>
        </div>
      </div>
    );
  };
  
  export default ArtistCard;
  