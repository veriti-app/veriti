import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { USER_DONATIONS } from "../utils/queries";
import * as XLSX from "xlsx";

const ExportXlsx = () => {
  // Extract data from USER_DONATIONS, extract donations from data
  const { data } = useQuery(USER_DONATIONS);
  const donations = data?.me.donations || [];

  // Extract charity data from donations and return object
  const charities = donations.map(obj => {
    const {
      charity
    } = obj;
    
    return charity;
  
  });
  console.log(charities, "FILTERED")
  console.log(donations, "DONATIONS")


  const handleOnExport = () => {
    
    // creating new xlsx workbook
    var wb = XLSX.utils.book_new(),
    
    // converts donations data and ref last two col
    ws = XLSX.utils.json_to_sheet(donations)
    ws['!ref'] = "C1:D7";
    // ws = XLSX.utils.json_to_sheet(donations);
    // XLSX.utils.sheet_add_json(ws, ws);

    //parameters are workbook, worksheet and sheet name
    XLSX.utils.book_append_sheet(wb, ws, "VeritiDonationSummary");
    // XLSX.write(wb, { bookType: "xlsx", type: "buffer" });
    // XLSX.write(wb, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(wb, "VeritiDonationSummary.xlsx");
    console.log(ws);
  };

  return (
    <div className="mx-2 py-2 max-w-sm">
      <button
        onClick={handleOnExport}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
      >
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Download Donation Summary</span>
      </button>
    </div>
  );
};


export default ExportXlsx;
