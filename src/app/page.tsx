'use client';

import Image from "next/image";

const basePath = '/taprobane-detailing-website';

const services = [
  {
    name: "Full Detail Package",
    description: "Complete interior & exterior transformation",
    icon: "✨",
  },
  {
    name: "Interior Deep Clean",
    description: "Thorough cleaning, shampooing & conditioning",
    icon: "🪑",
  },
  {
    name: "Exterior Polish & Wax",
    description: "Restore shine and protect your paint",
    icon: "🚗",
  },
  {
    name: "Headlight Restoration",
    description: "From foggy to crystal clear",
    icon: "💡",
  },
  {
    name: "Ceramic Coating",
    description: "Long-lasting protection & shine",
    icon: "🛡️",
  },
  {
    name: "Paint Correction",
    description: "Remove swirls, scratches & imperfections",
    icon: "🎨",
  },
];

const reviews = [
  {
    text: "I've had my car detailed once before and thought I was impressed... after coming here I realize they deserve negative stars. The difference is INSANE. Highly recommend!",
    author: "Kendrah E.",
    rating: 5,
  },
  {
    text: "Visited this amazing detailing shop and wow! The difference in my headlights is insane! From foggy to crystal clear! Highly recommended for anyone wanting a professional result!",
    author: "Treshan W.",
    rating: 5,
  },
  {
    text: "10/10 experience from start to finish! The attention to detail and care they put into my car truly shows. It looks brand new again. The results completely exceeded my expectations.",
    author: "Alyanna I.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white min-h-[600px] md:min-h-[700px]">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src={`${basePath}/hero.png`}
            alt="Premium Auto Detailing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <span>⭐</span>
                <span>5.0 Rating on Google • 15+ Reviews</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                Mississauga&apos;s 5-Star{" "}
                <span className="text-blue-400">Auto Detailing</span> Experts
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-xl drop-shadow">
                Where every detail matters. Professional-grade detailing that transforms your vehicle inside and out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:+16479174643"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  (647) 917-4643
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg border border-white/20"
                >
                  View Services
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <Image
                  src={`${basePath}/logo.png`}
                  alt="Taprobane Detailing Logo"
                  fill
                  className="object-contain rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Taprobane Detailing
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
            At Taprobane Detailing, we don&apos;t just clean cars—we transform them. Our team of passionate detailing experts brings years of experience and an obsessive attention to detail to every vehicle. Whether you need a quick refresh or a complete restoration, we&apos;ll make your car look better than the day you bought it. With a perfect 5-star Google rating and dozens of thrilled customers, we&apos;ve earned our reputation as Mississauga&apos;s go-to detailing destination.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Professional detailing services for every need
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-1 text-yellow-400 text-2xl">
              {"★".repeat(5)}
            </div>
            <p className="text-blue-200 mt-2">5.0 average from Google Reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              >
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {"★".repeat(review.rating)}
                </div>
                <p className="text-gray-200 mb-6 italic">&ldquo;{review.text}&rdquo;</p>
                <p className="text-white font-semibold">— {review.author}</p>
                <p className="text-blue-300 text-sm">Google Review</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Ready to transform your vehicle? Contact us today!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                  <a href="tel:+16479174643" className="text-blue-600 dark:text-blue-400 hover:underline text-lg">
                    (647) 917-4643
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    2576 Haines Rd UNIT C<br />
                    Mississauga, ON L4Y 1Y6
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Hours</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Mon–Sat: 9:00 AM – 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Instagram</h3>
                  <a href="https://instagram.com/taprobanedetailing" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    @taprobanedetailing
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.5!2d-79.59!3d43.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3860a3c8e00d%3A0x5e7a0d14d36c1b5a!2s2576%20Haines%20Rd%20Unit%20C%2C%20Mississauga%2C%20ON!5e0!3m2!1sen!2sca!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Book your appointment today and experience the Taprobane difference.
          </p>
          <a
            href="tel:+16479174643"
            className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call (647) 917-4643
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={`${basePath}/logo.png`}
                alt="Taprobane Detailing"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-white font-semibold">Taprobane Detailing</span>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} Taprobane Detailing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
