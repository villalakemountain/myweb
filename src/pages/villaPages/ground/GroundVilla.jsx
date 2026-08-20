import React from 'react';
//import components
import VillaHeader from '../VillaHeader';
import VillaNav from '../VillaNav';
import AmenitiesSection from '../AmenitiesSection';
import ImageGallery from '../ImageGallery';
import Footer from '../../../components/Footer';

// Import images
import bedroom1 from '../../../assets/villaPages/groundVillaImages/villa_lake_mountain_bedroom1.webp';
import couple from '../../../assets/villaPages/groundVillaImages/villa_lake_mountain_couple.webp';
import inside from '../../../assets/villaPages/groundVillaImages/villa_lake_mountain_inside.webp';
import buddhistStatue from '../../../assets/villaPages/groundVillaImages/villa_lake_mountain_inside_buddist_statue.webp';
import lobby from '../../../assets/villaPages/groundVillaImages/villa_lake_mountain_lobby.webp';
import outdoor1 from '../../../assets/villaPages/groundVillaImages/villa_lake_mountain_outdoor1.webp';
import outdoorGirl from '../../../assets/villaPages/groundVillaImages/villa_lake_mountain_outdoor_girl.webp';
import outdoorGirlWorking from '../../../assets/villaPages/groundVillaImages/villa_lake_mountain_outdoor_girl_working.webp';

// Lake House Main Component
const GroundVilla = () => {
  const descriptions = [
    "Your private lakeside retreat with direct lake access, secluded garden, and intimate setting for three guests.",
    "Perfect for couples seeking tranquil mornings by the water and peaceful evenings in your own backyard sanctuary."
  ];

  const amenities = [
    'Air conditioning',
    'Wifi',
    'Washing machine',
    'Refrigerator',
    'Sleeps three',
    'Lake access',
    'Private entrance',
    'Private garden',
    'Mosquito net',
    'Hot water',
    'Patio',
    'Desk Space',
    'Ceiling fan',
    'Dining table',
    'Essentials',
    'Dishes and silverware',
    'Bed linens',
    'Private Backyard',
    'Cooking basics',
    'Hammock',
    'Kitchen',
    'BBQ grill',
    'Free parking on premises',
    'Long term stays allowed'
  ];

  const images = [
    {
      url: bedroom1,
      alt: "Lake house bedroom with comfortable bed"
    },
    {
      url: couple,
      alt: "Couple enjoying the lake house"
    },
    {
      url: inside,
      alt: "Interior view of the lake house"
    },
    {
      url: buddhistStatue,
      alt: "Interior with Buddhist statue decoration"
    },
    {
      url: lobby,
      alt: "Lake house lobby area"
    },
    {
      url: outdoor1,
      alt: "Outdoor area of the lake house"
    },
    {
      url: outdoorGirl,
      alt: "Guest enjoying the outdoor space"
    },
    {
      url: outdoorGirlWorking,
      alt: "Working space in outdoor area"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <VillaNav currentPage="ground" />
      <VillaHeader 
        title="Ground Villa" 
        descriptions={descriptions}
        villaType="ground"
      />
      <AmenitiesSection amenities={amenities} />
      <ImageGallery images={images} />
      <Footer />
    </div>
  );
};

export default GroundVilla;