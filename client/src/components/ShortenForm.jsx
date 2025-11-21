import React, { useEffect, useState } from "react";
import { Loader2, Link2, Copy } from "lucide-react";
import axios from "axios";

const ShortenForm = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState(null);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('urlHistory')) || [];
    setHistory(stored);
  }, []);

  const addToHistory = (original, short) => {
    const newHistory = [{ original, short, date: new Date().toLocaleString() }, ...history];
    setHistory(newHistory);
    localStorage.setItem('urlHistory', JSON.stringify(newHistory));
  };


  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000); // 2 seconds baad popup band ho jayega
    } catch (err) {
      alert("Copy failed!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    

    try {
      const { data } = await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)
      setShortUrl(data)
      addToHistory(url, data)
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false);
    }

  };

  return (
    <div className="w-full flex justify-center mt-10 px-4">

      <div className="
          w-full max-w-2xl p-10 rounded-3xl 
          bg-[#111]/70 backdrop-blur-xl 
          border border-gray-700/50 
          shadow-[0_0_40px_rgba(0,0,0,0.6)] 
          hover:shadow-[0_0_60px_rgba(0,0,80,0.4)]
          transition-all duration-300
      ">

        {/* Title */}
        <h2 className="text-3xl font-bold mb-7 text-white flex items-center gap-3">
          <span className="p-2 rounded-xl bg-blue-600/20 border border-blue-600/40">
            <Link2 size={24} className="text-blue-500" />
          </span>
          Shorten Your Link
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Paste your long URL here..."
            className="
              bg-[#1a1a1a] px-5 py-4 rounded-xl 
              text-gray-300 placeholder-gray-500 
              focus:outline-none focus:ring-2 focus:ring-blue-600 
              border border-gray-700/70 shadow-inner
            "
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading || !url.trim()}
            className="
              bg-blue-600 hover:bg-blue-700 
              py-3 rounded-xl font-semibold 
              transition disabled:bg-gray-600 
              flex justify-center items-center gap-2
            "
          >
            {loading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Shortening...
              </>
            ) : (
              "Shorten URL"
            )}
          </button>
        </form>

        {/* Result */}
        {shortUrl && (
          <div className="
            mt-8 p-6 rounded-xl 
            bg-[#1a1a1a]/80 border border-gray-700 
            shadow-[0_0_20px_rgba(0,0,0,0.4)]
            animate-fadeIn
          ">
            <p className="text-gray-400 text-sm mb-1">Your Short URL:</p>

            <div className="
  mt-8 p-5 sm:p-6 rounded-xl 
  bg-[#1a1a1a]/80 border border-gray-700 
  shadow-[0_0_20px_rgba(0,0,0,0.4)]
">
              <p className="text-gray-400 text-sm mb-1">Your Short URL:</p>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <span className="text-blue-400 font-bold text-lg break-all">
                  {shortUrl}
                </span>

                <button
                  onClick={copyToClipboard}
                  className="w-full sm:w-auto px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 font-medium flex items-center justify-center gap-1"
                >
                  <Copy size={18} /> Copy
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      {copied && (
        <div className="
    fixed bottom-5 left-1/2 -translate-x-1/2 
    bg-green-600 text-white px-6 py-3 
    rounded-xl shadow-lg 
    animate-fadeInOut
  ">
          Copied to Clipboard! ✔
        </div>
      )}
    </div>
  );
};

export default ShortenForm;
