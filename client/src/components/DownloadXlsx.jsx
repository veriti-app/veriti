import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { USER_DONATIONS } from "../utils/queries";
import * as XLSX from "xlsx";

const ExportXlsx = () => {
  const { data } = useQuery(USER_DONATIONS);
  // const { me: {donations: {charity: { name, ein }}}} = data
  const donations = data?.me.donations || [];
  console.log(donations, "Donation Data");
  // console.log(charities, "Charity Data");

  const filtered = donations.map(obj => {
    const {
      charity
    } = obj;
    
    return charity;
  
  });
  console.log(filtered, "FILTERED")
  const handleOnExport = () => {
    
    // creating new workbook
    var wb = XLSX.utils.book_new(),
      // converts json data to a spreadsheet - need to pass it the data
      ws = XLSX.utils.json_to_sheet(filtered);

      

    //parameters are workbook, worksheet and sheet name
    XLSX.utils.book_append_sheet(wb, ws, "VeritiDonationSummary");
    XLSX.write(wb, { bookType: "xlsx", type: "buffer" });
    XLSX.write(wb, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(wb, "VeritiDonationSummary.xlsx");

    console.log(ws)
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
