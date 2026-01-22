interface CoverImageProps {
  src: string;
  alt: string;
}

export default function CoverImage({ src, alt }: CoverImageProps) {
  return (
    <div className="w-screen h-screen absolute">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover absolute z-[-1] opacity-90"
      />
    </div>
  );
}
