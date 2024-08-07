"use client";
import { useState, useEffect } from "react";
import Script from "next/script";

const Home = () => {
  const [resultJson, setResultJson] = useState("");
  const [isSnapLoaded, setIsSnapLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.snap) {
        setIsSnapLoaded(true);
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handlePayment = async () => {
    if (!isSnapLoaded) {
      console.error("Snap is not loaded yet.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/get-snap-token");
      const data = await response.json();

      if (data.token) {
        window.snap.pay(data.token, {
          onSuccess: function (result: any) {
            setResultJson(JSON.stringify(result, null, 2));
          },
          onPending: function (result: any) {
            setResultJson(JSON.stringify(result, null, 2));
          },
          onError: function (result: any) {
            setResultJson(JSON.stringify(result, null, 2));
          },
        });
      } else {
        console.error("Failed to get Snap token:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <button onClick={handlePayment}>Pay!</button>
      <pre>
        <div id="result-json">
          JSON result will appear here after payment:
          <br />
          {resultJson}
        </div>
      </pre>
      <Script
        src="https://app.midtrans.com/snap/snap.js"
        data-client-key="Mid-client-L4V82XLkgbuC3kfe"
        onLoad={() => setIsSnapLoaded(true)}
      />
    </div>
  );
};

export default Home;
