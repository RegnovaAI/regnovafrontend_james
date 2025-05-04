// // import { useRef } from "react";

// // export default function Home() {
// //   const fileInputRef = useRef();


 
// //   const response = await fetch("https://your-backend-url/upload/", {
// //     method: "POST",
// //     body: formData,
// //   });
  



   

// //   const handleUploadClick = () => {
// //     fileInputRef.current?.click();
// //   };

// //   const handleFileChange = (event) => {
// //     const file = event.target.files[0];
// //     if (file) {
// //       console.log("Selected file:", file.name);
// //       // ✅ Insert backend upload or GPT processing logic here
// //     }
// //   };

// //   <a href="/upload" className="text-blue-600 underline hover:text-blue-800 mt-8">
// //   Go to Upload Page →
// // </a>

// //   return (
// //     <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6">
// //       <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to RegulaAI</h1>
// //       <p className="text-lg mb-8 text-center max-w-xl">
// //         Your AI-powered co-pilot for document risk analysis, compliance scoring, and audit reporting.
// //       </p>

// //       <input
// //         type="file"
// //         accept=".pdf,.docx,.csv,.txt"
// //         ref={fileInputRef}
// //         onChange={handleFileChange}
// //         className="hidden"
// //       />

// //       <button
// //         onClick={handleUploadClick}
// //         className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
// //       >
// //         📤 Upload Document
// //       </button>
// //     </div>
// //   );
// // }















// import { useRef } from "react";

// export default function Home() {
//   const fileInputRef = useRef();

//   const handleUploadClick = () => {
//     fileInputRef.current?.click();
//   };





// // const handleFileChange = async (event) => {
// //   const file = event.target.files[0];
// //   if (!file) return;

// //   const formData = new FormData();
// //   formData.append("file", file);

// //   try {
// //     const response = await fetch("https://regnovaai-backend.onrender.com/upload/", {
// //       method: "POST",
// //       body: formData,
// //     });

// //     if (!response.ok) {
// //       throw new Error("Upload failed!");
// //     }

// //     const data = await response.json(); // Parse backend response
// //     alert(`✅ Uploaded successfully: ${data.filename}`);
// //   } catch (error) {
// //     alert(`⚠️ Upload failed: ${error.message}`);
// //   }
// // };










// const handleFileChange = async (event) => {
//   const file = event.target.files[0];
//   if (!file) return;

//   const formData = new FormData();
//   formData.append("file", file);

//   try {
//     const response = await fetch("https://regnovaai-backend.onrender.com/upload/", {
//       method: "POST",
//       body: formData,
//     });

//     const contentType = response.headers.get("content-type");

//     if (!response.ok) {
//       const errorMsg = contentType && contentType.includes("application/json")
//         ? (await response.json()).detail || "Upload failed!"
//         : "Upload failed!";
//       throw new Error(errorMsg);
//     }

//     const data = await response.json();
//     alert(`✅ Uploaded successfully: ${data.filename || "No filename returned"}`);
//   } catch (error) {
//     alert(`⚠️ Upload failed: ${error.message}`);
//     console.error(error);
//   }
// };




  






//   return (
//     <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6">
//       <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to RegulaAI</h1>
//       <p className="text-lg mb-8 text-center max-w-xl">
//         Your AI-powered co-pilot for document risk analysis, compliance scoring, and audit reporting.
//       </p>

//       <input
//         type="file"
//         accept=".pdf,.docx,.csv,.txt"
//         ref={fileInputRef}
//         onChange={handleFileChange}
//         className="hidden"
//       />

//       <button
//         onClick={handleUploadClick}
//         className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
//       >
//         📤 Upload Document
//       </button>

//       <a href="/upload" className="text-blue-600 underline hover:text-blue-800 mt-8">
//         Go to Upload Page →
//       </a>
//     </div>
//   );
// }










// import { useRef } from "react";

// export default function Home() {
//   const fileInputRef = useRef();

//   const handleUploadClick = () => {
//     fileInputRef.current?.click();
//   };

