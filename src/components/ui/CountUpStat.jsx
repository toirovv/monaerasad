import { useRef, useState, useEffect } from "react";
import { animate, useInView } from "framer-motion";

const CountUpStat = ({ value }) => {
  const match = value.match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;
  const [display, setDisplay] = useState((0).toFixed(decimals));
  const elRef = useRef(null);
  const started = useRef(false);
  const inView = useInView(elRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    animate(0, target, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
  }, [inView, target, decimals]);

  return (
    <p ref={elRef} className="font-display text-3xl sm:text-4xl font-bold text-white tabular-nums">
      {display}{suffix}
    </p>
  );
};

export default CountUpStat;
