"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };
    try {
      setLoading(true);
      setStatus(null);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send");
      setStatus("Message sent successfully.");
      form.reset();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setStatus(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-gray-400 mb-6">Use the form below or email me at <a className="text-blue-400" href="mailto:nagendra.gupta@outlook.com">nagendra.gupta@outlook.com</a>.</p>
      <form className="space-y-4" onSubmit={onSubmit}>
        <input name="name" required placeholder="Your name" className="w-full border border-neutral-700 bg-neutral-900 rounded p-2" />
        <input name="email" required type="email" placeholder="Your email" className="w-full border border-neutral-700 bg-neutral-900 rounded p-2" />
        <textarea name="message" required placeholder="How can I help?" className="w-full border border-neutral-700 bg-neutral-900 rounded p-2 h-32" />
        <button disabled={loading} className="px-4 py-2 bg-teal-600 text-white rounded disabled:opacity-50" type="submit">
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-neutral-300">{status}</p>}
    </main>
  );
}


