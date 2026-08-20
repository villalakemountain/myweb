import { MessageCircle } from 'lucide-react';

const VillaHeader = ({ title, descriptions, villaType }) => {
  const handleBookNow = () => {
    const message = `Hello, I would like to book the ${villaType === 'upper' ? 'Upper Villa' : 'Ground Villa'}.`;
    const phoneNumber = '+917709589459';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-4 sm:mb-6 leading-tight">
          {title}
        </h1>
        <div className="space-y-3 sm:space-y-4">
          {descriptions.map((desc, index) => (
            <p key={index} className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl">
              {desc}
            </p>
          ))}
        </div>
        <button
          onClick={handleBookNow}
          className="mt-6 sm:mt-8 inline-flex items-center gap-2  hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg" 
          style={{ backgroundColor: "#608578ff" }}
        >
          <MessageCircle size={20} />
          <span>Book Now</span>
        </button>
      </div>
    </div>
  );
};

export default VillaHeader