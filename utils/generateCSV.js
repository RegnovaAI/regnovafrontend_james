// export function generateCSV(filename, riskReport) {
//     const headers = ["Issue", "Risk Level", "Explanation", "Suggestion"];
//     const rows = riskReport.map(risk => [
//       `"${risk.issue}"`,
//       `"${risk.risk_level}"`,
//       `"${risk.explanation}"`,
//       `"${risk.suggestion}"`
//     ]);
  
//     let csvContent = headers.join(",") + "\n" + rows.map(e => e.join(",")).join("\n");
  
//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     const link = document.createElement("a");
//     const url = URL.createObjectURL(blob);
  
//     link.setAttribute("href", url);
//     link.setAttribute("download", `${filename.replace(/\.[^/.]+$/, "")}-RiskReport.csv`);
//     link.style.visibility = "hidden";
  
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }
  
 
  



  export function generateCSV(filename, riskReport) {
    const headers = ["Issue", "Risk Level", "Explanation", "Suggestion"];
    const rows = riskReport.map(item =>
      [item.issue, item.risk_level, item.explanation, item.suggestion]
    );
  
    let csvContent = [headers, ...rows]
      .map(e => e.map(cell => `"${(cell || '').replace(/"/g, '""')}"`).join(","))
      .join("\n");
  
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
  
    link.setAttribute("href", url);
    link.setAttribute("download", `${filename}-RegulaAI-Audit.csv`);
    link.click();
  }
  
