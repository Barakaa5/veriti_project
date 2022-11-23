import React from "react";
import VeritiTable from "../components/veritiTable/VeritiTable";
import styles from "./veriti.module.scss";

export default function Veriti() {
  return (
    <div className={styles.container}>
      <VeritiTable />
    </div>
  );
}

// export async function getStaticProps() {
//   return {
//     props: {},
//   };
// }
