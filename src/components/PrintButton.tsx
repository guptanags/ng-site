"use client";

export default function PrintButton() {
  return (
    <button
      className="px-3 py-1.5 border rounded"
      onClick={() => typeof window !== "undefined" && window.print()}
    >
      Print
    </button>
  );
}


