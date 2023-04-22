import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 seconds timeout

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>{loading ? <div>Loading...</div> : <div>Other contents...</div>}</div>
  );
}

export default App;
