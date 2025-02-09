export const mockData = {
    fact_checking_agent: {
      description: "Analyze the news article for factual accuracy",
      findings:
        "The Colorado legislature passed a law to protect biological and neural data, including brain waves, in 2024. This is the first law of its kind in the world.",
      sources: [],
      conclusion:
        "The claim about mandatory brainwave scans is inaccurate. Colorado has taken steps to protect brain data, but no such policy exists.",
    },
    political_analyst_agent: {
      description: "Analyze the political context",
      findings: "The news article appears to be entirely fictional and lacks any basis in reality.",
      sources: [
        "https://www.leg.state.co.us/lgs/bill/billsummary.cfm?bill=SB115_1924",
        "https://www.pewresearch.org/fact-tank/2020/09/23/biometric-data-whats-at-stake/",
        "https://www.who.int/news-room/q-and-a/detail/neurotechnology",
      ],
      conclusion:
        "The narrative of mandatory brainwave scans is highly unlikely and appears to be misinformation or exaggeration.",
    },
    media_bias_analyst_agent: {
      description: "Evaluate the news source for biases",
      findings: "The article exhibits strong evidence of media bias, including sensationalized language.",
      sources: [
        "https://www.leg.state.co.us/lgs/bill/billsummary.cfm?bill=SB115_1924",
        "https://www.pewresearch.org/fact-tank/2020/09/23/biometric-data-whats-at-stake/",
        "https://www.who.int/news-room/q-and-a/detail/neurotechnology",
      ],
      conclusion: "The narrative appears to be exaggerated or misinformation.",
    },
    public_sentiment_analyst_agent: {
      description: "Analyze public reaction",
      findings:
        "The Colorado law protects consumers' brainwaves by signing into law the first measure passed in the U.S.",
      sources: [],
      conclusion: "Public sentiment aligns with the need to safeguard sensitive information.",
    },
    verdict_agent: {
      description: "Provide a final verdict",
      findings: "The news article is FALSE.\n\nPercentage of Truth: 0%",
      sources: [],
      conclusion: "The news article contains misinformation about mandatory brainwave scans.",
    },
    summary_agent: {
      main_conclusion:
        "The passage of a law protecting residents' biological and neural data in Colorado represents an important step forward in addressing concerns about brain data privacy.",
      sources: [],
    },
  }
  
  