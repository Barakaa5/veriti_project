import React, { useEffect, useState } from "react";
import styles from "./VeritiTable.module.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Box, CircularProgress } from "@mui/material";
import token from "../../public/token.json";

const columns = [
  {
    field: "IPAddress",
    headerName: "IP ADDRESS",
    editable: true,
    flex: 1,
  },
  {
    field: "CVEsFound",
    headerName: "CVES FOUND",
    editable: true,
    flex: 1,
  },
  {
    field: "LatestCves",
    headerName: "LATEST CVES",
    editable: true,
    flex: 1,
  },
];

const ShowLatestCves = (array) => {
  array.sort((a, b) => {
    let a1 = a.split("-");
    let b1 = b.split("-");
    if (a1[1] === b1[1]) {
      return a1[2] - b1[2];
    } else {
      return a1[1] - b1[1];
    }
  });
  if (array.length > 3) {
    return array.slice(0, 3).join(", ") + "...";
  } else if (array.length === 0) {
    return "No CVEs found";
  } else {
    return array.join(", ") + "...";
  }
};

export default function VeritiTable() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getMachines = async () => {
      try {
        const response = await fetch("api/machines/machines", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(token.token),
        });
        const data = await response.json();
        let tempRows = [];
        data.result.forEach((machine, index) => {
          tempRows.push({
            id: machine.id,
            IPAddress: machine.ip,
            CVEsFound: machine.vulnerabilities.length,
            LatestCves: ShowLatestCves(machine.vulnerabilities),
          });

          if (index === data.result.length - 1) {
            setRows(tempRows);
            setLoading(false);
          }
        });
      } catch (error) {
        console.log("error", error);
        setError(true);
      }
    };
    getMachines();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        error ? (
          "There was an error loading the data"
        ) : (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )
      ) : (
        <>
          <div className={styles.container_titleSection}>
            <div className={styles.container_titleSection_title}>
              Vulnerable Hosts
            </div>
            <div className={styles.container_titleSection_counter}>
              {rows.length} items
            </div>
          </div>
          <Box sx={{ height: 600, width: 1200 }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={20}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Box>
        </>
      )}
    </div>
  );
}
