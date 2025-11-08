"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Sparkles, X, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function JarvisFab() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello there, I'm JJarvis, your personal AI assistant for helping you build your future! How may I help you achieve your career goals?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      const responses = [
        "I can help you find internship opportunities that match your profile!",
        "Would you like me to explain the application process?",
        "I can suggest ways to improve your profile to increase your chances.",
        "Let me help you understand the Erasmus+ funding options.",
        "I can guide you through the document submission process.",
      ];
      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];

      const assistantMessage: Message = {
        role: "assistant",
        content: randomResponse,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);

    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-[#002F66] hover:bg-[#003d80] transition-all duration-300 hover:scale-110 z-50 group"
        size="icon"
      >
        <Sparkles className="h-6 w-6 text-white animate-pulse" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#002F66] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#002F66]"></span>
        </span>
      </Button>

      {/* Chat Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px] h-[600px] flex flex-col p-0 overflow-hidden">
          <DialogHeader className="px-6 pt-6 pb-4 border-b bg-blue-50 rounded-t-lg">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border-2 border-[#002F66]">
                <AvatarFallback className="bg-[#002F66] text-white">
                  <Sparkles className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              <div>
                <DialogTitle className="text-lg font-bold text-[#002F66]">
                  JJarvis
                </DialogTitle>
                <DialogDescription className="text-xs">
                  Your Personal AI Assistant
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          {/* Messages Area */}
          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full px-6 ">
              <div className="space-y-4 py-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`flex gap-2 max-w-[80%] ${
                        message.role === "user"
                          ? "flex-row-reverse"
                          : "flex-row"
                      }`}
                    >
                      <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarFallback
                          className={
                            message.role === "assistant"
                              ? "bg-[#002F66] text-white"
                              : "bg-[#002F66] text-white"
                          }
                        >
                          {message.role === "assistant" ? (
                            <Sparkles className="h-4 w-4" />
                          ) : (
                            "U"
                          )}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`rounded-2xl px-4 py-2 ${
                          message.role === "user"
                            ? "bg-[#002F66] text-white"
                            : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Input Area */}
          <div className="border-t p-4 bg-gray-50 rounded-b-lg">
            <div className="flex gap-2">
              <Textarea
                placeholder="What's on your mind today?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="min-h-[60px] max-h-[120px] resize-none"
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim()}
                className="bg-[#002F66] hover:bg-[#003d80]"
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Press Enter to send, Shift+Enter for new line
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
