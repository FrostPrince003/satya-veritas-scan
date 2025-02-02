import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ChevronDown, ChevronUp, ArrowLeft, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ResultsDashboardProps {
  onBack: () => void;
}

const ResultsDashboard = ({ onBack }: ResultsDashboardProps) => {
  const [expanded, setExpanded] = React.useState(false);

  const sampleData = {
    isVerified: false,
    analysis: "The claim that scientists found life on Mars has been widely circulated. However, our analysis reveals that while some studies hinted at possible microbial life, no conclusive evidence has been established. Press releases and early studies have overhyped these preliminary findings.",
    extendedAnalysis: "Further investigation shows that the original claims were based on misinterpreted data from Mars rover experiments. While organic molecules were detected, these do not necessarily indicate the presence of life. Scientists continue to explore these findings with cautious optimism, but no definitive proof of life has been found.",
    sources: [
      "https://www.nasa.gov/press-release/mars-life",
      "https://www.sciencedaily.com/releases/2025/03/mars-microbes"
    ],
    breakdown: {
      factualAccuracy: "The current evidence does not support the claim; the scientific consensus remains inconclusive.",
      politicalAnalysis: "There is no significant political angle; the claim appears driven by media hype.",
      mediaBias: "Some sources have exaggerated the findings to attract viewership.",
      publicSentiment: "The public remains skeptical, with many preferring to wait for more conclusive evidence."
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 w-full max-w-4xl mx-auto"
    >
      {/* Final Verdict Card */}
      <Card className={cn(
        "border-2",
        sampleData.isVerified ? "border-green-500" : "border-red-500"
      )}>
        <CardHeader>
          <CardTitle className="text-center">Final Verdict</CardTitle>
        </CardHeader>
        <CardContent>
          <div className={cn(
            "flex items-center justify-center gap-3 p-4 rounded-lg",
            sampleData.isVerified ? "bg-green-500/10" : "bg-red-500/10"
          )}>
            {sampleData.isVerified ? (
              <Check className="h-8 w-8 text-green-500" />
            ) : (
              <X className="h-8 w-8 text-red-500" />
            )}
            <span className={cn(
              "text-2xl font-bold",
              sampleData.isVerified ? "text-green-500" : "text-red-500"
            )}>
              {sampleData.isVerified ? "Verified" : "Not Verified"}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Analysis Card */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{sampleData.analysis}</p>
          <motion.div
            animate={{ height: expanded ? "auto" : 0 }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground pt-4">{sampleData.extendedAnalysis}</p>
          </motion.div>
          <Button
            variant="outline"
            onClick={() => setExpanded(!expanded)}
            className="w-full"
          >
            {expanded ? (
              <>Show Less <ChevronUp className="ml-2" /></>
            ) : (
              <>Show More <ChevronDown className="ml-2" /></>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Sources Card */}
      <Card>
        <CardHeader>
          <CardTitle>Source Links</CardTitle>
        </CardHeader>
        <CardContent>
          {sampleData.sources.length > 0 ? (
            <ul className="space-y-2">
              {sampleData.sources.map((source, index) => (
                <li key={index}>
                  <a
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline break-all"
                  >
                    {source}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground">No sources available</p>
          )}
        </CardContent>
      </Card>

      {/* Breakdown Card */}
      <Card>
        <CardHeader>
          <CardTitle>Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="p-4 rounded-lg bg-card">
            <h4 className="font-semibold mb-2">Factual Accuracy</h4>
            <p className="text-muted-foreground">{sampleData.breakdown.factualAccuracy}</p>
          </div>
          <div className="p-4 rounded-lg bg-card">
            <h4 className="font-semibold mb-2">Political Analysis</h4>
            <p className="text-muted-foreground">{sampleData.breakdown.politicalAnalysis}</p>
          </div>
          <div className="p-4 rounded-lg bg-card">
            <h4 className="font-semibold mb-2">Media Bias</h4>
            <p className="text-muted-foreground">{sampleData.breakdown.mediaBias}</p>
          </div>
          <div className="p-4 rounded-lg bg-card">
            <h4 className="font-semibold mb-2">Public Sentiment</h4>
            <p className="text-muted-foreground">{sampleData.breakdown.publicSentiment}</p>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center pt-4">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2" /> Back
        </Button>
        <Button variant="secondary">
          <MessageSquare className="mr-2" /> Feedback
        </Button>
      </div>
    </motion.div>
  );
};

export default ResultsDashboard;