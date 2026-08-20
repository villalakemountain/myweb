import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Janna Ivanova",
      rating: 5,
      timeAgo: "10 months ago",
      text: "This stylish house is designed in a high-quality, modern, and minimalist style, which is a rare find in this area. We had struggled to find suitable accommodation before, but here we felt comfortable. We stayed on the first floor, while observing the lake from the terrace. The owner is very friendly and helpful.",
    },
    {
      id: 2,
      name: "רובי אורן",
      rating: 5,
      timeAgo: "4 months ago",
      text: "We were here for two weeks, it was amazing! The area is pastoral and beautiful and the villa sits right on the lake, the villa is spacious, clean and tidy and has everything you need even for a long stay, the owners are kind and dedicated and helped with any problem quickly, highly recommended! We will definitely be back again.",
    },
    {
      id: 3,
      name: "Jamie D",
      rating: 5,
      timeAgo: "1 year ago",
      text: "This Villa set amongst tranquil scenery with a stunning lake view is a perfect place for any group of friends or family to recharge and spend time together. I have felt very safe and well looked after here. The owner has been very accommodating and helpful. Highly recommend.",
    },
    {
      id: 4,
      name: "Padme Office",
      rating: 5,
      timeAgo: "2 months ago",
      text: "Great Villa! Great experience. Lovely owner. Highly recommended. The place is very peaceful and the view is beautiful. Perfect for a relaxing getaway.",
    },
    {
      id: 5,
      name: "Alina Mamedova",
      rating: 5,
      timeAgo: "1 year ago",
      text: "Wonderful villa with a beautiful view of the lake! Very clean, modern design, everything you need for a comfortable stay. The hosts are very nice people. We really enjoyed our stay here and would love to come back!",
    },
    {
      id: 6,
      name: "Anton Kulikov",
      rating: 5,
      timeAgo: "1 year ago",
      text: "The best villa in Sri Lanka!! Highly recommend! Peace and quiet, solitude with nature, a gorgeous view of the lake, and a front lawn where palm squirrels run. I arrived very late, but the owner waited for me, for which I am very grateful.",
    },
    {
      id: 7,
      name: "Laurence Camo",
      rating: 5,
      timeAgo: "2 years ago",
      text: "This is a beautiful villa on the lake. It is very well maintained and has everything you need for optimal comfort. The owners are really welcoming. They invited us to eat in the downstairs part of the villa because we were staying upstairs. A great stay!",
    },
    {
      id: 8,
      name: "Pavel Fomichev",
      rating: 5,
      timeAgo: "2 years ago",
      text: "Excellent villa! We rented the second floor with three bedrooms. Panoramic windows, huge balcony with a view of the lake. Very clean, comfortable furniture, and fully equipped kitchen. Ideal for those who want to stay away from the noise.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Responsive: how many cards visible at once
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = reviews.length - visibleCount;

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goNext]);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // Palette of avatar background colours that work with the site's aesthetic
  const avatarColors = [
    "bg-[#586460]",
    "bg-amber-700",
    "bg-teal-700",
    "bg-[#7a6e54]",
    "bg-[#4a6960]",
    "bg-[#8b7355]",
    "bg-[#5a7068]",
    "bg-[#6b5b45]",
  ];

  return (
    <section id="reviews" className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-[#586460] mb-3 font-medium">
            Words That Warm Our Hearts
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-4">
            Guest Reviews
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="block w-12 h-px bg-[#586460]/30"></span>
            <span className="block w-2 h-2 rounded-full bg-[#586460]/40"></span>
            <span className="block w-12 h-px bg-[#586460]/30"></span>
          </div>

          {/* Overall Rating Badge */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < 5
                      ? "fill-amber-400 text-amber-400"
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-serif font-semibold text-gray-900">
              4.8
            </span>
            <span className="text-gray-500 text-sm">from 27 reviews</span>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-10
                       w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border border-gray-100
                       flex items-center justify-center
                       hover:bg-gray-50 hover:shadow-xl
                       transition-all duration-200"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={goNext}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-10
                       w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border border-gray-100
                       flex items-center justify-center
                       hover:bg-gray-50 hover:shadow-xl
                       transition-all duration-200"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-4 sm:mx-8">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div
                    className="bg-white rounded-2xl p-8 h-full
                               border border-gray-100 shadow-sm
                               hover:shadow-lg hover:-translate-y-1
                               transition-all duration-300
                               flex flex-col relative"
                  >
                    {/* Decorative Quote */}
                    <Quote className="absolute top-6 right-6 w-8 h-8 text-[#586460]/10" />

                    {/* Reviewer Info */}
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm ${avatarColors[index % avatarColors.length]}`}
                      >
                        {getInitials(review.name)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-[15px]">
                          {review.name}
                        </h4>
                        <p className="text-gray-400 text-xs">
                          {review.timeAgo}
                        </p>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-0.5 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "fill-amber-400 text-amber-400"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-500 leading-relaxed text-[14px] flex-grow">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-[#586460] scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Google Attribution */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?q=villa+lake+mountain&ie=UTF-8#lrd=0x3ae16b5d99461a91:0x5013b5883573575c,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#586460] transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            View all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
