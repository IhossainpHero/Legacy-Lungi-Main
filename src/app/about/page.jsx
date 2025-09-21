import LungImage from "@/app/images/lungi-about.png"; // এখানে নিজের লুঙ্গি image path বসাও
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="flex-1 w-full">
          <Image
            src={LungImage}
            alt="লুঙ্গি"
            className="rounded-lg shadow-lg object-cover w-full h-[300px] sm:h-[400px] lg:h-[500px]"
            priority
          />
        </div>

        {/* Text */}
        <div className="flex-1 w-full">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            আমাদের লুঙ্গি
          </h2>
          <p className="text-gray-700 mb-4">
            আমাদের লুঙ্গি ১০০% কটন দিয়ে তৈরি। নরম ও টেকসই সুতায় বোনা, যা
            দীর্ঘস্থায়ী ব্যবহার নিশ্চিত করে। এর রঙ ফেড হয় না এবং দৈনন্দিন
            ব্যবহারের জন্য খুব আরামদায়ক।
          </p>
          <p className="text-gray-700">
            আমাদের লুঙ্গি বিভিন্ন আকারে ও রঙে পাওয়া যায়, যা সকল বয়সের মানুষের
            জন্য উপযুক্ত। এটি কেবল ঐতিহ্য নয়, বরং আরামদায়ক জীবনধারার প্রতীক।
          </p>
        </div>
      </div>
    </section>
  );
}
