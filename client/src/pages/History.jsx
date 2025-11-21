import React, { useState, useEffect } from 'react';

const History = () => {
  const [history, setHistory] = useState([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('urlHistory')) || [];
    setHistory(stored);
  }, []);

  const clearHistory = () => {
    localStorage.removeItem('urlHistory');
    setHistory([]);
  };

  const copyToClipboard = async (shortUrl) => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('Copy failed!');
    }
  };

  return (
    <div className="w-full min-h-screen px-4 py-14 bg-[#0d0d0d] text-gray-300 flex justify-center">
      <div className="w-full max-w-3xl p-8 sm:p-12 rounded-3xl bg-[#111]/70 backdrop-blur-xl border border-gray-700/50 shadow-[0_0_40px_rgba(0,0,0,0.6)] transition-all hover:shadow-[0_0_60px_rgba(0,0,80,0.4)]">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
          URL <span className="text-blue-500">History</span>
        </h1>

        {history.length === 0 ? (
          <p className="text-gray-400 text-center">No URLs shortened yet.</p>
        ) : (
          <>
            <div className="space-y-4">
              {history.map((item, index) => (
                <div key={index} className="p-4 rounded-xl bg-[#1a1a1a]/80 border border-gray-700 flex flex-col sm:flex-row flex-wrap justify-between items-start sm:items-center gap-2 w-full">
                  <div className="break-words w-full sm:w-auto">
                    <p className="text-gray-400 text-sm">Original URL:</p>
                    <a href={item.original} target="_blank" rel="noreferrer" className="text-blue-400 font-medium hover:underline break-words max-w-full">
                      {item.original}
                    </a>

                    <p className="text-gray-400 text-sm mt-1">Short URL:</p>
                    <div className="flex flex-wrap items-center gap-2">
                      <a href={item.short} target="_blank" rel="noreferrer" className="text-blue-500 font-bold hover:underline break-words max-w-full">
                        {item.short}
                      </a>
                      <button onClick={() => copyToClipboard(item.short)} className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700 text-white text-sm">
                        Copy
                      </button>
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm mt-2 sm:mt-0">{item.date}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button onClick={clearHistory} className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded text-white font-medium">
                Clear History
              </button>
            </div>
          </>
        )}
      </div>

      {copied && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg animate-fadeInOut">
          Copied to Clipboard! ✔
        </div>
      )}
    </div>
  );
};

export default History;