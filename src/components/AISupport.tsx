
import { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const AISupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI shopping assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(input),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('shipping') || input.includes('delivery')) {
      return "We offer free shipping on orders over $99! Standard delivery takes 3-5 business days, and express delivery is available for 1-2 days.";
    } else if (input.includes('return') || input.includes('refund')) {
      return "We have a 30-day hassle-free return policy. You can return any item in its original condition for a full refund or exchange.";
    } else if (input.includes('payment') || input.includes('pay')) {
      return "We accept all major credit cards, PayPal, and offer secure checkout. All payments are processed securely with 256-bit SSL encryption.";
    } else if (input.includes('product') || input.includes('recommend')) {
      return "I'd be happy to help you find the perfect product! What category are you interested in? We have electronics, fashion, home goods, and more.";
    } else if (input.includes('size') || input.includes('sizing')) {
      return "You can find detailed size guides on each product page. If you're unsure, I recommend checking our size chart or contacting our customer service team.";
    } else {
      return "Thanks for your question! I'm here to help with product recommendations, shipping info, returns, and more. What specific information are you looking for?";
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-gradient-primary hover:bg-primary/90 text-primary-foreground z-50 transition-all duration-300 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-card border border-border rounded-xl shadow-product z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">AI Assistant</h3>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isBot
                        ? 'bg-muted text-foreground'
                        : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button size="icon" onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AISupport;
