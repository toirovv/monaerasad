import React, { createContext, useContext, useState, useCallback, useRef } from "react";

const ToastContext = createContext(null);

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const idRef = useRef(0);

  const addToast = useCallback((message, type = "info", duration = 3500) => {
    const id = ++idRef.current;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div
        className="fixed bottom-[90px] left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-[600] flex flex-col gap-2 pointer-events-none sm:max-w-sm"
      >
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

const TOAST_STYLES = {
  info: {
    bg: "linear-gradient(135deg, rgba(26,32,44,0.95), rgba(15,18,28,0.95))",
    border: "rgba(18,198,168,0.25)",
    icon: "ℹ️",
    accent: "#12C6A8",
  },
  warning: {
    bg: "linear-gradient(135deg, rgba(40,30,15,0.95), rgba(25,18,10,0.95))",
    border: "rgba(245,158,11,0.3)",
    icon: "⚠️",
    accent: "#F59E0B",
  },
  error: {
    bg: "linear-gradient(135deg, rgba(40,15,15,0.95), rgba(25,10,10,0.95))",
    border: "rgba(239,68,68,0.3)",
    icon: "🚫",
    accent: "#EF4444",
  },
  success: {
    bg: "linear-gradient(135deg, rgba(15,40,25,0.95), rgba(10,25,15,0.95))",
    border: "rgba(16,185,129,0.3)",
    icon: "✅",
    accent: "#10B981",
  },
};

const ToastItem = ({ toast, onRemove }) => {
  const style = TOAST_STYLES[toast.type] || TOAST_STYLES.info;

  return (
    <div
      className="toast-enter pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl sm:rounded-2xl cursor-pointer"
      onClick={() => onRemove(toast.id)}
      style={{
        background: style.bg,
        border: `1px solid ${style.border}`,
        boxShadow: `0 12px 40px -8px rgba(0,0,0,0.7), 0 0 0 1px ${style.border}`,
        animation: "toastIn 0.35s cubic-bezier(0.22,1,0.36,1) forwards",
      }}
    >
      <span className="text-lg shrink-0">{style.icon}</span>
      <p className="text-[13px] sm:text-sm font-medium text-white/90 flex-1 leading-snug">
        {toast.message}
      </p>
      <div
        className="shrink-0 w-1 h-8 rounded-full opacity-60"
        style={{ background: style.accent }}
      />
    </div>
  );
};
