"use client";
import Image from "next/image";
import BannerImage from "../app/images/banner.png";

const Hero = () => {
  return (
    <section className="w-full bg-gray-50">
      {/* এখানে pt দেওয়া হলো */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-3 mb-10">
        <div className="overflow-hidden rounded-2xl shadow-md">
          <Image
            src={BannerImage}
            alt="Hero Banner"
            className="w-full rounded-2xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
