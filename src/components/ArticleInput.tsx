import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "lucide-react";

interface ArticleInputProps {
  onAnalyze: (text: string) => void;
  isAnalyzing: boolean;
}

export const ArticleInput = ({ onAnalyze, isAnalyzing }: ArticleInputProps) => {
  const [articleText, setArticleText] = useState("");
  const [articleUrl, setArticleUrl] = useState("");
  const { toast } = useToast();

  const handleAnalyze = (type: "text" | "url") => {
    if (type === "text" && articleText.trim().length < 50) {
      toast({
        title: "Text too short",
        description: "Please enter at least 50 characters for accurate analysis.",
        variant: "destructive",
      });
      return;
    }
    if (type === "url" && !articleUrl.trim().startsWith("http")) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL starting with http:// or https://",
        variant: "destructive",
      });
      return;
    }
    onAnalyze(type === "text" ? articleText : articleUrl);
  };

  return (
    <Card className="p-6 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-6 text-center">Analyze Article</h2>
      <Tabs defaultValue="text" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="text">Paste Text</TabsTrigger>
          <TabsTrigger value="url">Enter URL</TabsTrigger>
        </TabsList>
        <TabsContent value="text" className="space-y-4">
          <Textarea
            placeholder="Paste the article text here..."
            className="min-h-[200px] mb-4 resize-none"
            value={articleText}
            onChange={(e) => setArticleText(e.target.value)}
          />
          <Button
            onClick={() => handleAnalyze("text")}
            disabled={isAnalyzing}
            className="w-full"
          >
            {isAnalyzing ? (
              <span className="animate-pulse">Analyzing...</span>
            ) : (
              "Analyze Text"
            )}
          </Button>
        </TabsContent>
        <TabsContent value="url" className="space-y-4">
          <div className="flex items-center space-x-2">
            <Link className="w-5 h-5 text-muted-foreground" />
            <Input
              type="url"
              placeholder="Enter article URL..."
              value={articleUrl}
              onChange={(e) => setArticleUrl(e.target.value)}
            />
          </div>
          <Button
            onClick={() => handleAnalyze("url")}
            disabled={isAnalyzing}
            className="w-full"
          >
            {isAnalyzing ? (
              <span className="animate-pulse">Analyzing...</span>
            ) : (
              "Analyze URL"
            )}
          </Button>
        </TabsContent>
      </Tabs>
    </Card>
  );
};