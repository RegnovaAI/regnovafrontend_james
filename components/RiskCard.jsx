// export default function RiskCard({ issue, risk_level, explanation, suggestion }) {
//   let badgeColor = "bg-gray-300 text-gray-800";
//   let badgeText = "⚪";
//   let borderColor = "border-gray-200";

//   if (risk_level === "High") {
//     badgeColor = "bg-red-100 text-red-800";
//     badgeText = "🟥";
//     borderColor = "border-red-300";
//   } else if (risk_level === "Medium") {
//     badgeColor = "bg-yellow-100 text-yellow-800";
//     badgeText = "🟧";
//     borderColor = "border-yellow-300";
//   } else if (risk_level === "Low") {
//     badgeColor = "bg-green-100 text-green-800";
//     badgeText = "🟩";
//     borderColor = "border-green-300";
//   }
  


  


//   return (
//     <div className={`border-l-4 p-5 mb-6 shadow-sm bg-white rounded-lg ${borderColor}`}>
//       <h3 className="text-xl font-bold text-blue-900 mb-2">🛡️ {issue}</h3>

//       <div className={`inline-block px-2 py-1 rounded-full text-sm font-medium ${badgeColor} mb-3`}>
//         {badgeText} Risk Level: {risk_level}
//       </div>

//       <p className="mb-3 text-gray-700">
//         <strong>💡 Explanation:</strong> <em>{explanation}</em>
//       </p>

//       <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-3 rounded-md text-sm mt-4">
//         <strong>🧠 Suggestion:</strong> {suggestion}
//       </div>
//     </div>
//   );

//   {riskReport.length > 0 && (
//     <div className="mt-8 max-w-2xl w-full">
//       <h2 className="text-2xl font-semibold mb-4 text-center">
//         🛡️ Flagged Compliance Risks
//       </h2>
  
//       {riskReport.map((risk, index) => (
//         <RiskCard key={index} {...risk} />
//       ))}
  
//       {/* ✅ PDF Button */}
//       <div className="text-center mt-4">
//         <button
//           onClick={() =>
//             generatePDFReport(selectedFile?.name || "document", riskReport)
//           }
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow"
//         >
//           📄 Download PDF Report
//         </button>
//       </div>
//     </div>
//   )}
  

// }






export default function RiskCard({ issue, risk_level, explanation, suggestion }) {
  let badgeColor = "bg-gray-300 text-gray-800";
  let badgeText = "⚪";
  let borderColor = "border-gray-300";

  if (risk_level === "High") {
    badgeColor = "bg-red-100 text-red-800";
    badgeText = "🟥";
    borderColor = "border-red-400";
  } else if (risk_level === "Medium") {
    badgeColor = "bg-yellow-100 text-yellow-800";
    badgeText = "🟧";
    borderColor = "border-yellow-400";
  } else if (risk_level === "Low") {
    badgeColor = "bg-green-100 text-green-800";
    badgeText = "🟩";
    borderColor = "border-green-400";
  }

  return (
    <div className={`border-l-4 p-5 mb-12 shadow-md bg-white rounded-lg transition-transform transform hover:scale-[1.01] ${borderColor}`}>
      <h3 className="text-xl font-semibold text-blue-900 mb-2 flex items-center">
        🛡️ {issue}
      </h3>

      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${badgeColor} mb-3`}>
        {badgeText} Risk Level: {risk_level}
      </div>

      <p className="mb-3 text-gray-700 leading-relaxed">
        <strong>💡 Explanation:</strong> <em>{explanation}</em>
      </p>

      <div className="mb-3 bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-3 rounded-md text-sm mb-6">
        <strong>🧠 Suggestion:</strong> {suggestion}
      </div>
    </div>
  );
}











// 'use client';

// export default function RiskCard({ issue, risk_level, explanation, suggestion }) {
//   let badgeColor = "bg-gray-300 text-gray-800";
//   let badgeText = "⚪️";
//   let borderColor = "border-gray-300";

//   if (risk_level === "High") {
//     badgeColor = "bg-red-100 text-red-800";
//     badgeText = "🟥";
//     borderColor = "border-red-400";
//   } else if (risk_level === "Medium") {
//     badgeColor = "bg-yellow-100 text-yellow-800";
//     badgeText = "🟧";
//     borderColor = "border-yellow-400";
//   } else if (risk_level === "Low") {
//     badgeColor = "bg-green-100 text-green-800";
//     badgeText = "🟩";
//     borderColor = "border-green-400";
//   }

//   return (
//     <div className={`border-l-4 ${borderColor} p-6 rounded-lg shadow-md bg-white mb-6`}>
      
//       <div className="flex items-center mb-2">
//         <span className={`px-2 py-1 rounded-full text-xs font-bold ${badgeColor} mr-3`}>
//           {badgeText} {risk_level} Risk
//         </span>
//         <h3 className="text-xl font-semibold text-blue-900">{issue}</h3>
//       </div>

//       <p className="text-gray-700 mb-4">
//         <span className="font-semibold text-yellow-600">💡 Explanation:</span> <em>{explanation}</em>
//       </p>

//       <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
//         <span className="font-semibold text-pink-600">🧠 Suggestion:</span> {suggestion}
//       </div>

//     </div>
//   );
// }
