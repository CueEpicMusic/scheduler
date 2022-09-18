import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  function transition(next, replace) {
    if (replace) {
      setMode(next);
      setHistory([...history.slice(0, history.length - 1), next]);
    } else {
      setMode(next);
      setHistory([...history.slice(0, history.length), next]);
    }
  }
  function back() {
    if (history.length < 2) {
      return;
    }
    const poppedHistory = history;
    poppedHistory.pop();
    setHistory(poppedHistory);
    setMode(history[history.length - 1]);
  }
  return { mode, transition, back };
}
