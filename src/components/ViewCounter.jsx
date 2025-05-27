'use client'
import { useEffect, useState } from "react";

export default function ViewCounter({ initialCount = 0, page = "homepage" }) {
  const [viewCount, setViewCount] = useState(initialCount);
  useEffect(() => {
    const incrementView = async () => {
      try {
        const response = await fetch("/api/views", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ page }),
        });
        if (response.ok) {
          const data = await response.json();
          setViewCount(data.count);
        }
      } catch (error) {
        console.error("Error incrementing view count:", error);
      }
    };

    incrementView();
  }, [page]);
  return (
    <div>
      <p>This page has been viewed {viewCount.toLocaleString()} times.</p>
    </div>
  );
}
