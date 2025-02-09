import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const FACT_CHECK_API_KEY = import.meta.env.VITE_GOOGLE_FACT_CHECK_API_KEY;

interface FactCheck {
  claim: string;
  claimant?: string;
  rating: string;
  url: string;
  publisher: string;
  date: string;
  tags: string[];
  image?: string;
}

const ExplorePage = () => {
  const [factChecks, setFactChecks] = useState<FactCheck[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFactChecks = async () => {
      try {
        const response = await fetch(
          `https://factchecktools.googleapis.com/v1alpha1/claims:search?query=all&key=${FACT_CHECK_API_KEY}`
        );
        const data = await response.json();

        if (!data.claims) {
          setError("No fact checks found.");
          setLoading(false);
          return;
        }

        const processedData = data.claims.map((claim: any) => ({
          claim: claim.text || "No claim text available",
          claimant: claim.claimant || "",
          rating: claim.claimReview?.[0]?.textualRating || "Not rated",
          url: claim.claimReview?.[0]?.url || "#",
          publisher: claim.claimReview?.[0]?.publisher?.name || "Unknown Publisher",
          date: claim.claimReview?.[0]?.reviewDate
            ? new Date(claim.claimReview[0].reviewDate).toLocaleDateString()
            : "Unknown Date",
          tags: claim.claimant ? [claim.claimant, claim.claimReview?.[0]?.publisher?.name] : [],
          image: claim.claimReview?.[0]?.urlToImage || "https://via.placeholder.com/100"
        }));

        processedData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setFactChecks(processedData);
      } catch (error) {
        console.error("Error fetching fact checks:", error);
        setError("Failed to fetch fact checks. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchFactChecks();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-40">
        {/* <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent py-20"
        >
          Latest Fact Checks
        </motion.h1> */}

        {/* Hero Section */}
        <motion.div 
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="mb-16 grid lg:grid-cols-2 gap-8 items-center bg-gray-800 rounded-2xl p-8 shadow-xl py-10"
        >
          <img 
            src="https://www.boomlive.in/h-upload/2025/02/05/1039563-samay-09.webp" 
            alt="Fact Checking" 
            className="w-full h-64 object-cover rounded-xl shadow-lg"
          />
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-400">Featured Fact Check</h2>
            <p className="text-gray-300 leading-relaxed">
            Comedian Samay Raina cracked a joke about Rekha in front of Amitabh Bachchan on Kaun Banega Crorepati.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-red-400 font-semibold">87% AI-generated content</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                <span className="text-yellow-400 font-semibold">Multiple source mismatches</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Fact Checks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && (
            Array(6).fill(0).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-48 bg-gray-800 rounded-xl animate-pulse"
              />
            ))
          )}

          {error && (
            <div className="col-span-full text-center text-red-400 py-8">
              {error}
            </div>
          )}

          {!loading && !error && factChecks.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-400">{fact.date}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      fact.rating.includes("False") ? 'bg-red-900/50 text-red-400' : 'bg-green-900/50 text-green-400'
                    }`}>
                      {fact.rating}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {fact.claimant && <span className="text-blue-400">{fact.claimant}: </span>}
                    {fact.claim}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {fact.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 border-t border-gray-700 pt-4">
                  <span className="text-sm text-gray-400">{fact.publisher}</span>
                  <a
                    href={fact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
