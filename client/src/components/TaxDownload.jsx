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
            <center>
                <button onClick={onButtonClick}>
                    Download PDF
                </button>
            </center>
        </>
    );
};

export default TaxForms; 