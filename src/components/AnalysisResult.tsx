import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";

interface Source {
  url: string;
  title: string;
  credibility: number;
}

interface AnalysisResultProps {
  credibilityScore: number;
  sources: Source[];
}

export const AnalysisResult = ({ credibilityScore, sources }: AnalysisResultProps) => {
  // Use explicit color classes with !important to override theme changes
  const getCredibilityColor = (score: number) => {
    if (score >= 70) return "text-green-500 dark:text-green-500!";
    if (score >= 40) return "text-yellow-500 dark:text-yellow-500!";
    return "text-red-500 dark:text-red-500!";
  };

  const getCredibilityIcon = (score: number) => {
    if (score >= 70) return <CheckCircle className="w-8 h-8 text-green-500 dark:text-green-500!" />;
    if (score >= 40) return <AlertTriangle className="w-8 h-8 text-yellow-500 dark:text-yellow-500!" />;
    return <XCircle className="w-8 h-8 text-red-500 dark:text-red-500!" />;
  };

  return (
    <Card className="p-6 mt-6 animate-fade-in">
      <div className="flex items-center gap-4 mb-6">
        {getCredibilityIcon(credibilityScore)}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">Credibility Score</h3>
          <Progress 
            value={credibilityScore} 
            className="h-2 bg-gray-200 dark:bg-gray-800"
            indicatorClassName="bg-green-500 dark:bg-green-500!"
          />
        </div>
        <span className={`text-2xl font-bold ${getCredibilityColor(credibilityScore)}`}>
          {credibilityScore}%
        </span>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Cross-Referenced Sources</h3>
        {sources.map((source, index) => (
          <Card key={index} className="p-4 hover:bg-accent/50 transition-colors">
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between"
            >
              <span className="text-blue-600 dark:text-blue-400 hover:underline">
                {source.title}
              </span>
              <span className={`font-semibold ${getCredibilityColor(source.credibility)}`}>
                {source.credibility}% match
              </span>
            </a>
          </Card>
        ))}
      </div>
    </Card>
  );
};