import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, Sparkles } from "lucide-react";
import Groq from "groq-sdk";

// 1. Inisialisasi Groq
const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true // Diperlukan untuk menjalankan di sisi client (browser)
});

const ChatAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Halo! Saya Asisten AI Jokas. Ada yang bisa saya bantu terkait tugas akademis atau proyek IT Anda?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleChat = async () => {
  if (!input.trim()) return;

  const userMessage = { role: "user", text: input };
  setMessages((prev) => [...prev, userMessage]);
  const currentInput = input;
  setInput("");
  setIsTyping(true);

  try {
    // ... di dalam handleChat, bagian chatCompletion
const chatCompletion = await groq.chat.completions.create({
  messages: [
    {
      role: "system",
      content: `Anda adalah "Jokas Assistant", asisten pintar dari Jokas. 
      
      ATURAN KOMUNIKASI (SANGAT PENTING):
      1. Jawablah pertanyaan user secara mendalam, cerdas, dan langsung sesuai topik yang ditanyakan. 
      2. JANGAN memberikan link WhatsApp atau Instagram di setiap jawaban. Itu membuat Anda terlihat seperti robot iklan.
      3. Berikan informasi kontak (WA/IG) HANYA JIKA:
         - User bertanya "Gimana cara order?" atau "Cara pesannya gimana?"
         - User bertanya "Berapa harganya?" (Karena harga butuh konsultasi via WA).
         - User meminta nomor kontak atau media sosial secara langsung.
         - User sudah terlihat sangat tertarik dan percakapan akan berakhir.
      4. Jika user bertanya tentang teknis (misal: tentang SPSS atau UI/UX), jelaskan secara ahli tanpa basa-basi jualan.
      
      PENGETAHUAN LAYANAN:
      - Akademis: Joki tugas (SD-Kuliah), Skripsi, Makalah, Olah Data SPSS.
      - Digital: Web Development (Next.js/React), UI/UX Design, PPT, Konten Sosmed.
      
      DETAIL KONTAK (Gunakan hanya jika diminta):
      - WhatsApp: 085137270793 (https://wa.me/6285137270793)
      - Instagram: @jokas.bdg (https://www.instagram.com/jokas.bdg/)

      Gunakan Bahasa Indonesia yang natural, gaul kaum gen-z, seperti teman curhat tapi tetap profesional dan solutif.`
    },
    {
      role: "user",
      content: currentInput
    }
  ],
  model: "llama-3.3-70b-versatile",
});

    const botResponse = chatCompletion.choices[0]?.message?.content || "Maaf, saya tidak mengerti.";
    setMessages((prev) => [...prev, { role: "assistant", text: botResponse }]);
  } catch (error) {
    console.error("Error Groq:", error);
    setMessages((prev) => [...prev, { role: "assistant", text: "Maaf, koneksi saya sedang terganggu. Langsung hubungi WA 085137270793 ya!" }]);
  } finally {
    setIsTyping(false);
  }
};

  return (
    <div className="fixed bottom-24 right-6 z-[999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-[330px] md:w-[380px] h-[500px] bg-white border border-slate-200 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col mb-4"
          >
            {/* Header */}
            <div className="p-6 bg-primary-600 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-2xl">
                  <Bot size={20} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest leading-none mb-1">Jokas Assistant</p>
                  <p className="text-[9px] opacity-70 font-bold uppercase tracking-tighter italic">JO AI</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all">
                <X size={16} />
              </button>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 no-scrollbar bg-slate-50/50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-4 rounded-[1.8rem] text-sm leading-relaxed shadow-sm ${
                    msg.role === "user" 
                    ? "bg-primary-600 text-white rounded-tr-none font-medium" 
                    : "bg-white text-slate-700 rounded-tl-none border border-slate-100"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-100 p-4 rounded-[1.5rem] rounded-tl-none flex gap-1 shadow-sm font-bold text-[10px] text-slate-400 italic">
                    Memikirkan jawaban...
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleChat()}
                placeholder="Tanya harga joki..."
                className="flex-1 bg-slate-100 border-none rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-primary-500 outline-none text-slate-800"
              />
              <button onClick={handleChat} className="bg-primary-600 text-white p-3 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary-200">
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-all flex items-center gap-3 group"
      >
        {!isOpen && <span className="max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-500 text-xs font-black uppercase tracking-[0.2em] whitespace-nowrap pl-2">Ask AI</span>}
        <Sparkles size={24} className={isOpen ? "rotate-45" : ""} />
      </button>
    </div>
  );
};

export default ChatAI;