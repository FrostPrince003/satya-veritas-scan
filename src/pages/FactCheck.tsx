import { ArticleInput } from "@/components/ArticleInput";
import { AnalysisResult } from "../components/AnalysisResult";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FactCheck = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{
    credibilityScore: number;
    sources: { url: string; title: string; credibility: number }[];
  } | null>(null);

  const handleAnalyze = async (text: string) => {
    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setAnalysisResult({
        credibilityScore: Math.floor(Math.random() * 100),
        sources: [
          {
            url: "https://example.com/source1",
            title: "Trusted News Source 1",
            credibility: 85,
          },
          {
            url: "https://example.com/source2",
            title: "Fact-Checking Organization",
            credibility: 92,
          },
          {
            url: "https://example.com/source3",
            title: "Official Government Report",
            credibility: 78,
          },
        ],
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleBack = () => {
    setShowResults(false);
    setText('');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8 max-w-3xl pt-28">
        <h1 className="text-4xl font-bold text-primary mb-2 animate-fade-in">
          Try Our Fake News Detector
        </h1>
        <p className="text-secondary mb-8 text-gray-200 animate-fade-in">
          Paste any article to analyze its credibility using our AI-powered system
        </p>

        <ArticleInput onAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />
        {analysisResult && <AnalysisResult {...analysisResult} />}
      </div>
      <Footer />
    </div>
  );
};

export default FactCheck;