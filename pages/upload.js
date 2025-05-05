// 'use client';

// import { generatePDFReport } from '../utils/generatePDF';
// import { generateCSV } from "../utils/generateCSV";
// import { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import RiskCard from '../components/RiskCard';

// export default function UploadPage() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [riskReport, setRiskReport] = useState([]);

//   const onDrop = useCallback(async (acceptedFiles) => {
//     const file = acceptedFiles[0];
//     if (file) {
//       setSelectedFile(file);
//       console.log('✅ File selected:', file.name);

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         const response = await fetch("http://localhost:8000/upload/", {
//           method: "POST",
//           body: formData,
//         });

//         const data = await response.json();
//         console.log("📥 Risk Report:", data.risk_report);

//         setRiskReport(data.risk_report);

//         if (data.content) {
//           alert("✅ File uploaded! Preview:\n" + data.content.slice(0, 300));
//         } else {
//           alert("⚠️ No content returned");
//         }
//       } catch (error) {
//         console.error("❌ Upload failed:", error);
//         alert("❌ Upload failed. Check console.");
//       }
//     }
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: {
//       'application/pdf': [],
//       'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [],
//       'text/plain': [],
//       'text/csv': [],
//     },
//     maxFiles: 1,
//   });

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col items-center justify-center px-4 py-10">
//       <div className="max-w-3xl mx-auto">

         

//         <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">Upload a Document</h1>
//         <p className="text-gray-600 text-center mb-6 max-w-xl mx-auto">
//           Drag and drop your compliance document or click the box to upload.
//         </p>

//         <div {...getRootProps()} className="group w-full h-80 border-4 border-dashed border-blue-500 rounded-lg flex flex-col items-center justify-center text-center px-4 cursor-pointer hover:border-blue-600 hover:bg-blue-50 transition">
//           <input {...getInputProps()} />
//           <p className="text-lg text-gray-700">
//             {isDragActive ? '📂 Drop your file here...' : '📤 Click or Drop to Upload'}
//           </p>
//           <p className="text-sm text-gray-400 mt-2">(.pdf, .docx, .csv, .txt)</p>

//           <div className="w-24 h-24 mt-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-100 flex items-center justify-center">
//             <span className="text-gray-400">⬇</span>
//           </div>
//         </div>

//         {selectedFile && (
//           <div className="mt-6 bg-green-100 text-green-800 px-4 py-2 rounded shadow-sm text-center">
//             ✅ File Selected: {selectedFile.name}
//           </div>
//         )}

//         {riskReport.length > 0 && (
//           <div className="mt-12 max-w-2xl w-full mx-auto">
//             <h2 className="text-2xl font-semibold mb-4 text-center">
//               🛡️ Flagged Compliance Risks
//             </h2>

//             {riskReport.map((risk, index) => (
//               <RiskCard key={index} {...risk} />
//             ))}

//             <div className="text-center mt-10">
//               <button
//                 onClick={() => generateCSV(selectedFile?.name || "document", riskReport)}
//                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 shadow mr-2"
//               >
//                 📊 Download CSV Report
//               </button>

//               <button
//                 onClick={() => generatePDFReport(selectedFile?.name || "document", riskReport)}
//                 className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow"
//               >
//                 📄 Download PDF Report
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }







// 'use client';

// import { generatePDFReport } from '../utils/generatePDF';
// import { generateCSV } from '../utils/generateCSV';
// import { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import RiskCard from '../components/RiskCard';

// export default function UploadPage() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [riskReport, setRiskReport] = useState([]);
//   const [progress, setProgress] = useState(0);

//   const onDrop = useCallback(async (acceptedFiles) => {
//     const file = acceptedFiles[0];
//     if (file) {
//       setSelectedFile(file);
//       setProgress(10);
//       console.log('✅ File selected:', file.name);

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         const response = await fetch("http://localhost:8000/upload/", {
//           method: "POST",
//           body: formData,
//         });

//         setProgress(60);
//         const data = await response.json();
//         console.log("📥 Risk Report:", data.risk_report);

//         setRiskReport(data.risk_report);
//         setProgress(100);

//         if (data.content) {
//           alert("✅ File uploaded! Preview:\n" + data.content.slice(0, 300));
//         } else {
//           alert("⚠️ No content returned");
//         }
//       } catch (error) {
//         console.error("❌ Upload failed:", error);
//         alert("❌ Upload failed. Check console.");
//         setProgress(0);
//       }
//     }
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: {
//       'application/pdf': [],
//       'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [],
//       'text/plain': [],
//       'text/csv': [],
//     },
//     maxFiles: 1,
//   });

//   const summary = {
//     High: riskReport.filter(r => r.risk_level === "High").length,
//     Medium: riskReport.filter(r => r.risk_level === "Medium").length,
//     Low: riskReport.filter(r => r.risk_level === "Low").length,
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 py-10">
//       <div className="max-w-3xl mx-auto">
//         <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">Upload a Document for Compliance Audit</h1>
//         <p className="text-gray-600 text-center mb-6 max-w-xl mx-auto">
//           Drag and drop your compliance document or click the box to upload.
//         </p>

//         <div {...getRootProps()} className="group w-full h-64 border-4 border-dashed border-blue-500 rounded-lg flex flex-col items-center justify-center text-center px-4 cursor-pointer hover:border-blue-600 hover:bg-blue-50 transition">
//           <input {...getInputProps()} />
//           <p className="text-lg text-gray-700">
//             {isDragActive ? '📂 Drop your file here...' : '📤 Click or Drop to Upload'}
//           </p>
//           <p className="text-sm text-gray-400 mt-2">Accepted: .pdf, .docx, .csv, .txt</p>
//           <div className="w-16 h-16 mt-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-100 flex items-center justify-center">
//             <span className="text-gray-400">⬇</span>
//           </div>
//         </div>

//         {selectedFile && (
//           <div className="mt-6 bg-green-100 text-green-800 px-4 py-2 rounded shadow-sm">
//             ✅ File Selected: {selectedFile.name}
//           </div>
//         )}

//         {progress > 0 && (
//           <div className="w-full bg-gray-200 rounded-full h-4 mt-6">
//             <div
//               className="bg-blue-600 h-4 rounded-full transition-all duration-700"
//               style={{ width: `${progress}%` }}
//             ></div>
//           </div>
//         )}

//         {riskReport.length > 0 && (
//           <div className="mt-10">
//             <h2 className="text-2xl font-semibold mb-4 text-center">🛡️ Flagged Compliance Risks</h2>

//             {/* Summary Section */}
//             <div className="flex justify-center gap-6 mb-6">
//               <div className="bg-red-100 text-red-800 px-4 py-2 rounded shadow">High: {summary.High}</div>
//               <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded shadow">Medium: {summary.Medium}</div>
//               <div className="bg-green-100 text-green-800 px-4 py-2 rounded shadow">Low: {summary.Low}</div>
//             </div>

//             <div className="space-y-4 animate-fade-in-up">
//               {riskReport.map((risk, index) => (
//                 <RiskCard key={index} {...risk} />
//               ))}
//             </div>

//            {/* ✅ Buttons Row - Centered & Larger */}
//            <div className="mt-80 flex flex-col sm:flex-row justify-center items-center gap-6">
//               <button
//                  onClick={() => generateCSV(selectedFile?.name || "document", riskReport)}
//                  className="bg-green-600 text-white text-lg px-6 py-3 rounded-lg hover:bg-green-700 shadow-md transition"
//               >
//                  📊 Download CSV Report
//               </button>

//               <button
//                 onClick={() => generatePDFReport(selectedFile?.name || "document", riskReport)}
//                 className="bg-blue-600 text-white text-lg px-6 py-3 rounded-lg hover:bg-blue-700 shadow-md transition"
//               >
//              📄 Download PDF Report
//               </button>
//              </div>


//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




// 'use client';

// import { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import RiskCard from '../components/RiskCard';
// import { generatePDFReport } from '../utils/generatePDF';
// import { generateCSV } from '../utils/generateCSV';

// export default function UploadPage() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [riskReport, setRiskReport] = useState([]);
//   const [uploading, setUploading] = useState(false);

//   const onDrop = useCallback(async (acceptedFiles) => {
//     const file = acceptedFiles[0];
//     if (file) {
//       setSelectedFile(file);
//       setUploading(true);

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         const response = await fetch("http://localhost:8000/upload/", {
//           method: "POST",
//           body: formData,
//         });

//         const data = await response.json();
//         setRiskReport(data.risk_report);
//         setUploading(false);

//         if (data.content) {
//           alert("✅ File uploaded! Preview:\n" + data.content.slice(0, 300));
//         } else {
//           alert("⚠️ No content returned");
//         }
//       } catch (error) {
//         console.error("❌ Upload failed:", error);
//         alert("❌ Upload failed. Check console.");
//         setUploading(false);
//       }
//     }
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: {
//       'application/pdf': [],
//       'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [],
//       'text/plain': [],
//       'text/csv': [],
//     },
//     maxFiles: 1,
//   });

//   const countByRisk = {
//     High: riskReport.filter(r => r.risk_level === 'High').length,
//     Medium: riskReport.filter(r => r.risk_level === 'Medium').length,
//     Low: riskReport.filter(r => r.risk_level === 'Low').length,
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 px-4 py-10">
//       <div className="max-w-3xl mx-auto text-center">
//         <h1 className="text-4xl font-bold text-blue-700 mb-4">Upload a Document for Compliance Audit</h1>
//         <p className="text-gray-600 mb-6">
//           Drag and drop your compliance document or click the box to upload.
//         </p>

//         <div
//           {...getRootProps()}
//           className="group w-full h-60 border-4 border-dashed border-blue-500 rounded-lg flex flex-col items-center justify-center text-center px-4 cursor-pointer hover:border-blue-600 hover:bg-blue-50 transition"
//         >
//           <input {...getInputProps()} />
//           <p className="text-lg text-gray-700">
//             {isDragActive ? '📂 Drop your file here...' : '📤 Click or Drop to Upload'}
//           </p>
//           <p className="text-sm text-gray-400 mt-2">Accepted: .pdf, .docx, .csv, .txt</p>
//           <div className="w-16 h-16 mt-4 border-2 border-dashed border-gray-300 rounded-lg bg-gray-100 flex items-center justify-center">
//             <span className="text-gray-400 text-2xl">⬇</span>
//           </div>
//         </div>

//         {uploading && (
//           <div className="w-full mt-6">
//             <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-300">
//               <div className="bg-blue-600 h-3 rounded-full animate-pulse w-2/3"></div>
//             </div>
//             <p className="text-sm text-blue-600 mt-2">Uploading and analyzing...</p>
//           </div>
//         )}

//         {selectedFile && (
//           <div className="mt-6 bg-green-100 text-green-800 px-4 py-2 rounded shadow-sm">
//             ✅ File Selected: {selectedFile.name}
//           </div>
//         )}

//         {riskReport.length > 0 && (
//           <div className="mt-10">
//             <h2 className="text-2xl font-semibold mb-4 text-blue-800">
//               🛡️ Flagged Compliance Risks
//             </h2>

//             <div className="mb-6">
//               <p className="text-lg">
//                 <span className="text-red-600 font-semibold">High:</span> {countByRisk.High} &nbsp;
//                 <span className="text-yellow-600 font-semibold">Medium:</span> {countByRisk.Medium} &nbsp;
//                 <span className="text-green-600 font-semibold">Low:</span> {countByRisk.Low}
//               </p>
//             </div>

//             {riskReport.map((risk, index) => (
//               <RiskCard key={index} {...risk} />
//             ))}

//             <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
//               <button
//                 onClick={() => generateCSV(selectedFile?.name || "document", riskReport)}
//                 className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 shadow text-lg"
//               >
//                 📊 Download CSV Report
//               </button>

//               <button
//                 onClick={() => generatePDFReport(selectedFile?.name || "document", riskReport)}
//                 className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 shadow text-lg"
//               >
//                 📄 Download PDF Report
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }







// 'use client';

// import { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import RiskCard from '../components/RiskCard';
// import { generatePDFReport } from '../utils/generatePDF';
// import { generateCSV } from '../utils/generateCSV';

// export default function UploadPage() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [riskReport, setRiskReport] = useState([]);
//   const [uploading, setUploading] = useState(false);

//   const onDrop = useCallback(async (acceptedFiles) => {
//     const file = acceptedFiles[0];
//     if (file) {
//       setSelectedFile(file);
//       setUploading(true);

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         const response = await fetch("http://localhost:8000/upload/", {
//           method: "POST",
//           body: formData,
//         });

//         const data = await response.json();
//         setRiskReport(data.risk_report);
//         setUploading(false);

//         if (data.content) {
//           alert("✅ File uploaded! Preview:\n" + data.content.slice(0, 300));
//         } else {
//           alert("⚠️ No content returned");
//         }
//       } catch (error) {
//         console.error("❌ Upload failed:", error);
//         alert("❌ Upload failed. Check console.");
//         setUploading(false);
//       }
//     }
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: {
//       'application/pdf': [],
//       'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [],
//       'text/plain': [],
//       'text/csv': [],
//     },
//     maxFiles: 1,
//   });

//   const countByRisk = {
//     High: riskReport.filter(r => r.risk_level === 'High').length,
//     Medium: riskReport.filter(r => r.risk_level === 'Medium').length,
//     Low: riskReport.filter(r => r.risk_level === 'Low').length,
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 px-4 py-10 flex flex-col items-center">
//       <div className="max-w-3xl mx-auto text-center">
//         <h1 className="text-4xl font-bold text-blue-700 mb-4">Upload a Document for Compliance Audit</h1>
//         <p className="text-gray-600 mb-6">
//           Drag and drop your compliance document or click the box to upload.
//         </p>



//         <div className="flex justify-center mt-10">
//   <div
//     {...getRootProps()}
//     className="w-full max-w-[420px] border-2 border-dashed border-blue-400 bg-blue-50 rounded-xl p-6 shadow-md transition hover:bg-blue-100 cursor-pointer"
//   >
//     <input {...getInputProps()} />

//     <div className="flex flex-col items-center justify-center space-y-3">
//       {/* Properly sized icon */}
      
//        <svg
//          xmlns="http://www.w3.org/2000/svg"
//          className="w-8 h-8 text-blue-600"
//          width="48"
//          height="48"
//          viewBox="0 0 24 24"
//          fill="none"
//          stroke="currentColor"
//          strokeWidth="2"
//          strokeLinecap="round"
//          strokeLinejoin="round"
//         > 
//             <path d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1" />
//             <path d="M12 12v8m0-8l4 4m-4-4l-4 4m0-4V4" />
//       </svg>

//       <p className="text-lg font-semibold text-gray-700">Drag & Drop files here</p>
//       <p className="text-sm text-gray-500">or</p>

//       <button className="px-4 py-1 border border-blue-500 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
//         Browse Files
//       </button>
//     </div>
//   </div>
// </div>










//         {uploading && (
//           <div className="w-full mt-6">
//             <div className="w-full bg-gray-200 rounded-full h-3">
//               <div className="bg-blue-600 h-3 rounded-full animate-pulse w-2/3"></div>
//             </div>
//             <p className="text-sm text-blue-600 mt-2">Uploading and analyzing...</p>
//           </div>
//         )}

//         {selectedFile && (
//           <div className="mt-6 bg-green-100 text-green-800 px-4 py-2 rounded shadow-sm">
//             ✅ File Selected: {selectedFile.name}
//           </div>
//         )}

//         {riskReport.length > 0 && (
//           <div className="mt-10">
//             <h2 className="text-2xl font-semibold mb-4 text-blue-800">
//               🛡️ Flagged Compliance Risks
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg mb-8">
//               <div className="bg-red-100 text-red-800 py-2 px-4 rounded-lg shadow">🟥 High: {countByRisk.High}</div>
//               <div className="bg-yellow-100 text-yellow-800 py-2 px-4 rounded-lg shadow">🟧 Medium: {countByRisk.Medium}</div>
//               <div className="bg-green-100 text-green-800 py-2 px-4 rounded-lg shadow">🟩 Low: {countByRisk.Low}</div>
//             </div>

//             {riskReport.map((risk, index) => (
//               <RiskCard key={index} {...risk} />
//             ))}

//             <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
//               <button
//                 onClick={() => generateCSV(selectedFile?.name || "document", riskReport)}
//                 className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 shadow text-lg"
//               >
//                 📊 Download CSV Report
//               </button>

//               <button
//                 onClick={() => generatePDFReport(selectedFile?.name || "document", riskReport)}
//                 className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 shadow text-lg"
//               >
//                 📄 Download PDF Report
//               </button>
//             </div>

//             <div className="mb-12"></div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




'use client';
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import RiskCard from '../components/RiskCard';
import { generatePDFReport } from '../utils/generatePDF';
import { generateCSV } from '../utils/generateCSV';

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [riskReport, setRiskReport] = useState([]);
  const [uploading, setUploading] = useState(false);

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setSelectedFile(file);
      setUploading(true);

      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("http://localhost:8000/upload/", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        setRiskReport(data.risk_report);
        setUploading(false);

        if (data.content) {
          alert("✅ File uploaded! Preview:\n" + data.content.slice(0, 300));
        } else {
          alert("⚠️ No content returned");
        }
      } catch (error) {
        console.error("❌ Upload failed:", error);
        alert("❌ Upload failed. Check console.");
        setUploading(false);
      }
    }
  }, []);

  const loadDemoFile = () => {
    const demoRisks = [
      {
        issue: "Missing Encryption Policy",
        risk_level: "High",
        explanation: "The document lacks guidelines for encrypting data at rest and in transit.",
        suggestion: "Add a section detailing mandatory encryption practices."
      },
      {
        issue: "Weak Password Requirements",
        risk_level: "Medium",
        explanation: "Password complexity rules are not strong enough.",
        suggestion: "Set minimum password length and complexity rules."
      },
      {
        issue: "Outdated Incident Response Plan",
        risk_level: "Low",
        explanation: "Incident response procedures reference old regulations.",
        suggestion: "Update IRP to align with modern compliance needs."
      }
    ];

    setSelectedFile({ name: "Demo_Document.pdf" });
    setRiskReport(demoRisks);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': [],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [],
      'text/plain': [],
      'text/csv': [],
    },
    maxFiles: 1,
  });

  const countByRisk = {
    High: riskReport.filter(r => r.risk_level === 'High').length,
    Medium: riskReport.filter(r => r.risk_level === 'Medium').length,
    Low: riskReport.filter(r => r.risk_level === 'Low').length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 px-4 py-10 flex flex-col items-center">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Upload a Document for Compliance Audit</h1>
        <p className="text-gray-600 mb-6">
          Drag and drop your compliance document or click the box to upload.
        </p>







        <div className="flex justify-center mt-10">
  <div
    {...getRootProps()}
    className="w-full max-w-[420px] border-2 border-dashed border-blue-400 bg-blue-50 rounded-xl p-6 shadow-md transition hover:bg-blue-100 cursor-pointer"
  >
    <input {...getInputProps()} />

    <div className="flex flex-col items-center justify-center space-y-3">

      {/* UPDATED ICON STARTS HERE */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-1 h-1 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor" 
        width="40"
        height="40"
         >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M16 7l-4-4m0 0L8 7m4-4v12" />
      </svg>
      {/* UPDATED ICON ENDS HERE */}

      <p className="text-lg font-semibold text-gray-700">Drag & Drop files here</p>
      <p className="text-sm text-gray-500">or</p>

      <button className="px-4 py-1 border border-blue-500 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
        Browse Files
      </button>
    </div>
  </div>
</div>





        {/* 👇 Demo Button Added here */}
        <div className="mt-6">
          <button
            onClick={loadDemoFile}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded shadow text-lg"
          >
            🚀 Try Demo File
          </button>
        </div>

        {uploading && (
          <div className="w-full mt-6">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-blue-600 h-3 rounded-full animate-pulse w-2/3"></div>
            </div>
            <p className="text-sm text-blue-600 mt-2">Uploading and analyzing...</p>
          </div>
        )}

        {selectedFile && (
          <div className="mt-6 bg-green-100 text-green-800 px-4 py-2 rounded shadow-sm">
            ✅ File Selected: {selectedFile.name}
          </div>
        )}

        {riskReport.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">
              🛡️ Flagged Compliance Risks
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg mb-8">
              <div className="bg-red-100 text-red-800 py-2 px-4 rounded-lg shadow">🟥 High: {countByRisk.High}</div>
              <div className="bg-yellow-100 text-yellow-800 py-2 px-4 rounded-lg shadow">🟧 Medium: {countByRisk.Medium}</div>
              <div className="bg-green-100 text-green-800 py-2 px-4 rounded-lg shadow">🟩 Low: {countByRisk.Low}</div>
            </div>

            {riskReport.map((risk, index) => (
                <div key={index} className="mt-18">
                   <RiskCard {...risk} />
                      </div>
                         ))}

            <div className="mt-12  flex flex-col sm:flex-row justify-center items-center gap-6">
              <button
                onClick={() => generateCSV(selectedFile?.name || "document", riskReport)}
                className="mt-4 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 shadow text-lg"
              >
                📊 Download CSV Report
              </button>

              <button
                onClick={() => generatePDFReport(selectedFile?.name || "document", riskReport)}
                className="mt-8 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 shadow text-lg"
              >
                📄 Download PDF Report
              </button>
            </div>

            <div className="mb-24"></div>
          </div>
        )}
      </div>
    </div>
  );
}
