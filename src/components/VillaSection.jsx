import { useNavigate } from "react-router-dom";
import VillaCard from "./reusable/VillaCard";

import LakeHouse from '../assets/villaPages/groundVillaImages/villa_lake_mountain_inside.webp';
import TreeHouse from '../assets/villaPages/upperVillaImages/upper_villa_outside.webp';

const VillaSection = () => {
  const navigate = useNavigate();
  const villas = [
    {
      id: 1,
      image: LakeHouse,
      villaName: "Ground Villa",
      description: [
        "Your private lakeside retreat with direct lake access, secluded garden, and intimate setting for three guests. Perfect for couples seeking tranquil mornings by the water and peaceful evenings in your own backyard sanctuary."
      ],
      altText: "Lake House with wooden deck and tropical garden",
      route: "/villa/ground"
    },
    {
      id: 2,
      image: TreeHouse,
      villaName: "Upper Villa",
      description: [
        "Spacious elevated escape with breath taking lake and horizon views from three private balconies. Accommodates six guests with a dedicated living room - ideal for families and groups wanting spectacular sunsets and endless vistas."
      ],
      altText: "Mountain villa with panoramic views",
      route: "/villa/upper"
    },
    {
      id: 3,
      image: TreeHouse,
      villaName: "Entire Villa",
      description: [
        "change me"
      ],
      altText: "Mountain villa with panoramic views",
      route: "/villa/upper"
    }
  ];

  const handleLearnMore = (route) => {
    navigate(route);
  };

  return (
    <section id="villas" className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-[#586460] mb-3 font-medium">
              Stay &amp; Discover
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-4">
              Our Villas
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <span className="block w-12 h-px bg-[#586460]/30"></span>
              <span className="block w-2 h-2 rounded-full bg-[#586460]/40"></span>
              <span className="block w-12 h-px bg-[#586460]/30"></span>
            </div>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center max-w-4xl mx-auto"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {villas.map((villa) => (
              <VillaCard
                key={villa.id}
                image={villa.image}
                villaName={villa.villaName}
                description={villa.description}
                altText={villa.altText}
                onLearnMore={() => handleLearnMore(villa.route)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillaSection;