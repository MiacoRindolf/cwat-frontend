import React, { useState } from 'react';

function SummaryReport() {
  const [report, setReport] = useState('');

  const generateReport = () => {
    // You can write code here to generate the summary and report based on project data
    // Set the generated report using setReport()
    const generatedReport = 'This is a sample report. Replace with actual report data.';
    setReport(generatedReport);
  };

  return (
    <div>
      <h2>Generate Summary & Report</h2>
      <button onClick={generateReport}>Generate Report</button>
      {report && (
        <div>
          <h3>Generated Report</h3>
          <pre>{report}</pre>
        </div>
      )}
    </div>
  );
}

export default SummaryReport;
