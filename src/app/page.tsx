import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", darkMode);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
            fill="none"
            className="w-24 h-24"
            role="img"
            aria-label="Bini.js logo"
          >
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#00CFFF" />
                <stop offset="100%" stopColor="#0077FF" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontFamily="Segoe UI, Arial, sans-serif"
              fontSize="90"
              fontWeight="700"
              fill="url(#grad)"
            >
              ß
            </text>
          </svg>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-slate-100 mb-4">
            Build Better with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Bini.js
            </span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            A modern JavaScript framework designed for simplicity and performance.
            Start building stunning applications in seconds.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: "⚡", title: "Fast", desc: "Lightning quick performance" },
            { icon: "📦", title: "Lightweight", desc: "Minimal dependencies" },
            { icon: "🎨", title: "Modern", desc: "Latest web standards" },
            { icon: "🚀", title: "Easy", desc: "Simple to get started" }
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-slate-700"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-slate-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 text-center mb-8 border border-gray-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 dark:text-slate-300 mb-6 text-lg">
            Explore the possibilities with Bini.js and build faster than ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/Binidu01/bini-examples"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105 inline-block"
            >
              View Examples
            </a>
            <a
              href="https://bini.js.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-gray-900 dark:border-slate-100 text-gray-900 dark:text-slate-100 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors inline-block"
            >
              Documentation
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-600 dark:text-slate-400">
          <p>
            Get started by exploring the{" "}
            <a
              href="https://7jhv5n-3000.csb.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium underline"
            >
              learning center
            </a>
            {" "}or install via{" "}
            <a
              href="https://www.npmjs.com/package/create-bini-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium underline"
            >
              npm
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}