"use client";
import { useState } from "react";

const AddressForm = () => {
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // You can handle form submission here
    console.log({
      lastName,
      country,
      province,
      city,
      address,
      postalCode,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md p-4">
      <h1 className="mb-4 text-2xl font-bold">Address Form</h1>

      <div className="mb-4">
        <label
          htmlFor="last-name"
          className="block text-sm font-medium text-gray-700"
        >
          Nama Belakang (opsional)
        </label>
        <input
          type="text"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Masukkan nama belakang"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B59C2]"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-700"
        >
          Negara Domisili
        </label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Masukkan negara domisili"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B59C2]"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="province"
          className="block text-sm font-medium text-gray-700"
        >
          Kabupaten/Provinsi (opsional)
        </label>
        <input
          type="text"
          id="province"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          placeholder="Masukkan kabupaten/provinsi"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B59C2]"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-700"
        >
          Kota (opsional)
        </label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Masukkan kota"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B59C2]"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700"
        >
          Alamat (opsional)
        </label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Masukkan alamat"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B59C2]"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="postal-code"
          className="block text-sm font-medium text-gray-700"
        >
          Kode Pos (opsional)
        </label>
        <input
          type="text"
          id="postal-code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          placeholder="Masukkan kode pos"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B59C2]"
        />
      </div>

      <button
        type="submit"
        className="mt-4 w-full rounded-md bg-[#5B59C2] px-4 py-2 text-white shadow-sm hover:bg-[#4A49A6] focus:outline-none focus:ring-2 focus:ring-[#5B59C2]"
      >
        Submit
      </button>
    </form>
  );
};

export default AddressForm;
