"use client";
import { useState, useEffect } from "react";
import Script from "next/script";
import { client } from "../client";
import {
  ConnectButton,
  useActiveAccount,
  useActiveWallet,
  useConnect,
  useDisconnect,
} from "thirdweb/react";
import { toUnits } from "thirdweb/utils";
import { sepolia } from "thirdweb/chains";
import { prepareContractCall } from "thirdweb";
import { getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { useSendTransaction } from "thirdweb/react";
import { Metadata } from "next";
function Payment() {
  const [resultJson, setResultJson] = useState("");
  const [isSnapLoaded, setIsSnapLoaded] = useState(false);
  const [isApiAvailable, setIsApiAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [apiCheckError, setApiCheckError] = useState("");
  const [domain, setDomain] = useState("");
  const [domainRecommendations, setDomainRecommendations] = useState([]);
  const [domainPrice, setDomainPrice] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("default");
  const [hostingPackage, setHostingPackage] = useState("1-year");
  const [hostingPrice, setHostingPrice] = useState(700000);
  const [themePrice] = useState(900000);
  const [name, setName] = useState(""); // State to store user name
  const [email, setEmail] = useState(""); // State to store user email
  const [address, setAddress] = useState(""); // State to store user address
  const [whatsapp, setWhatsapp] = useState(""); // State to store WhatsApp number

  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme") || "default";
    setSelectedTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.body.className = selectedTheme;
  }, [selectedTheme]);

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
            setDomainRecommendations([]);
            setApiCheckError("");
            setDomainPrice(data.price || "");
          } else {
            setIsApiAvailable(false);
            setApiCheckError(data.message);
            setDomainRecommendations(data.recommendations || []);
            setDomainPrice("");
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

    if (!name || !email || !address || !whatsapp) {
      alert("Please fill in all required fields before proceeding.");
      return;
    }

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
          body: JSON.stringify({
            totalPrice,
            name,
            email,
            address,
            whatsapp,
          }),
        },
      );

      const data = await response.json();
      if (data.token) {
        window.snap.pay(data.token, {
          onSuccess: function (result: any) {
            setResultJson(JSON.stringify(result, null, 2));
            sendWhatsAppMessage(result);
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

  const sendWhatsAppMessage = (paymentResult: any) => {
    const message = `Hi ${name}, your payment was successful. Details: ${JSON.stringify(paymentResult, null, 2)}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(whatsapp)}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="mx-auto max-w-md p-4">
      <h1 className="mb-4 text-2xl font-bold">Payment Page</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Masukkan domain"
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
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Nama:
        </label>
        <input
          placeholder="Masukkan Nama"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B59C2]"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email:
        </label>
        <input
          placeholder="Masukkan Email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B59C2]"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700"
        >
          Alamat:
        </label>
        <input
          placeholder="Masukkan Alamat"
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B59C2]"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="whatsapp"
          className="block text-sm font-medium text-gray-700"
        >
          WhatsApp Number:
        </label>
        <input
          placeholder="Masukkan Nomor WhatsApp"
          id="whatsapp"
          type="tel"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B59C2]"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="theme-select"
          className="block text-sm font-medium text-gray-700"
        >
          Selected Theme:
        </label>
        <p className="mt-1 text-gray-900">{selectedTheme}</p>
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
          <option value="1-year">1 Year - IDR 700.000</option>
          <option value="2-year">2 Years - IDR 1.400.000</option>
          <option value="3-year">3 Years - IDR 2.100.000</option>
        </select>
      </div>

      {isLoading && (
        <div className="my-4 text-sm text-gray-600">Loading...</div>
      )}
      {!isLoading && apiCheckError && (
        <div className="my-4 text-sm text-red-600">{apiCheckError}</div>
      )}
      {!isLoading && !apiCheckError && (
        <>
          <div className="mb-4">
            <label
              htmlFor="domain-price"
              className="block text-sm font-medium text-gray-700"
            >
              Domain Price:
            </label>
            <p className="mt-1 text-gray-900">
              {domainPrice} / 1 tahun
              {""}
              <span className="text-red-500 line-through">Rp 350.000</span>
            </p>
          </div>

          <button
            onClick={handlePayment}
            className="w-full rounded-md bg-[#5B59C2] px-4 py-2 text-white shadow-sm hover:bg-[#5B59C2] focus:outline-none focus:ring-2 focus:ring-[#5B59C2]"
            disabled={!isSnapLoaded}
          >
            Pay Now
          </button>
          <CustomAccountFactory />

          <pre className="mt-4 max-w-md overflow-auto bg-gray-100 p-2 text-xs text-gray-800">
            {resultJson}
          </pre>
        </>
      )}

      <Script
        src="https://app.midtrans.com/snap/snap.js"
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
        onLoad={() => setIsSnapLoaded(true)}
      />
    </div>
  );
}
const contract = getContract({
  client,
  chain: defineChain(11155111),
  address: "0x72A6F19203027bB12B6b13B62B394f81b80500b1",
});
function CustomAccountFactory() {
  const { mutate: sendTransaction } = useSendTransaction();
  const account = useActiveAccount();
  const connectedWallet = useActiveWallet();
  return (
    <div className="mb-20 flex flex-col items-center md:mb-20">
      <p className="mb-4 text-base md:mb-4">Connect to blockchain to pay</p>
      <ConnectButton
        client={client}
        accountAbstraction={{
          factoryAddress: "0x72A5036fbc091E0160FA4d9275D583710c9F1815",
          chain: sepolia,
          sponsorGas: true,
        }}
      />
      {account && connectedWallet ? (
        <button
          className="mt-2 w-full rounded-md bg-[#5B59C2] px-4 py-2 text-white shadow-sm hover:bg-[#5B59C2] focus:outline-none focus:ring-2 focus:ring-[#5B59C2]"
          onClick={() => {
            const transaction = prepareContractCall({
              contract,
              method:
                "function addData(int256 temperature, int256 humidity, int256 pressure) public",
              params: [toUnits("12", 0), toUnits("12", 0), toUnits("12", 0)],
            });
            sendTransaction(transaction);
          }}
        >
          Pay with blockchain Now
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Payment;