//   const handleFileChange = async (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await fetch("https://regnovaai-backend.onrender.com/upload/", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.detail || "Upload failed!");
//       }

//       alert(`✅ Uploaded successfully: ${data.filename || "No filename returned"}`);
//     } catch (error) {
//       alert(`⚠️ Upload failed: ${error.message}`);
//       console.error("Upload error:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6">
//       <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to RegnovaAI</h1>
//       <p className="text-lg mb-8 text-center max-w-xl">
//         Your AI-powered co-pilot for document risk analysis, compliance scoring, and audit reporting.
//       </p>

//       <input
//         type="file"
//         accept=".pdf,.docx,.csv,.txt"
//         ref={fileInputRef}
//         onChange={handleFileChange}
//         className="hidden"
//       />

//       <button
//         onClick={handleUploadClick}
//         className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
//       >
//         📤 Upload Document
//       </button>

//       <a href="/upload" className="text-blue-600 underline hover:text-blue-800 mt-8">
//         Go to Upload Page →
//       </a>
//     </div>
//   );
// }









'use client';
import { useState, useRef, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { generatePDFReport } from '../utils/generatePDF';
import { generateCSV } from '../utils/generateCSV';

export default function Home() {
  const fileInputRef = useRef();
  const [uploadedFile, setUploadedFile] = useState(null);
  const [riskReport, setRiskReport] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (file) => {
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://regnovaai-backend.onrender.com/upload/", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Upload failed");
      }

      setUploadedFile(data.filename);
      setRiskReport(data.risk_report || []);
    } catch (err) {
      alert("Upload failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length) {
      handleFileUpload(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'], 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'], 'text/csv': ['.csv'], 'text/plain': ['.txt'] }
  });

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-blue-700 mb-4">Welcome to RegnovaAI</h1>
      <p className="text-lg text-center max-w-2xl mb-8">
        Your AI-powered co-pilot for document risk analysis, compliance scoring, and audit reporting.
      </p>

      <div {...getRootProps()} className="w-full max-w-xl border-4 border-dashed border-blue-300 rounded-xl p-6 text-center bg-white shadow mb-6 cursor-pointer">
        <input {...getInputProps()} />
        <p className="text-gray-600">{isDragActive ? "Drop the file here..." : "Drag & Drop your document here or click to browse"}</p>
      </div>

      {loading && <p className="text-blue-500">Analyzing document...</p>}

      {uploadedFile && riskReport.length > 0 && (
        <div className="w-full max-w-4xl bg-white shadow p-6 rounded-xl mt-6">
          <h2 className="text-2xl font-semibold mb-4">📝 Risk Report for: <span className="text-blue-700">{uploadedFile}</span></h2>
          <div className="flex justify-end space-x-4 mb-4">
            <button onClick={() => generatePDFReport(riskReport, uploadedFile)} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">📄 Export PDF</button>
            <button onClick={() => generateCSV(riskReport, uploadedFile)} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">📊 Export CSV</button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300">
              <thead className="bg-gray-200 text-gray-800">
                <tr>
                  <th className="px-4 py-2">#</th>
                  <th className="px-4 py-2">Issue</th>
                  <th className="px-4 py-2">Risk Level</th>
                  <th className="px-4 py-2">Explanation</th>
                  <th className="px-4 py-2">Suggestion</th>
                </tr>
              </thead>
              <tbody>
                {riskReport.map((risk, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2 font-semibold">{index + 1}</td>
                    <td className="px-4 py-2">{risk.issue}</td>
                    <td className={`px-4 py-2 font-bold ${risk.risk_level === "High" ? "text-red-600" : risk.risk_level === "Medium" ? "text-yellow-600" : "text-green-600"}`}>{risk.risk_level}</td>
                    <td className="px-4 py-2">{risk.explanation}</td>
                    <td className="px-4 py-2">{risk.suggestion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <a href="/upload" className="mt-8 text-blue-600 underline hover:text-blue-800">Go to Upload Page →</a>
    </div>
  );
}
