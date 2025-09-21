/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // ✅ Cloudinary-এর জন্য নতুন হোস্টনেম
      },
      // যদি i.ibb.co থেকে ছবি লোড করার প্রয়োজন হয়, তবে এই লাইনটি যোগ করুন
      // {
      //   protocol: "https",
      //   hostname: "i.ibb.co",
      // },
    ],
  },
};

export default nextConfig;
