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
  const [domainPrice, setDomainPrice] = useState(""); // State to store domain price
  const [selectedTheme, setSelectedTheme] = useState("default"); // State to store selected theme
  const [hostingPackage, setHostingPackage] = useState("1-year"); // State to store hosting package
  const [hostingPrice, setHostingPrice] = useState(700000); // State to store hosting price
  const [themePrice] = useState(900000); // State to store theme price

  // Load theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme") || "default";
    setSelectedTheme(savedTheme);
  }, []);

  // Apply theme to body class
  useEffect(() => {
    document.body.className = selectedTheme; // Apply the selected theme to the body
  }, [selectedTheme]);

  // Update hosting price based on selected package
  useEffect(() => {
    switch (hostingPackage) {
      case "1-year":
        setHostingPrice(700000);
        break;
      case "2-year":
        setHostingPrice(1400000);
        break;
      case "3-year":
        setHostingPrice(2100000);
        break;
      default:
        setHostingPrice(700000);
    }
  }, [hostingPackage]);

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
          `${process.env.NEXT_PUBLIC_API_URL}/check-domain?domain=${encodeURIComponent(domain)}`,
        );
        if (response.ok) {
          const data = await response.json();
          if (data.message === "Domain is available") {
            setIsApiAvailable(true);
            setDomainRecommendations([]); // Clear recommendations if domain is available
            setApiCheckError("");
            setDomainPrice(data.price || ""); // Set the price if available
          } else {
            setIsApiAvailable(false);
            setApiCheckError(data.message);
            setDomainRecommendations(data.recommendations || []); // Update recommendations from API
            setDomainPrice(""); // Clear the price if domain is not available
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

    // Calculate the total price
    const totalPrice =
      hostingPrice +
      themePrice +
      (domainPrice ? parseInt(domainPrice.replace(/[^0-9]/g, "")) : 0);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/get-snap-token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ totalPrice }), // Include totalPrice in the request body
        },
      );

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

      <div className="mb-4">
        <label
          htmlFor="theme-select"
          className="block text-sm font-medium text-gray-700"
        >
          Selected Theme:
        </label>
        <p className="mt-1 text-gray-900">{selectedTheme}</p>{" "}
        {/* Display the selected theme */}
      </div>

      <div className="mb-4">
        <label
          htmlFor="hosting-package"
          className="block text-sm font-medium text-gray-700"
        >
          Select Hosting Package:
        </label>
        <select
          id="hosting-package"
          value={hostingPackage}
          onChange={(e) => setHostingPackage(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B59C2]"
        >
          <option value="1-year">1 Year - Rp. 700.000</option>
          <option value="2-year">2 Years - Rp. 1.400.000</option>
          <option value="3-year">3 Years - Rp. 2.100.000</option>
        </select>
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
        <div>
          <div className="mb-4">
            <h2 className="text-lg font-bold">Order Summary</h2>
            <p>Domain: {domain}</p>
            {domainPrice && (
              <>
                <p className="text-green-500">
                  Domain Price: Rp. {domainPrice} / 1st Year
                </p>
                <p className="text-red-500 line-through">Rp 245.000</p>
              </>
            )}
            <p className="mt-2 text-green-500">
              Hosting Package: {hostingPackage}
            </p>
            <p className="mt-2 text-green-500">
              Hosting Price: Rp. {hostingPrice.toLocaleString()}
            </p>
            <p className="mt-2 text-green-500">
              Theme Price: Rp. {themePrice.toLocaleString()}
            </p>
            <p className="mt-2 text-green-500">
              Total: Rp.{" "}
              {(
                hostingPrice +
                themePrice +
                (domainPrice ? parseInt(domainPrice.replace(/[^0-9]/g, "")) : 0)
              ).toLocaleString()}
            </p>
          </div>
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
        </div>
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
        data-client-key={process.env.NEXT_PUBLIC_SNAP_CLIENT_KEY}
        onLoad={() => setIsSnapLoaded(true)}
      />
    </div>
  );
};

export default Home;
