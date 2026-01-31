"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Add error boundary for chunk loading errors
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.error && typeof event.error.message === 'string' &&
        (event.error.message.includes('ChunkLoadError') ||
          event.error.message.includes('Loading chunk'))) {
        // Reload the page to recover from chunk loading errors
        window.location.reload();
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  return (
    <div className="antialiased">
      {children}
    </div>
  );
}