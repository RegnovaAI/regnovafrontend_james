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










import { useRef } from "react";

export default function Home() {
  const fileInputRef = useRef();

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://regnovaai-backend.onrender.com/upload/", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || "Upload failed!");
      }

      alert(`✅ Uploaded successfully: ${data.filename || "No filename returned"}`);
    } catch (error) {
      alert(`⚠️ Upload failed: ${error.message}`);
      console.error("Upload error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to RegnovaAI</h1>
      <p className="text-lg mb-8 text-center max-w-xl">
        Your AI-powered co-pilot for document risk analysis, compliance scoring, and audit reporting.
      </p>

      <input
        type="file"
        accept=".pdf,.docx,.csv,.txt"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      <button
        onClick={handleUploadClick}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
      >
        📤 Upload Document
      </button>

      <a href="/upload" className="text-blue-600 underline hover:text-blue-800 mt-8">
        Go to Upload Page →
      </a>
    </div>
  );
}
