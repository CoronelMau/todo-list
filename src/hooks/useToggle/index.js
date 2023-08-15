import { useState } from "react";

export default function useToggle(initialStatus = false) {
  const [status, setStatus] = useState(initialStatus);

  const toggle = () => setStatus(!status);

  return {
    status,
    toggle,
  };
}
