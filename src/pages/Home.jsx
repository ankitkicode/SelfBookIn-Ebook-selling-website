import { Link } from "react-router-dom";

export default function Component() {
  return (
    <div className="flex flex-col h-auto w-full px-5 md:px-[9%] overflow-x-hidden">
      <main className="flex-1">
       {/* Hero Section */}
       <section className="w-full pt-5 md:pt-7 bg-white">
  <div className="px-4 md:px-6 space-y-10 xl:space-y-16 max-w-[1300px] mx-auto">
    <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-16 items-center">
      {/* Hero Text */}
      <div className="space-y-4">
        <h1 className="text-[28px] font-semibold leading-tight sm:text-[32px] md:text-[36px] xl:text-[42px] text-gray-800">
          Discover Your Next Great Read
        </h1>
        <p className="max-w-[700px] text-gray-600 text-[16px] md:text-[18px]">
Explore our extensive collection of ebooks across various genres. Whether you seek a thrilling mystery, a heartfelt romance, or an insightful non-fiction, find your next captivating read today </p>   <Link
          to="/e-books"
          className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-[15px] font-medium hover:bg-gray-700 transition duration-300"
        >
          Browse Ebooks
        </Link>
      </div>
      
      {/* Hero Image */}
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGsQc0J0fZlsIDHsHkNiyiTcbDEd2rONUBug&s"
          alt="Ebook Hero"
          className="rounded-xl object-cover shadow-lg w-full h-full"
        />
      </div>
    </div>
  </div>
</section>



        {/* Featured Ebooks Section */}
        <section className="w-[90%] mx-auto py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary-light px-3 py-1 text-sm text-primary">
                  Featured Ebooks
                </div>
                <h2 className="text-[28px] font-semibold sm:text-[36px] md:text-[42px]">
                  Explore Our Top Picks
                </h2>
                <p className="max-w-[900px] text-gray-500 text-[16px] md:text-[18px]">
                  Discover our curated selection of must-read ebooks across various genres.
                </p>
              </div>
            </div>

            {/* Ebook Cards */}
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              {/* Book Card */}
              <div className="bg-white py-4 border rounded-lg shadow hover:shadow-md transition duration-300">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Ebook Cover"
                  className="mx-auto aspect-[3/4] overflow-hidden rounded-lg object-cover"
                />
                <div className="mt-4 space-y-1 px-4">
                  <h3 className="text-[18px] font-medium">The Vanishing Half</h3>
                  <p className="text-[14px] text-gray-500">
                    A powerful story about identity, family, and the lasting impact of the past.
                  </p>
                </div>
              </div>

              {/* Repeat similar cards with different content */}
              <div className="bg-white py-4 border rounded-lg shadow hover:shadow-md transition duration-300">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Ebook Cover"
                  className="mx-auto aspect-[3/4] overflow-hidden rounded-lg object-cover"
                />
                <div className="mt-4 space-y-1 px-4">
                  <h3 className="text-[18px] font-medium">Ebook Title</h3>
                  <p className="text-[14px] text-gray-500">
                    Short description about the ebook goes here.
                  </p>
                </div>
              </div>

              <div className="bg-white py-4 border rounded-lg shadow hover:shadow-md transition duration-300">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Ebook Cover"
                  className="mx-auto aspect-[3/4] overflow-hidden rounded-lg object-cover"
                />
                <div className="mt-4 space-y-1 px-4">
                  <h3 className="text-[18px] font-medium">Ebook Title</h3>
                  <p className="text-[14px] text-gray-500">
                    Another compelling description of an ebook.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container w-[90%] mx-auto text-center space-y-6">
            <h2 className="text-[28px] font-semibold md:text-[36px]">
              Discover Your Next Great Read
            </h2>
            <p className="max-w-[600px] mx-auto text-gray-500 text-[16px] md:text-[18px]">
              Browse our extensive collection of ebooks across a wide range of genres and find your perfect read.
            </p>
            <form className="mx-auto flex gap-2 max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-3 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <button
                type="submit"
                className="py-3 px-6 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500">
              Sign up for our newsletter to stay up-to-date on new ebook releases and special offers.{" "}
              <Link
                to="#"
                className="underline underline-offset-2 text-primary"
              >
                Terms &amp; Conditions
              </Link>
            </p>
          </div>
        </section> */}

        {/* Testimonials Section */}
        <section className="w-[90%] mx-auto py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 text-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary-light px-3 py-1 text-sm text-primary">
                Customer Testimonials
              </div>
              <h2 className="text-[28px] font-semibold sm:text-[36px] md:text-[42px]">
                What Our Readers Say
              </h2>
              <p className="max-w-[900px] mx-auto text-gray-500 text-[16px] md:text-[18px]">
                Hear from our satisfied customers about their experiences with our ebook platform.
              </p>
            </div>

            {/* Testimonial Cards */}
            <div className="grid max-w-5xl gap-8 mx-auto lg:grid-cols-2">
              {/* Testimonial Card */}
              <div className="flex flex-col items-start py-6 px-6 rounded-md border shadow-lg space-y-4 bg-white">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Avatar"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-[16px] font-semibold">Jane Doe</h4>
                    <p className="text-[14px] text-gray-500">Avid Reader</p>
                  </div>
                </div>
                <p className="text-[15px] text-gray-500">
                  "I've been using this ebook platform for years and it's been a game-changer. The selection is fantastic
                  and the prices are unbeatable."
                </p>
              </div>

              {/* Repeat similar testimonial cards */}
              <div className="flex flex-col items-start py-6 px-6 rounded-md border shadow-lg space-y-4 bg-white">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Avatar"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-[16px] font-semibold">John Smith</h4>
                    <p className="text-[14px] text-gray-500">Book Enthusiast</p>
                  </div>
                </div>
                <p className="text-[15px] text-gray-500">
                  "This platform has transformed the way I read books. The variety of genres and the user-friendly
                  interface make it my go-to for finding new reads"
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
