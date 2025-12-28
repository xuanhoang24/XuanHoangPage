"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle, XCircle } from "lucide-react";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  if (status === "success") {
    return (
      <div className="border border-accent p-8 text-center">
        <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
        <p className="font-mono text-lg mb-2">Message sent!</p>
        <p className="font-mono text-muted-foreground text-sm mb-4">I'll get back to you soon.</p>
        <button
          onClick={() => setStatus("idle")}
          className="font-mono text-sm text-accent hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={`w-full bg-transparent border-2 px-4 py-3 font-mono focus:border-accent focus:outline-none transition-colors ${errors.name ? "border-red-500" : "border-border"}`}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="text-red-500 font-mono text-sm mt-2">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={`w-full bg-transparent border-2 px-4 py-3 font-mono focus:border-accent focus:outline-none transition-colors ${errors.email ? "border-red-500" : "border-border"}`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-red-500 font-mono text-sm mt-2">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={`w-full bg-transparent border-2 px-4 py-3 font-mono focus:border-accent focus:outline-none transition-colors resize-none ${errors.message ? "border-red-500" : "border-border"}`}
          placeholder="Your message..."
        />
        {errors.message && (
          <p className="text-red-500 font-mono text-sm mt-2">{errors.message}</p>
        )}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-500 font-mono text-sm">
          <XCircle className="w-4 h-4" />
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full border-2 border-border px-6 py-3 font-mono font-bold hover:border-accent hover:bg-accent hover:text-accent-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
