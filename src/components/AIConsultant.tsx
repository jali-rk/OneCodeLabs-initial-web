
import React, { useState, useRef, useEffect } from 'react';

const AIConsultant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [response]);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setResponse('');
    
    // Simulate a brief loading delay for better UX
    setTimeout(() => {
      setResponse("Hey! 👋 Our AI Consultant will be available soon!\n\nWe're currently fine-tuning our architectural recommendation engine to provide you with the most accurate and valuable insights. In the meantime, feel free to reach out to our human team directly, and we'll be happy to discuss your project!\n\n✨ Coming Soon: Real-time tech stack recommendations, scalability insights, and strategic roadmap drafts.");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-24 bg-cetacean relative overflow-hidden" id="ai-consultant">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              Beta Feature
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Instant Architectural <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-burlywood">AI Consultant</span>
            </h2>
            <p className="text-lavender/60 text-lg leading-relaxed max-w-lg">
              Not sure where to start? Describe your business goal or project idea, and our AI Architect will draft a preliminary technical roadmap for you.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-lavender/80">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Real-time Tech Stack Recommendations</span>
              </div>
              <div className="flex items-center gap-3 text-lavender/80">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Scalability & Security Insights</span>
              </div>
              <div className="flex items-center gap-3 text-lavender/80">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Strategic Roadmap Drafts</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-1 md:p-2 backdrop-blur-xl shadow-2xl overflow-hidden group">
            <div className="bg-cetacean/40 rounded-[2.2rem] p-6 md:p-8 flex flex-col h-[500px]">
              <div 
                ref={scrollRef}
                className="flex-1 overflow-y-auto mb-6 pr-2 custom-scrollbar space-y-4 text-lavender/90 font-light leading-relaxed prose prose-invert max-w-none"
              >
                {response ? (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 whitespace-pre-wrap">
                    {response}
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
                    <span className="material-symbols-outlined text-6xl mb-4">smart_toy</span>
                    <p>Enter your project details below to begin the consultation.</p>
                  </div>
                )}
                {isLoading && (
                  <div className="flex gap-1 items-center py-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                )}
              </div>

              <form onSubmit={handleConsult} className="relative">
                <input 
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g. A global real-time logistics tracking platform..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary outline-none transition-all placeholder:text-lavender/20 pr-16"
                />
                <button 
                  type="submit"
                  disabled={isLoading || !prompt.trim()}
                  className="absolute right-2 top-2 w-12 h-12 bg-primary hover:bg-primary/80 disabled:bg-white/10 disabled:text-white/20 text-white rounded-xl flex items-center justify-center transition-all shadow-lg"
                >
                  <span className="material-symbols-outlined">{isLoading ? 'hourglass_empty' : 'send'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(47, 163, 250, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(47, 163, 250, 0.4);
        }
      `}</style>
    </section>
  );
};

export default AIConsultant;
