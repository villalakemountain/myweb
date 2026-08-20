//import components
import VillaHeader from '../VillaHeader';
import VillaNav from '../VillaNav';
import AmenitiesSection from '../AmenitiesSection';
import ImageGallery from '../ImageGallery';
import Footer from '../../../components/Footer';

// Upper Villa Main Component - Mobile Responsive
const UpperVilla = () => {
  const descriptions = [
    "Experience luxury and comfort in our spacious upper villa, perfectly designed for families and groups seeking a memorable retreat.",
    "Wake up to breathtaking lake views and enjoy modern amenities in a serene natural setting."
  ];

  const amenities = [
    'Air conditioning',
    'Wi-fi',
    'Lake views',
    'Mosquito nets',
    'Sleeps six',
    'Bed linens',
    'Hot water',
    'Ceiling fan',
    'Desk Space',
    'BBQ grill',
    'Refrigerator',
    'Kitchen & equipments',
    'Clothing storage',
    'Dining table',
    'Dishes and silverware',
    'Free parking on premises',
    'Hot water',
    'Private living room',
    'Private entrance',
    'Safe provided',
    'Long term stays allowed'
  ];

  const images = [
    {
      url: "/src/assets/villaPages/upperVillaImages/upper_villa_outside.webp",
      alt: "Upper villa exterior view"
    },
    {
      url: "/src/assets/villaPages/upperVillaImages/villa_lake_mountain_balcony.webp",
      alt: "Villa balcony with lake view"
    },
    {
      url: "/src/assets/villaPages/upperVillaImages/villa_lake_mountain_balcony_with_foreigners.webp",
      alt: "Villa balcony with guests enjoying the view"
    },
    {
      url: "/src/assets/villaPages/upperVillaImages/villa_lake_mountain_balcony_with_foreigner_3.webp",
      alt: "Villa balcony relaxation area"
    },
    {
      url: "/src/assets/villaPages/upperVillaImages/villa_lake_mountain_inside_bed.webp",
      alt: "Villa bedroom interior"
    },
    {
      url: "/src/assets/villaPages/upperVillaImages/villa_lake_mountain_balcony_2.webp",
      alt: "Villa balcony seating area"
    },
    {
      url: "/src/assets/villaPages/upperVillaImages/touriest_girl_balcony.webp",
      alt: "Guest enjoying the balcony view"
    },
    {
      url: "/src/assets/villaPages/upperVillaImages/four_foreigners.webp",
      alt: "Guests enjoying their stay"
    },
    {
      url: "/src/assets/villaPages/upperVillaImages/villa_lake_mountain_balcony_with_foreigner_2.webp",
      alt: "Balcony dining area with guests"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <VillaNav currentPage="upper" />
      <VillaHeader 
        title="Upper Villa" 
        descriptions={descriptions}
        villaType="upper"
      />
      <AmenitiesSection amenities={amenities} />
      <ImageGallery images={images} />
      <Footer />
    </div>
  );
};

export default UpperVilla;