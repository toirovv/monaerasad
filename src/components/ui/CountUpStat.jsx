import { useRef, useState, useEffect } from "react";

const CountUpStat = ({ value }) => {
  const match = value.match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;
  const [display, setDisplay] = useState((0).toFixed(decimals));
  const elRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!elRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const duration = 1500;
          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay((target * eased).toFixed(decimals));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(elRef.current);
    return () => observer.disconnect();
  }, [target, decimals]);

  return (
    <p ref={elRef} className="font-display text-3xl sm:text-4xl font-bold text-white tabular-nums">
      {display}{suffix}
    </p>
  );
};

export default CountUpStat;
