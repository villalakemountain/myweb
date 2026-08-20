const VillaCard = ({ 
  image, 
  villaName, 
  description, 
  altText = "Villa image",
  onLearnMore = () => {}
}) => {
  return (
    // <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
    <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">  
    {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image}
          alt={altText}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      {/* Content Section */}
      <div className="p-8">
        {/* Title */}
        <h2 className="text-3xl font-serif text-gray-900 mb-6 text-center">
          {villaName}
        </h2>
        
        {/* Description */}
        <div className="text-gray-600 text-center leading-relaxed">
          {Array.isArray(description) ? (
            <div className="space-y-4">
              {description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          ) : (
            <p>{description}</p>
          )}
        </div>
        
        {/* Learn More Button */}
        <div className="mt-8 text-center">
          <button 
            onClick={onLearnMore}
            className="inline-flex items-center px-8 py-3 bg-amber-200 hover:bg-amber-300 text-amber-900 font-medium rounded-full transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default VillaCard;