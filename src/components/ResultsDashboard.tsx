import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ChevronDown, ChevronUp, ArrowLeft, MessageSquare, ExternalLink, Info, Scale, AlertTriangle, Users } from 'lucide-react';
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
      className="space-y-6 w-full max-w-4xl mx-auto p-4"
    >
      {/* Final Verdict Card */}
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Card className={cn(
          "border-2 shadow-lg transition-all duration-300 hover:shadow-xl",
          sampleData.isVerified ? "border-green-500 bg-green-500/5" : "border-red-500 bg-red-500/5"
        )}>
          <CardHeader>
            <CardTitle className="text-center text-3xl">Final Verdict</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={cn(
              "flex items-center justify-center gap-4 p-6 rounded-lg",
              sampleData.isVerified ? "bg-green-500/10" : "bg-red-500/10"
            )}>
              <motion.div
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {sampleData.isVerified ? (
                  <Check className="h-12 w-12 text-green-500" />
                ) : (
                  <X className="h-12 w-12 text-red-500" />
                )}
              </motion.div>
              <span className={cn(
                "text-3xl font-bold",
                sampleData.isVerified ? "text-green-500" : "text-red-500"
              )}>
                {sampleData.isVerified ? "Verified" : "Not Verified"}
              </span>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Detailed Analysis Card */}
      <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-6 w-6" />
            Detailed Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">{sampleData.analysis}</p>
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-muted-foreground pt-4 leading-relaxed">{sampleData.extendedAnalysis}</p>
              </motion.div>
            )}
          </AnimatePresence>
          <Button
            variant="outline"
            onClick={() => setExpanded(!expanded)}
            className="w-full group"
          >
            {expanded ? (
              <>Show Less <ChevronUp className="ml-2 transition-transform group-hover:-translate-y-1" /></>
            ) : (
              <>Show More <ChevronDown className="ml-2 transition-transform group-hover:translate-y-1" /></>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Sources Card */}
      <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ExternalLink className="h-6 w-6" />
            Source Links
          </CardTitle>
        </CardHeader>
        <CardContent>
          {sampleData.sources.length > 0 ? (
            <ul className="space-y-3">
              {sampleData.sources.map((source, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
                  >
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    <span className="break-all">{source}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground flex items-center gap-2">
              <Info className="h-5 w-5" />
              No sources available
            </p>
          )}
        </CardContent>
      </Card>

      {/* Breakdown Card */}
      <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader>
          <CardTitle>Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-4 rounded-lg bg-card hover:bg-accent/50 transition-colors"
          >
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-400" />
              Factual Accuracy
            </h4>
            <p className="text-muted-foreground">{sampleData.breakdown.factualAccuracy}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-4 rounded-lg bg-card hover:bg-accent/50 transition-colors"
          >
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Scale className="h-5 w-5 text-purple-400" />
              Political Analysis
            </h4>
            <p className="text-muted-foreground">{sampleData.breakdown.politicalAnalysis}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-4 rounded-lg bg-card hover:bg-accent/50 transition-colors"
          >
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-400" />
              Media Bias
            </h4>
            <p className="text-muted-foreground">{sampleData.breakdown.mediaBias}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-4 rounded-lg bg-card hover:bg-accent/50 transition-colors"
          >
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Users className="h-5 w-5 text-green-400" />
              Public Sentiment
            </h4>
            <p className="text-muted-foreground">{sampleData.breakdown.publicSentiment}</p>
          </motion.div>
        </CardContent>
      </Card>

      {/* Navigation Controls */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex justify-between items-center pt-4"
      >
        <Button 
          variant="outline" 
          onClick={onBack}
          className="group hover:bg-primary/10"
        >
          <ArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" />
          Back
        </Button>
        <Button 
          variant="secondary"
          className="group hover:bg-secondary/80"
        >
          <MessageSquare className="mr-2 transition-transform group-hover:scale-110" />
          Feedback
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default ResultsDashboard;