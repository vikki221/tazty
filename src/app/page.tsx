import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
  className="relative bg-cover bg-center"
  style={{ backgroundImage: "url('/images/bg2.jpeg')" }}
>
  {/* Overlay to reduce image brightness */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Existing content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold white mb-6">
          Welcome to <span className="text-tazty">Tazty</span>
        </h1>
        <p className="text-xl md:text-2xl white mb-12 max-w-3xl">
          Your favorite food, delivered fast & fresh
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
          <button className="bg-tazty text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-tazty/90 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Download on App Store
          </button>
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get it on Google Play
          </button>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
        <img
          src="/hero.png"
          alt="Tazty Food Delivery Illustration"
          className="w-full max-w-lg h-auto"
        />
      </div>
    </div>
  </div>
</section>


      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get your favorite food in just three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-tazty/20 to-tazty/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                <svg className="w-10 h-10 text-tazty" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-tazty transition-colors duration-200">Search</h3>
              <p className="text-gray-600">
                Browse through thousands of restaurants and cuisines to find your perfect meal
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-500 transition-colors duration-200">Order</h3>
              <p className="text-gray-600">
                Add items to your cart and place your order with secure payment options
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-purple-500 transition-colors duration-200">Track</h3>
              <p className="text-gray-600">
                Follow your order in real-time and get notified when it arrives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See Tazty in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience our intuitive interface designed for seamless food ordering
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="h-64 rounded-lg mb-6 flex items-center justify-center">
                <img 
                  src="/app-mockup.svg" 
                  alt="Restaurant List Screen" 
                  className="w-32 h-64 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Browse Restaurants</h3>
              <p className="text-gray-600">Discover local favorites and new cuisines</p>
        </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="h-64 rounded-lg mb-6 flex items-center justify-center">
                <img 
                  src="/app-mockup.svg" 
                  alt="Menu Screen" 
                  className="w-32 h-64 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Your Meal</h3>
              <p className="text-gray-600">Customize your order with detailed menu options</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="h-64 rounded-lg mb-6 flex items-center justify-center">
                <img 
                  src="/app-mockup.svg" 
                  alt="Tracking Screen" 
                  className="w-32 h-64 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Track Delivery</h3>
              <p className="text-gray-600">Real-time updates on your order status</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Tazty for their food delivery needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-tazty/5 to-tazty/10 rounded-2xl p-8 border border-tazty/20">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "Tazty has completely changed how I order food. The delivery is always fast and the food arrives fresh and hot!"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-tazty rounded-full flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                    <p className="text-gray-500">Food Enthusiast</p>
                  </div>
                </div>
                <img src="/food-items.svg" alt="Food items" className="w-16 h-12 opacity-60" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "The app is so easy to use and the variety of restaurants is amazing. I can always find something new to try!"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Mike Chen</h4>
                    <p className="text-gray-500">Regular Customer</p>
                  </div>
                </div>
                <img src="/food-items.svg" alt="Food items" className="w-16 h-12 opacity-60" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "Excellent customer service and the tracking feature is fantastic. I always know exactly when my food will arrive."
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    E
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Emily Rodriguez</h4>
                    <p className="text-gray-500">Loyal User</p>
                  </div>
                </div>
                <img src="/food-items.svg" alt="Food items" className="w-16 h-12 opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-tazty">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Download Tazty Now
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied customers and experience the future of food delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-tazty px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Download on App Store
            </button>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get it on Google Play
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
