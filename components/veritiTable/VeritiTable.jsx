import React, { useEffect, useState } from "react";
import styles from "./VeritiTable.module.scss";
import { DataGrid } from '@mui/x-data-grid';
import Box from "@mui/material/Box";

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

const rows = [
  { id: 1, IPAddress: "Snow", CVEsFound: "Jon", LatestCves: 35 },
  { id: 2, IPAddress: "Lannister", CVEsFound: "Cersei", LatestCves: 42 },
  { id: 3, IPAddress: "Lannister", CVEsFound: "Jaime", LatestCves: 45 },
  { id: 4, IPAddress: "Stark", CVEsFound: "Arya", LatestCves: 16 },
  { id: 5, IPAddress: "Targaryen", CVEsFound: "Daenerys", LatestCves: null },
  { id: 6, IPAddress: "Melisandre", CVEsFound: null, LatestCves: 150 },
  { id: 7, IPAddress: "Clifford", CVEsFound: "Ferrara", LatestCves: 44 },
  { id: 8, IPAddress: "Frances", CVEsFound: "Rossini", LatestCves: 36 },
  { id: 9, IPAddress: "Roxie", CVEsFound: "Harvey", LatestCves: 65 },
  { id: 10, IPAddress: "Roxie", CVEsFound: "Harvey", LatestCves: 65 },
  { id: 11, IPAddress: "Roxie", CVEsFound: "Harvey", LatestCves: 65 },
  { id: 12, IPAddress: "Roxie", CVEsFound: "Harvey", LatestCves: 65 },
  { id: 13, IPAddress: "Roxie", CVEsFound: "Harvey", LatestCves: 65 },
  { id: 14, IPAddress: "Roxie", CVEsFound: "Harvey", LatestCves: 65 },
];

export default function VeritiTable() {
//   const [data, setData] = useState([]);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const getMachines = async () => {
      //fetch data from api'
      const response = await fetch("/api/machines/machines").then((res) =>
        res.json()
      );
      console.log(response.result);
    //   setData(response.result);
      response.result.forEach((machine, index) => {
        setRows((prev) => [
          ...prev,
          {
            id: index,
            IPAddress: machine.ip,
            CVEsFound: machine.vulnerabilities.length,
            LatestCves: "machine.LatestCves",
          },
        ]);
      });
      console.log("rows", rows);
    };
    getMachines();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.container_titleSection}>
        <div className={styles.container_titleSection_title}>
          Vulnerable Hosts
        </div>
        <div className={styles.container_titleSection_counter}>312 items</div>
      </div>
      <Box sx={{ height: 600, width: 1200 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  );
}
