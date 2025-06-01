import { useState } from "react";
import { ArrowRight, ChevronLeft, ExternalLink, Search, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-background">
        <div className="flex h-14 items-center px-4">
          <div className="flex items-center gap-2 mr-4">
            <ChevronLeft className="h-5 w-5" />
            <span className="font-medium">OpenRouter</span>
          </div>
          
          <div className="relative flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search models" 
                className="pl-8 pr-8 h-9 md:w-[300px] lg:w-[400px]" 
              />
              <div className="absolute right-3 top-2.5 text-xs text-muted-foreground">/</div>
            </div>
          </div>
          
          <nav className="ml-auto flex items-center space-x-6">
            <a href="#" className="text-sm font-medium">Models</a>
            <a href="#" className="text-sm font-medium">Chat</a>
            <a href="#" className="text-sm font-medium">Rankings</a>
            <a href="#" className="text-sm font-medium">Docs</a>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <span className="sr-only">Toggle menu</span>
                <div className="h-6 w-6 flex items-center justify-center">
                  <span className="block h-0.5 w-0.5 rounded-full bg-foreground"></span>
                  <span className="block h-0.5 w-0.5 rounded-full bg-foreground"></span>
                  <span className="block h-0.5 w-0.5 rounded-full bg-foreground"></span>
                </div>
              </Button>
              <div className="h-8 w-8 rounded-full bg-purple-700 flex items-center justify-center text-white text-sm">
                h
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              The Unified<br />Interface For LLMs
            </h1>
            <p className="text-lg mb-6">
              Better <span className="text-blue-500">prices</span>, better <span className="text-blue-500">uptime</span>, no subscription.
            </p>
            <div className="relative">
              <Input 
                placeholder="Start a message..." 
                className="pr-12 py-6 text-base"
              />
              <Button 
                size="icon" 
                className="absolute right-1 top-1 rounded-md bg-blue-600 hover:bg-blue-700"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Featured Models</h2>
              <a href="#" className="text-sm text-blue-500 flex items-center gap-1">
                View Trending <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <div className="space-y-4">
              <ModelCard 
                name="Gemini 2.5 Pro Preview"
                provider="google"
                tokens="204.5B"
                latency="2.2s"
                growth="+27.2%"
                icon="✨"
              />
              
              <ModelCard 
                name="GPT-4.1"
                provider="openai"
                tokens="41.4B"
                latency="820ms"
                growth="-9.44%"
                negative={true}
                icon={<div className="h-5 w-5 rounded-full bg-black flex items-center justify-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-white"></div>
                </div>}
              />
              
              <ModelCard 
                name="Claude Sonnet 4"
                provider="anthropic"
                tokens="232.2B"
                latency="1.9s"
                growth="--"
                isNew={true}
                icon={<div className="h-5 w-5 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold">
                  A
                </div>}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
          <StatsCard value="7.9T" label="Monthly Tokens" />
          <StatsCard value="2M" label="Global Users" />
          <StatsCard value="50+" label="Active Providers" />
          <StatsCard value="300+" label="Models" color="text-blue-500" />
        </div>
      </main>
    </div>
  );
};

const ModelCard = ({ 
  name, 
  provider, 
  tokens, 
  latency, 
  growth, 
  negative = false,
  isNew = false,
  icon
}) => {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium">{name}</h3>
            {isNew && <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">New</span>}
          </div>
          <p className="text-sm text-muted-foreground">by {provider}</p>
        </div>
        <div className="flex items-center justify-center h-6 w-6">
          {typeof icon === 'string' ? icon : icon}
        </div>
      </div>
      
      <div className="grid grid-cols-3 mt-4">
        <div className="flex flex-col">
          <span className="text-green-600 font-medium">{tokens}</span>
          <span className="text-xs text-muted-foreground">Tokens/wk</span>
        </div>
        <div className="flex flex-col">
          <span className="font-medium">{latency}</span>
          <span className="text-xs text-muted-foreground">Latency</span>
        </div>
        <div className="flex flex-col">
          <span className={`font-medium ${negative ? 'text-red-500' : 'text-green-600'}`}>{growth}</span>
          <span className="text-xs text-muted-foreground">Weekly growth</span>
        </div>
      </div>
    </Card>
  );
};

const StatsCard = ({ value, label, color = "text-black" }) => {
  return (
    <div>
      <div className={`text-4xl font-bold ${color}`}>{value}</div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};

export default Index;