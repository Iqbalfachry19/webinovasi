"use client";
import { useState, useEffect } from "react";
import Script from "next/script";

const Home = () => {
  const [resultJson, setResultJson] = useState("");
  const [isSnapLoaded, setIsSnapLoaded] = useState(false);
  const [isApiAvailable, setIsApiAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [apiCheckError, setApiCheckError] = useState("");
  const [domain, setDomain] = useState("");
  const [domainRecommendations, setDomainRecommendations] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.snap) {
        setIsSnapLoaded(true);
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkApiDomain = async () => {
      if (!domain) {
        setApiCheckError("Please enter a domain to check.");
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://app.webinovasi.com/check-domain?domain=${encodeURIComponent(domain)}`,
        );
        if (response.ok) {
          const data = await response.json();
          if (data.message === "Domain is available") {
            setIsApiAvailable(true);
            setDomainRecommendations([]); // Clear recommendations if domain is available
            setApiCheckError("");
          } else {
            setIsApiAvailable(false);
            setApiCheckError(data.message);
            setDomainRecommendations(data.recommendations || []); // Update recommendations from API
          }
        } else {
          setApiCheckError("API domain is not available.");
        }
      } catch (error) {
        setApiCheckError("Error checking API domain.");
      } finally {
        setIsLoading(false);
      }
    };

    checkApiDomain();
  }, [domain]);

  const handlePayment = async () => {
    if (!isSnapLoaded) {
      console.error("Snap is not loaded yet.");
      return;
    }

    if (!isApiAvailable) {
      console.error("API domain is not available.");
      return;
    }

    try {
      const response = await fetch("https://app.webinovasi.com/get-snap-token");
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
    <div className="mx-auto max-w-md p-4">
      <h1 className="mb-4 text-2xl font-bold">Payment Page</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter domain"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B59C2]"
        />
        <button
          onClick={() => setIsLoading(true)}
          className="mt-2 w-full rounded-md bg-[#5B59C2] px-4 py-2 text-white shadow-sm hover:bg-[#5B59C2] focus:outline-none focus:ring-2 focus:ring-[#5B59C2]"
        >
          Check Domain
        </button>
      </div>
      {isLoading ? (
        <p className="text-gray-500">Loading API status...</p>
      ) : apiCheckError ? (
        <div>
          <p className="text-red-500">{apiCheckError}</p>
          {domainRecommendations.length > 0 && (
            <div>
              <p className="text-gray-700">Here are some recommendations:</p>
              <ul className="list-disc pl-5">
                {domainRecommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={handlePayment}
          disabled={!isSnapLoaded || !isApiAvailable}
          className={`w-full rounded-md px-4 py-2 text-white shadow-sm ${
            !isSnapLoaded || !isApiAvailable
              ? "cursor-not-allowed bg-gray-400"
              : "bg-[#5B59C2] hover:bg-[#5B59C2]"
          }`}
        >
          Pay!
        </button>
      )}
      <pre className="mt-4 rounded-md bg-gray-100 p-4">
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
