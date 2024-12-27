
import { useState } from "react";
import  QRCode  from "react-qr-code";
 // Correct import for react-qr-code

export default function QRCodeGenerator() {
    const [inputValue, setInputValue] = useState("");
    const [qrCodeValue, setQrCodeValue] = useState("");

//   function handleGenerateQrCode() {
//     setQrCodeValue(input.trim()); // Update QR code value
//     setInput(""); // Clear the input field
//   }
const handleGenerateQRCode = () => {
    if (inputValue.trim() !== "") {
        
        setQrCodeValue(inputValue.trim());
        setInputValue("");
        return;
    }
  };

  return (
    <div className="ml-10 mr-10 mt-10 mb-96 items-center justify-center p-20 border-2 border-emerald-400">
      <h1 className="mb-10 text-6xl font-bold px-96 py-2 justify-center place-items-center bg-gradient-to-r from-emerald-500 via-emerald-200 to-pink-600 bg-clip-text text-transparent">
        Get your QR here
      </h1>
      <div className="flex justify-between p-20">
        {/* Input Field */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your value here"
          className="bg-transparent border-2 border-emerald-500 px-60 py-2"
        />
        <br /> <br />
        {/* Generate Button */}
        <button
          
          onClick={handleGenerateQRCode}
          className="text-xl px-5 justify-center bg-emerald-400 rounded-md active:scale-95 disabled:bg-gray-400"
        >
          Generate QR Code
        </button>
      </div>
      <div className="mx-96 place-items-center p-5 border-2 justify-center border-emerald-300">
        
      {qrCodeValue ? (
          <QRCode value={qrCodeValue} size={256} />
        ) : (
          <p className="text-gray-500">Enter a value to generate a QR code.</p>
          )}
      </div>
    </div>
  );
}
