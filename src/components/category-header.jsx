import Image from "next/image";

export default function CategoryHeader({ title, src }) {
  return (
    <div className="relative h-[200px] md:h-[300px] bg-gradient-to-r from-primary/90 to-primary overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50" />
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob" />
              <div className="absolute top-0 right-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000" />
              <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-4000" />
            </div>
          </div>
        </div>

        {/* Floating SVGs */}
        {/* <FloatingSvgs
          count={15}
          minSize={20}
          maxSize={50}
          color="rgba(255, 255, 255, 0.2)"
        /> */}
        <Image
          src={src}
          alt="Category"
          fill
          className="object-cover opacity-55"
          priority
        />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
          {title}
        </h1>
      </div>
    </div>
  );
}
