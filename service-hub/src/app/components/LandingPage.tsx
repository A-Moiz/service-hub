"use client";

import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-12 py-16 gap-20 text-center sm:text-left font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center gap-6 max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Welcome to <span className="text-blue-600">Service Hub</span>
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl">
          Create your own personal service page — showcase your tutoring,
          freelance work, or affiliate links. No code, no stress.
        </p>
        <div className="flex gap-4 mt-4 flex-wrap justify-center">
          <a
            href="#"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm sm:text-base hover:bg-blue-700 transition"
          >
            Create Your Page
          </a>
          <a
            href="#features"
            className="border border-gray-300 px-6 py-3 rounded-full text-sm sm:text-base transition
             text-black hover:bg-gray-100
             dark:text-white dark:hover:bg-gray-800"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="max-w-4xl w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          How It Works
        </h2>
        <div className="grid sm:grid-cols-3 gap-8 text-gray-700 text-sm sm:text-base">
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/icon-profile.svg"
              alt="Profile"
              width={40}
              height={40}
            />
            <p>
              <strong>1. Set Up</strong>
              <br />
              Create your profile and add your services or links.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/icon-customize.svg"
              alt="Customize"
              width={40}
              height={40}
            />
            <p>
              <strong>2. Customize</strong>
              <br />
              Choose a design, rearrange your offerings.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src="/icon-share.svg" alt="Share" width={40} height={40} />
            <p>
              <strong>3. Share</strong>
              <br />
              Send your link, get clients or clicks.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-4xl w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          What You Get
        </h2>
        <ul className="grid sm:grid-cols-2 gap-6 text-left text-gray-700 list-disc list-inside">
          <li>Link multiple services and affiliate products</li>
          <li>Customizable themes and page layout</li>
          <li>Built-in analytics and link tracking</li>
          <li>Optional messaging and bookings</li>
          <li>Mobile-first personal profile experience</li>
          <li>Fast, simple setup — no website needed</li>
        </ul>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="max-w-4xl w-full text-center">
        <h2 className="text-2xl font-semibold mb-6">Who Is It For?</h2>
        <p className="text-gray-600 mb-6">
          Service Hub is perfect for anyone who wants to promote what they do:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 text-gray-700 text-sm sm:text-base">
          <p>🎓 Students offering GCSE or A-Level tutoring</p>
          <p>🎨 Designers and developers freelancing part-time</p>
          <p>📣 Creators promoting affiliate links or digital goods</p>
          <p>🧠 Mentors and coaches offering 1:1 support</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-3xl text-center flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">
          Start Building Your Service Page Today
        </h2>
        <p className="text-gray-600">
          It’s free to get started, and only takes a few minutes.
        </p>
        <a
          href="#"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Create Your Page
        </a>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-sm text-gray-500 flex gap-4 flex-wrap justify-center border-t pt-6 w-full max-w-4xl">
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Privacy
        </a>
        <a href="#" className="hover:underline">
          Terms
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </footer>
    </div>
  );
}
