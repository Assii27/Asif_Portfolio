import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { sendMessage } from '../lib/gemini';

interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.content }]
      }));

      const response = await sendMessage(userMessage.content, history);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: response || 'Sorry, I couldn\'t generate a response.',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: 'Error: Failed to connect to Gemini. Please check your API key.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="chat-container" className="flex flex-col h-screen bg-[#f5f5f5] font-sans text-gray-900">
      {/* Header */}
      <header id="chat-header" className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-black rounded-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-semibold tracking-tight">Gemini Assistant</h1>
        </div>
        <div className="text-xs font-medium text-gray-500 uppercase tracking-widest">
          Powered by Gemini 3 Flash
        </div>
      </header>

      {/* Messages Area */}
      <main id="messages-area" ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
            <div className="p-4 bg-white rounded-full shadow-md">
              <Bot className="w-12 h-12 text-gray-400" />
            </div>
            <div className="max-w-md">
              <h2 className="text-2xl font-light text-gray-800">How can I help you today?</h2>
              <p className="mt-2 text-gray-500">Ask me anything, from writing code to summarizing complex topics.</p>
            </div>
          </div>
        )}
        
        <AnimatePresence initial={false}>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-3 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  message.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 text-gray-600'
                }`}>
                  {message.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`p-4 rounded-2xl shadow-sm ${
                  message.role === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white border border-gray-100 text-gray-800'
                }`}>
                  <div className="prose prose-sm max-w-none prose-invert">
                    <ReactMarkdown>{message.content}</ReactMarkdown>
                  </div>
                  <div className={`mt-2 text-[10px] opacity-50 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isLoading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="flex gap-3 items-center text-gray-400 ml-11">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-xs font-medium italic">Gemini is thinking...</span>
            </div>
          </motion.div>
        )}
      </main>

      {/* Input Area */}
      <footer id="chat-footer" className="p-6 bg-white border-t border-gray-200">
        <form onSubmit={handleSend} className="max-w-4xl mx-auto relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message Gemini Assistant..."
            className="w-full p-4 pr-16 bg-[#f9f9f9] border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-2 top-2 p-2 bg-black text-white rounded-xl hover:bg-gray-800 disabled:bg-gray-200 disabled:text-gray-400 transition-colors"
          >
            <Send size={20} />
          </button>
        </form>
        <p className="mt-4 text-center text-[10px] text-gray-400 uppercase tracking-widest">
          AI can make mistakes. Check important info.
        </p>
      </footer>
    </div>
  );
}
