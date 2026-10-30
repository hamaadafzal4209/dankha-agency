import Image from "next/image";

/**
 * PNG renders of logo.svg / logo-light.svg (which embed two 1536px bitmaps and weigh 140 KB each), so Next.js can serve
 * a few-KB WebP or AVIF instead. Only the default dark-theme logo is preloaded; the light one loads when it is shown.
 */
export function Logo({ width = 112, height = 34 }: { width?: number; height?: number }) {
  return (
    <>
      <Image src="/assets/logo-white.png" alt="Dankha" width={width} height={height} className="logo-on-dark" priority />
      <Image src="/assets/logo-navy.png" alt="Dankha" width={width} height={height} className="logo-on-light" />
    </>
  );
}
