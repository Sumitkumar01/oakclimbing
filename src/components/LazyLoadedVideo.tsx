"use client";
import dynamic from "next/dynamic";
import Image from "next/image";

const LazyLoadedVideo = dynamic(() => import("./SEOVideo"), {
  loading: () => (
    <Image
      src="/images/banner.webp"
      alt="banner"
      fill
      className="object-cover"
    />
  ),
});

export default LazyLoadedVideo;
