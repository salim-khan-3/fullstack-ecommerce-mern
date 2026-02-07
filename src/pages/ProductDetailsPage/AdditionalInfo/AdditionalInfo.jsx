import React from 'react';

const AdditionalInfo = () => {
  const specs = [
    { label: "Stand Up", value: '35"L x 24"W x 37-45"H (front to back wheel)' },
    { label: "Folded (w/o wheels)", value: '32.5"L x 18.5"W x 16.5"H' },
    { label: "Folded (w/ wheels)", value: '32.5"L x 24"W x 18.5"H' },
    { label: "Door Pass Through", value: "24" },
    { label: "Frame", value: "Aluminum" },
    { label: "Weight (w/o wheels)", value: "20 LBS" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white font-sans">
      {/* Tabs - Same as before */}
    
      {/* Specification Table */}
      <div className="border border-gray-200 rounded-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <tbody>
            {specs.map((spec, index) => (
              <tr 
                key={index} 
                className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 px-6 font-semibold text-gray-700 w-1/3 border-r border-gray-200">
                  {spec.label}
                </td>
                <td className="py-4 px-6 text-gray-600">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdditionalInfo;