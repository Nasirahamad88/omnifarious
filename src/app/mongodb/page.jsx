"use client";

import React, { useState } from "react";

const CheckConnection = () => {
  const [status, setStatus] = useState(null);

  const checkConnection = async () => {
    try {
      const res = await fetch("/api/check-connection");
      const data = await res.json();
      setStatus(data.message || data.error);
    } catch (error) {
      setStatus("Failed to fetch connection status");
    }
  };

  return (
    <div className="mt-32 bg-red-800">
      <button onClick={checkConnection}>Check MongoDB Connection</button>
      {status && <p>{status}</p>}
    </div>
  );
};

export default CheckConnection;
