import { spawn } from "child_process";
import { join } from "path";

export default async function handler(req, res) {
  try {
    console.log("getToken.js");
    let child;
    let psPath = join(__dirname, "Get-Token.ps1");
    child = spawn("Powershell.exe", ["-ExecutionPolicy", "ByPass", psPath]);
    child.stdout.on("data", function (data) {
      console.log("Powershell Data: " + data);
    });
    child.stderr.on("data", function (data) {
      console.log("Powershell Errors: " + data);
    });
    child.on("exit", function () {
      console.log("Powershell Script finished -----");
    });
    child.stdin.end(); //end input
    return res.status(200).json({ result: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
}
