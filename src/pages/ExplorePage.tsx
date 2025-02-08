import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const FACT_CHECK_API_KEY = import.meta.env.VITE_GOOGLE_FACT_CHECK_API_KEY;

interface FactCheck {
  claim: string;
  claimant?: string;
  rating: string;
  url: string;
  publisher: string;
  date: string;
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
          claimant: claim.claimant || "Unknown",
          rating: claim.claimReview?.[0]?.textualRating || "Not rated",
          url: claim.claimReview?.[0]?.url || "#",
          publisher:
            claim.claimReview?.[0]?.publisher?.name || "Unknown Publisher",
          date: claim.claimReview?.[0]?.reviewDate
            ? new Date(claim.claimReview[0].reviewDate).toLocaleDateString()
            : "Unknown Date",
        }));

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

  const staticArticle = {
    image: "https://via.placeholder.com/500x300.png?text=News+Image",
    headline: "Breaking News: The Impact of Fake News on Society",
    content:
      "In today's digital landscape, fake news is not only widespread but also extremely influential. Our analysis reveals that misinformation is reshaping public discourse and affecting trust in institutions. Read on to learn more about the latest developments and expert insights on this critical issue."
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Explore Fake News</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section: Static Article with Image + Additional News Without Images */}
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            {/* Static Article */}
            <img
              src={staticArticle.image}
              alt="Static News"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{staticArticle.headline}</h2>
              <p className="text-gray-300">{staticArticle.content}</p>
            </div>

            {/* News Without Images (from right section) */}
            <div className="p-6 border-t border-gray-700">
              <h2 className="text-2xl font-bold mb-4">More News</h2>
              {loading && <p className="text-center text-gray-400">Loading...</p>}
              {error && <p className="text-center text-red-500">{error}</p>}
              {!loading && !error && (
                <ul className="space-y-4">
                  {factChecks.slice(0, 3).map((fact, index) => (
                    <li key={index} className="border-b border-gray-700 pb-2">
                      <h3 className="text-xl font-semibold">{fact.claimant}</h3>
                      <p className="text-gray-300">{fact.claim}</p>
                      <div className="text-sm text-gray-400 mt-2">
                        <span>{fact.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Right Section: Latest Fact Checks */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Latest Fact Checks</h2>
            {loading && <p className="text-center text-gray-400">Loading fact checks...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            {!loading && !error && (
              <ul className="space-y-4">
                {factChecks.map((fact, index) => (
                  <li key={index} className="border-b border-gray-700 pb-2">
                    <h3 className="text-xl font-semibold">{fact.claimant}</h3>
                    <p className="text-gray-300">{fact.claim}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mt-2">
                      <span>{fact.date}</span>
                      <a
                        href={fact.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-600"
                      >
                        Read more →
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
