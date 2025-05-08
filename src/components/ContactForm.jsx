import { useState } from "react";
import { Send } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { cn } from "../lib/utils";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target;
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
      });

      if (response.ok) {
        toast.success(
          <div className="text-center">
            <h3 className="font-bold text-lg mb-1">Message sent!</h3>
            <p className="text-sm">
              Thank you for your message. I'll get back to you soon.{" "}
            </p>
          </div>,
          {
            position: "top-center",
            style: {
              animation: "slideIn 0.5s, fadeIn 0.5s",
            },
          }
        );
        form.reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast.error("Failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      action="https://formsubmit.co/8be8bb146805d4fb6d0b4a25463fe403"
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Hidden Fields */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      {/* فیلدهای فرم */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Your Name
        </label>
        <input
          name="name"
          required
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* فیلد ایمیل */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Your Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="john@gmail.com"
          className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* فیلد پیام */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Hello, I'd like to talk about..."
          className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "cosmic-button w-full flex items-center justify-center gap-2"
        )}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        <Send size={16} />
      </button>
    </form>
  );
}

export default ContactForm;
