import React from "react";

const TaxForms = () => {

    const onButtonClick = () => {
        // method to get PDF file
        fetch('Tax_Forms.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Tax_Forms.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
             <div className="max-w-sm">
          <button onClick={onButtonClick} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download Tax Forms</span>
          </button>
        </div>
            
        </>
    );
};

export default TaxForms; 