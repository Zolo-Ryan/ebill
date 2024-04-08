import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

const DownloadComponentButton = () => {
  const componentRef = useRef(null);

  const handleDownload = () => {
    // Capture screenshot of the component using html2canvas
    html2canvas(componentRef.current).then((canvas) => {
      // Convert canvas to a data URL
      const dataUrl = canvas.toDataURL();

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'component_screenshot.png'; // Set the filename for the downloaded image

      // Append the link to the document body and click it programmatically
      document.body.appendChild(link);
      link.click();

      // Remove the link from the document body
      document.body.removeChild(link);
    });
  };

  return (
    <div>
      <button onClick={handleDownload}>Download Component Screenshot</button>
      <div ref={componentRef}>
        {/* Your component JSX goes here */}
        <h1>This is a sample component</h1>
        <p>This is the content of the component.</p>
      </div>
    </div>
  );
};

export default DownloadComponentButton;
