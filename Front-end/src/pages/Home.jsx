import { Link } from "react-router-dom";

export default function Component() {
  return (
    <div className="flex flex-col h-auto w-full px-5 md:px-[9%] overflow-x-hidden">
      <main className="flex-1">
       {/* Hero Section */}
       <section className="w-full text-black h-[65vh] pt-16 flex items-center justify-center">
  <div className="px-4 md:px-6 space-y-8 md:space-y-10 xl:space-y-16 max-w-[800px] mx-auto text-start md:text-center">
    {/* Hero Text */}
    <div className="space-y-4 md:space-y-6">
      <h1 className="text-[28px] sm:text-[34px] md:text-[40px] xl:text-[48px] font-extrabold leading-tight tracking-tight">
        Unlock a World of Knowledge
      </h1>
      <p className="max-w-[600px] mx-auto font-mono text-black/80 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed">
        Explore our vast collection of ebooks. Whether you're into thrilling mysteries, heartfelt romances, or insightful non-fiction, there's something for everyone.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center pt-4 space-y-4 sm:space-y-0 sm:space-x-4">
        <Link
          to="/e-books"
          className="inline-block px-8 py-3 bg-black text-gray-300 hover:text-gray-900 text-[14px] sm:text-[15px] font-semibold rounded-full shadow-lg hover:bg-gray-300 transition duration-300 ease-in-out text-center"
        >
          Browse Ebooks
        </Link>
        <Link
          to="/about"
          className="inline-block px-8 py-3 border border-white text-black/90 text-[14px] sm:text-[15px] font-semibold rounded-full bg-gray-300 hover:text-indigo-700 transition duration-300 ease-in-out text-center"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
     </section>




       {/* Featured Ebooks Section */}
<section className="w-[90%] mx-auto py-16  md:py-28 ">
  <div className="space-y-12 px-4 md:px-6 text-center">
    
    {/* Section Heading */}
    <div className="space-y-4">
      <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm text-indigo-600 font-semibold">
        Featured Ebooks
      </span>
      <h2 className="text-[28px] font-bold sm:text-[36px] md:text-[42px] text-gray-900">
        Explore Our Top Picks
      </h2>
      <p className="max-w-[800px] mx-auto text-gray-600 text-[16px] md:text-[18px]">
        Discover our curated selection of must-read ebooks across various genres.
      </p>
    </div>

    {/* Ebook Cards */}
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-stretch justify-items-center">
      {/* Book Card */}
      <div className="bg-white rounded-lg shadow-lg transition-transform hover:scale-105 duration-300 ease-in-out w-full max-w-xs">
        <img
          src="https://via.placeholder.com/150"
          alt="Ebook Cover"
          className="rounded-t-lg object-cover w-full aspect-[3/4]"
        />
        <div className="p-6 space-y-3">
          <h3 className="text-[18px] font-semibold text-gray-800">The Vanishing Half</h3>
          <p className="text-[14px] text-gray-500">
            A powerful story about identity, family, and the lasting impact of the past.
          </p>
        </div>
      </div>

      {/* Book Card 2 */}
      <div className="bg-white rounded-lg shadow-lg transition-transform hover:scale-105 duration-300 ease-in-out w-full max-w-xs">
        <img
          src="https://via.placeholder.com/150"
          alt="Ebook Cover"
          className="rounded-t-lg object-cover w-full aspect-[3/4]"
        />
        <div className="p-6 space-y-3">
          <h3 className="text-[18px] font-semibold text-gray-800">Ebook Title</h3>
          <p className="text-[14px] text-gray-500">
            Short description about the ebook goes here.
          </p>
        </div>
      </div>

      {/* Book Card 3 */}
      <div className="bg-white rounded-lg shadow-lg transition-transform hover:scale-105 duration-300 ease-in-out w-full max-w-xs">
        <img
          src="https://via.placeholder.com/150"
          alt="Ebook Cover"
          className="rounded-t-lg object-cover w-full aspect-[3/4]"
        />
        <div className="p-6 space-y-3">
          <h3 className="text-[18px] font-semibold text-gray-800">Ebook Title</h3>
          <p className="text-[14px] text-gray-500">
            Another compelling description of an ebook.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Social Proof Section */}
<section className="w-full py-12 md:py-24 bg-gray-600 text-white">
  <div className="max-w-5xl mx-auto text-center space-y-8 px-6">
    <h2 className="text-[28px] font-bold sm:text-[36px] md:text-[42px]">Trusted by Millions</h2>
    <p className="max-w-3xl mx-auto text-[16px] md:text-[18px] text-indigo-200">
      Join over 5 million readers who trust our platform for their favorite reads.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
      <div>
        <h3 className="text-[32px] font-bold">5M+</h3>
        <p className="text-[16px] text-indigo-200">Happy Readers</p>
      </div>
      <div>
        <h3 className="text-[32px] font-bold">100k+</h3>
        <p className="text-[16px] text-indigo-200">Ebooks Available</p>
      </div>
      <div>
        <h3 className="text-[32px] font-bold">50+</h3>
        <p className="text-[16px] text-indigo-200">Genres</p>
      </div>
    </div>
  </div>
</section>


{/* Testimonials Section */}
<section className="w-[90%] mx-auto py-12 md:py-24 bg-gray-50">
  <div className="space-y-12 text-center">
    
    {/* Section Heading */}
    <div className="space-y-4">
      <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm text-indigo-600 font-semibold">
        Customer Testimonials
      </span>
      <h2 className="text-[28px] font-bold sm:text-[36px] md:text-[42px] text-gray-900">
        What Our Readers Say
      </h2>
      <p className="max-w-[800px] mx-auto text-gray-600 text-[16px] md:text-[18px]">
        Hear from our satisfied customers about their experiences with our ebook platform.
      </p>
    </div>

    {/* Testimonial Cards */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch justify-items-center max-w-5xl mx-auto">
      {/* Testimonial Card 1 */}
      <div className="flex flex-col items-start p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out w-full max-w-xs">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Avatar"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <h4 className="text-[16px] font-semibold text-gray-800">Jane Doe</h4>
            <p className="text-[14px] text-gray-500">Avid Reader</p>
          </div>
        </div>
        <p className="mt-4 text-[15px] text-gray-600">
          "I've been using this ebook platform for years and it's been a game-changer. The selection is fantastic and the prices are unbeatable."
        </p>
      </div>

      {/* Testimonial Card 2 */}
      <div className="flex flex-col items-start p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out w-full max-w-xs">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Avatar"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <h4 className="text-[16px] font-semibold text-gray-800">John Smith</h4>
            <p className="text-[14px] text-gray-500">Book Enthusiast</p>
          </div>
        </div>
        <p className="mt-4 text-[15px] text-gray-600">
          "This platform has transformed the way I read books. The variety of genres and the user-friendly interface make it my go-to for finding new reads."
        </p>
      </div>

      {/* Testimonial Card 3 */}
      <div className="flex flex-col items-start p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out w-full max-w-xs">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Avatar"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <h4 className="text-[16px] font-semibold text-gray-800">Emily Johnson</h4>
            <p className="text-[14px] text-gray-500">Literature Lover</p>
          </div>
        </div>
        <p className="mt-4 text-[15px] text-gray-600">
          "I love the selection of ebooks here. Whether I want to read something new or revisit classics, I can find everything in one place."
        </p>
      </div>
    </div>
  </div>
</section>

{/* Featured Authors Section */}
{/* <section className="w-[90%] mx-auto py-12 md:py-24">
  <div className="text-center space-y-6">
    <h2 className="text-[28px] font-bold sm:text-[36px] md:text-[42px]">
      Meet Our Featured Authors
    </h2>
    <p className="max-w-[800px] mx-auto text-gray-500 text-[16px] md:text-[18px]">
      Get to know the brilliant minds behind your favorite ebooks.
    </p>
  </div>

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto items-stretch justify-items-center">
   
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300 ease-in-out">
      <img
        src="https://via.placeholder.com/150"
        alt="Author Avatar"
        className="h-24 w-24 rounded-full object-cover mb-4"
      />
      <h3 className="text-[18px] font-semibold">Author Name</h3>
      <p className="text-[14px] text-gray-500">Genre Expert</p>
      <p className="mt-4 text-[15px] text-gray-600">
        "Author description or quote about their writing style."
      </p>
    </div>

  </div>
</section> */}

{/* CTA Section */}
<section className="w-full bg-gray-600  py-12 md:py-24 text-white">
  <div className="max-w-4xl mx-auto text-center space-y-6 px-6">
    <h2 className="text-[28px] font-bold sm:text-[36px] md:text-[42px]">
      Join Our Reading Community
    </h2>
    <p className="max-w-2xl mx-auto text-[16px] md:text-[18px] text-white/80 leading-relaxed">
      Become a part of a vibrant community of readers and get access to exclusive deals, early releases, and much more. Sign up today!
    </p>
    <Link
      to="/register"
      className="inline-block px-8 py-3 bg-white text-gray-800 font-semibold rounded-full shadow-lg hover:bg-gray-300 hover:text-gray-800 transition duration-300"
    >
      Get Started
    </Link>
  </div>
</section>



      </main>
    </div>
  );
}
