import React from "react";

const About = ()=> {
  return (
    <div className="w-full min-h-screen flex justify-center px-4 py-14 bg-[#0d0d0d] text-gray-300">
      <div className="w-full max-w-3xl p-8 sm:p-12 rounded-3xl bg-[#111]/70 backdrop-blur-xl border border-gray-700/50 shadow-[0_0_40px_rgba(0,0,0,0.6)] transition-all">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
          About <span className="text-blue-500">Arbaz URL Shortener</span>
        </h1>

        <p className="text-gray-400 leading-relaxed text-lg mb-6">
          Arbaz URL Shortener is a fast, secure, and modern link-shortening tool built
          with a beautiful dark UI theme. It helps you convert long, messy URLs into
          clean and shareable short links instantly.
        </p>

        <div className="space-y-5 text-gray-300">
          <div className="p-4 rounded-xl bg-[#1a1a1a]/80 border border-gray-700">
            <h2 className="text-xl font-semibold mb-2 text-blue-400">⚡ Fast Processing</h2>
            <p>
              Your links are shortened within seconds using reliable shortening APIs so
              you can share them anywhere instantly.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1a1a1a]/80 border border-gray-700">
            <h2 className="text-xl font-semibold mb-2 text-blue-400">🔒 Secure & Safe</h2>
            <p>
              No data is stored. Every link you generate is handled directly through the
              API—your privacy stays protected.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1a1a1a]/80 border border-gray-700">
            <h2 className="text-xl font-semibold mb-2 text-blue-400">📱 Fully Responsive</h2>
            <p>
              Designed to work smoothly across all devices — mobile, tablet, and desktop
              with a clean dark interface.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1a1a1a]/80 border border-gray-700">
            <h2 className="text-xl font-semibold mb-2 text-blue-400">🎨 Modern Dark Theme</h2>
            <p>
              Matches the entire app's premium dark UI with glowing shadows and smooth
              transitions.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-400 text-sm">
          Made with ❤️ by <span className="text-blue-500 font-semibold">Arbaz</span>
        </div>
      </div>
    </div>
  );
}

export default About