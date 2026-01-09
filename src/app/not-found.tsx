import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl md:text-8xl font-medium mb-6">403.5</h1>
      <h2 className="text-2xl md:text-3xl font-medium mb-4">Page Under Construction</h2>
      <p className="text-gray-600 max-w-md mb-8">
        The page you are looking for is been worked on. I've got less time actually.
      </p>
      <Link
        href="/"
        className="
          ml-2
          px-4 py-2
          text-sm font-bold
          bg-black text-white
          transition-all duration-300 ease-out
          hover:bg-transparent hover:text-black
        "
      >
        Return Home
      </Link>
    </div>
  );
}