import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full bg-white py-2 px-4 flex justify-between items-center text-sm md:text-base">
      <div className="hidden md:block"></div> {/* Empty div for spacing */}
      <div className="flex justify-between w-full md:w-auto md:gap-8">
        <div className="flex items-center">
          <span className="hidden md:inline">Call us Tollfree: </span>
          <Link
            href="https://wa.me/+919310392802?text=Hello%20there!"
            className="text-green-600 hover:underline px-2"
          >
            +91 9310392802
          </Link>
        </div>
        <div className="flex items-center">
          <span className="hidden md:inline">Email: </span>
          <Link
            href="mailto:hello@settlemitra.com"
            className="text-green-600 hover:underline px-2"
          >
            hello@settlemitra.com
          </Link>
        </div>
      </div>
    </div>
  );
}
