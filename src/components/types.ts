export interface FactCheckData {
    fact_checking_agent: Agent
    political_analyst_agent: Agent
    media_bias_analyst_agent: Agent
    public_sentiment_analyst_agent: Agent
    verdict_agent: Agent
    summary_agent: {
      main_conclusion: string
      sources: string[]
    }
  }
  
  interface Agent {
    description: string
    findings: string
    sources: string[]
    conclusion: string
  }
  
  