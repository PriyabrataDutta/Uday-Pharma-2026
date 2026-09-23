import type { CSSProperties } from "react";

// Reuse only photographic regions of the supplied design; all UI is native HTML.
export function ReferenceArtwork({ x, y, width, height, label, className = "" }: {
  x: number; y: number; width: number; height: number; label: string; className?: string;
}) {
  const style: CSSProperties = {
    aspectRatio: `${width} / ${height}`,
    backgroundImage: 'url("/images/home-reference.webp")',
    backgroundSize: `${935 / width * 100}% ${1683 / height * 100}%`,
    backgroundPosition: `${x / (935 - width) * 100}% ${y / (1683 - height) * 100}%`,
  };
  return <div role="img" aria-label={label} className={`reference-art ${className}`} style={style} />;
}
