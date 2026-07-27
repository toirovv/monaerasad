import { useState, useEffect, useRef } from "react";

const useTypewriter = (words, { typeSpeed = 80, deleteSpeed = 50, pauseTime = 1800 } = {}) => {
  const [text, setText] = useState("");
  const indexRef = useRef(0);
  const deletingRef = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      const word = words[indexRef.current];

      if (!deletingRef.current) {
        const next = word.slice(0, (text.length) + 1);
        setText(next);

        if (next.length === word.length) {
          timeoutRef.current = setTimeout(() => {
            deletingRef.current = true;
            tick();
          }, pauseTime);
          return;
        }
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);

        if (next.length === 0) {
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % words.length;
        }
      }
    };

    const speed = deletingRef.current ? deleteSpeed : typeSpeed;
    timeoutRef.current = setTimeout(tick, speed);

    return () => clearTimeout(timeoutRef.current);
  }, [text, words, typeSpeed, deleteSpeed, pauseTime]);

  return text;
};

export default useTypewriter;
