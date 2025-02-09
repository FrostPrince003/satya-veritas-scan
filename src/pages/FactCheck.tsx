import { ArticleInput } from "@/components/ArticleInput";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FactCheckResult from "@/components/FactCheckResult";

const FactCheck = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any | null>(null);

  const handleAnalyze = async (text: string) => {
    setIsAnalyzing(true);
    try {
      // Send a POST request to your FastAPI endpoint
      const response = await fetch("http://127.0.0.1:8000/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // The backend expects a JSON payload with a "query" field.
        body: JSON.stringify({ query: text }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the JSON response
      const data = await response.json();
      console.log("Received API data:", data);
      setAnalysisResult(data);
    } catch (error) {
      console.error("Error fetching analysis:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8 max-w-3xl pt-28">
        <h1 className="text-4xl font-bold text-primary mb-2 animate-fade-in">
          Try Our Fake News Detector
        </h1>
        <p className="text-secondary mb-8 text-gray-200 animate-fade-in">
          Paste any article to analyze its credibility using our AI-powered system.
        </p>

        {/* The ArticleInput component calls the handleAnalyze callback when the Analyze button is clicked */}
        {!analysisResult ? (
          <ArticleInput onAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />
        ) : (
          <FactCheckResult data={analysisResult} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default FactCheck;
