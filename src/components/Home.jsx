

import { Link } from "react-router-dom";

export default function Component() {
  return (
    <div className="flex flex-col h-auto w-full overflow-x-hidden">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <img
                  src="https://via.placeholder.com/150"
                  width="440"
                  height="440"
                  alt="Ebook Hero"
                  className="mx-auto mt-[-5%] aspect-square overflow-hidden rounded-xl object-cover"
                />
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="space-y-2">
                  <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    Discover Your Next Great Read
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                    Explore our vast collection of ebooks across a wide range of genres. Find your next captivating read
                    today.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Browse Ebooks
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-[90%] m-auto py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Featured Ebooks</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Top Picks</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl">
                  Discover our curated selection of must-read ebooks across various genres.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="bg-gray-50 py-4 border rounded-md">
              <img
                    src="https://via.placeholder.com/150"
                    width="200"
                    height="350"
                    alt="Ebook Cover 3"
                    className="mx-auto aspect-[3/4] overflow-hidden rounded-lg object-cover"
                  />
                  <div className="mt-4 space-y-1 px-4">
                    <h3 className="text-lg font-bold">The Vanishing Half</h3>
                    <p className="text-sm text-gray-500">
                      A powerful story about identity, family, and the lasting impact of the past.
                    </p>
                  </div>
              </div>
              <div className="bg-gray-50 py-4 border rounded-md">
              <img
                    src="https://via.placeholder.com/150"
                   width="200"
                    height="350"
                    alt="Ebook Cover 3"
                    className="mx-auto aspect-[3/4] overflow-hidden rounded-lg object-cover"
                  />
                  <div className="mt-4 space-y-1 px-4">
                    <h3 className="text-lg font-bold">The Vanishing Half</h3>
                    <p className="text-sm text-gray-500">
                      A powerful story about identity, family, and the lasting impact of the past.
                    </p>
                  </div>
              </div>
              <div className="bg-gray-50 py-4 border rounded-md">
              <img
                    src="https://via.placeholder.com/150"
                   width="200"
                    height="350"
                    alt="Ebook Cover 3"
                    className="mx-auto aspect-[3/4] overflow-hidden rounded-lg object-cover"
                  />
                  <div className="mt-4 space-y-1 px-4">
                    <h3 className="text-lg font-bold">The Vanishing Half</h3>
                    <p className="text-sm text-gray-500">
                      A powerful story about identity, family, and the lasting impact of the past.
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full m-auto py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container w-[90%] m-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Discover Your Next Great Read</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
                Browse our extensive collection of ebooks across a wide range of genres and find your perfect read.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <input type="email" placeholder="Enter your email" className="max-w-lg py-3 px-2 flex-1 rounded-md border" />
                <button type="submit" className="py-3 px-5 bg-black text-white rounded-md">Subscribe</button>
              </form>
              <p className="text-xs text-gray-500">
                Sign up for our newsletter to stay up-to-date on new ebook releases and special offers.{" "}
                <Link href="#" className="underline underline-offset-2" prefetch={false}>
                  Terms &amp; Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section className="w-[90%] m-auto py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Customer Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Readers Say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl">
                  Hear from our satisfied customers about their experiences with our ebook platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col  justify-center py-5 px-6 rounded-md border">
              <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://via.placeholder.com/150"
                          width="48"
                          height="48"
                          alt="Avatar 1"
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="text-lg font-bold">Jane Doe</h4>
                          <p className="text-sm text-gray-500">Avid Reader</p>
                        </div>
                      </div>
                      <p className="text-gray-500">
                        "I've been using this ebook platform for years and it's been a game-changer. The selection is
                        fantastic and the prices are unbeatable."
                      </p>
                    </div>
              </div>
              <div className="flex flex-col justify-center py-5 px-6 rounded-md border">
              <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://via.placeholder.com/150"
                          width="48"
                          height="48"
                          alt="Avatar 2"
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="text-lg font-bold">John Smith</h4>
                          <p className="text-sm text-gray-500">Book Enthusiast</p>
                        </div>
                      </div>
                      <p className="text-gray-500">
                        "This platform has transformed the way I read books. The variety of genres and the user-friendly
                        interface make it my go-to for finding new reads."
                      </p>
               </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="px-4 py-6 lg:px-6 bg-gray-100 border-t-[1px] border-gray-300">
        <div className="flex items-center max-[700px]:flex-col justify-between">
         {/* <div>
         <h1 className='text-xl font-semibold uppercase'>
        Selfbook<span className='text-blue-600 font-bold'>.in</span>
      </h1>
         </div> */}
          <p className="text-xs text-gray-500">© 2023 Ebook Store. All rights reserved.</p>
          <nav className="flex gap-4 text-xs">
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
