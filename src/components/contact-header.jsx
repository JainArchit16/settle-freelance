import FloatingSvgs from "./floating-svgs";

export default function ContactHeader() {
  return (
    <div
      className="relative h-[200px] md:h-[300px] bg-cover bg-center"
      // style={{ backgroundImage: "url(/contact-bg.jpg)" }}
    >
      <FloatingSvgs
        count={12}
        minSize={16}
        maxSize={36}
        minDuration={20}
        maxDuration={40}
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative container mx-auto h-full flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Contact Us
        </h1>
      </div>
    </div>
  );
}
