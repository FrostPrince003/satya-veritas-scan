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
    
    // Simulate API call
    setTimeout(() => {
      const fakeData = {
        verdict_agent: {
          findings: "LIKELY TRUE", // Change to "FALSE" for testing
        },
        fact_checking_agent: {
          conclusion: "The article contains accurate information.",
          sources: ["https://example.com/source1"],
        },
        political_analyst_agent: {
          conclusion: "No significant political bias detected.",
          sources: ["https://example.com/source2"],
        },
        media_bias_analyst_agent: {
          conclusion: "Media coverage appears neutral.",
          sources: ["https://example.com/source3"],
        },
        public_sentiment_analyst_agent: {
          conclusion: "Public reception is mostly positive.",
          sources: [],
        },
        summary_agent: {
          main_conclusion: "The article appears to be credible based on available sources.",
        },
      };

      setAnalysisResult(fakeData);
      setIsAnalyzing(false);
    }, 2000);
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
