// import axios from "axios";

export default async function handler(req, res) {
  console.log("HEREEEEEEEEEE");

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL2FwaS5zZWN1cml0eWNlbnRlci5taWNyb3NvZnQuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYzNlZTcwYTYtMWM0Zi00NGVhLWE4YTYtNzlmMDEwNGZmZDY3LyIsImlhdCI6MTY2OTA0ODg1MSwibmJmIjoxNjY5MDQ4ODUxLCJleHAiOjE2NjkwNTI3NTEsImFpbyI6IkUyWmdZSGpYeUhNN2NObnlWLytuK1ZuOVRmSHNBd0E9IiwiYXBwX2Rpc3BsYXluYW1lIjoiVmVyaXRpLURlZmVuZGVyLUludGVncmF0aW9uIiwiYXBwaWQiOiI1OWQzYjhjMy0yMDhmLTQ1NTAtODVkNi0zYTNjNzk2NmVlNjYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9jM2VlNzBhNi0xYzRmLTQ0ZWEtYThhNi03OWYwMTA0ZmZkNjcvIiwib2lkIjoiMTVhNjc4NmQtZDIyNy00ZTM4LWJmZTMtMzE0MzJmMWE2YmMyIiwicmgiOiIwLkFYa0FwbkR1dzA4YzZrU29wbm53RUVfOVoyVUVlUHdYSU5SQW9NVXdjQ0pIRzVKNUFBQS4iLCJyb2xlcyI6WyJNYWNoaW5lLklzb2xhdGUiLCJFdmVudC5Xcml0ZSIsIlNlY3VyaXR5Q29uZmlndXJhdGlvbi5SZWFkV3JpdGUuQWxsIiwiSW50ZWdyYXRpb25Db25maWd1cmF0aW9uLlJlYWRXcml0ZSIsIk1hY2hpbmUuU2NhbiIsIlVybC5SZWFkLkFsbCIsIklwLlJlYWQuQWxsIiwiVGkuUmVhZFdyaXRlIiwiVGkuUmVhZC5BbGwiLCJVc2VyLlJlYWQuQWxsIiwiTWFjaGluZS5SZWFkV3JpdGUuQWxsIiwiVGkuUmVhZFdyaXRlLkFsbCIsIk1hY2hpbmUuTGl2ZVJlc3BvbnNlIiwiU2VjdXJpdHlSZWNvbW1lbmRhdGlvbi5SZWFkLkFsbCIsIk1hY2hpbmUuUmVzdHJpY3RFeGVjdXRpb24iLCJNYWNoaW5lLlN0b3BBbmRRdWFyYW50aW5lIiwiQWxlcnQuUmVhZC5BbGwiLCJTb2Z0d2FyZS5SZWFkLkFsbCIsIlNlY3VyaXR5Q29uZmlndXJhdGlvbi5SZWFkLkFsbCIsIkZpbGUuUmVhZC5BbGwiLCJNYWNoaW5lLkNvbGxlY3RGb3JlbnNpY3MiLCJNYWNoaW5lLk9mZmJvYXJkIiwiU2VjdXJpdHlCYXNlbGluZXNBc3Nlc3NtZW50LlJlYWQuQWxsIiwiVnVsbmVyYWJpbGl0eS5SZWFkLkFsbCIsIkxpYnJhcnkuTWFuYWdlIiwiTWFjaGluZS5SZWFkLkFsbCIsIlNjb3JlLlJlYWQuQWxsIiwiUmVtZWRpYXRpb25UYXNrcy5SZWFkLkFsbCIsIkFsZXJ0LlJlYWRXcml0ZS5BbGwiLCJBZHZhbmNlZFF1ZXJ5LlJlYWQuQWxsIl0sInN1YiI6IjE1YTY3ODZkLWQyMjctNGUzOC1iZmUzLTMxNDMyZjFhNmJjMiIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJFVSIsInRpZCI6ImMzZWU3MGE2LTFjNGYtNDRlYS1hOGE2LTc5ZjAxMDRmZmQ2NyIsInV0aSI6IkZTUDRFZDcya0VLQjFIQWZGR3hiQUEiLCJ2ZXIiOiIxLjAifQ.UsiyaEvjvTImRKK8iEYE1KfhpEHMhaD_pjgQrv7wMMvbABe71Shkz1KdlMtrZWwFpBaU4McUR9A6oNJnQtJznRS5sUh4g1Wlsljs8L8-6K7cAeJyZyq_lzbo406lj7BjdgeeIR_DtIRNGF9DQ8BmmpGDpMXYrKElatmwrAEXoWiyNoOQ6thyeVJLwzH5mAwFGFdb5ivhE6eX49XNN3Zt7PWbZ1ZJlxD6-LvcMWtZkU0VUQA9I9d_F1ra19Oep_lWa02T9-mvDBC0ETGNGf7l6ysleGSNZrHj3CTPSmIHKNj1kf4xahGcLxQK6c3ti4lfAGWDT-JeroW7ONL1H4Yduw";
  const URL = "https://api.securitycenter.microsoft.com/api/machines";
  const getMachines = async () => {
    // fetch with bearer token
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    let machines = Object.entries(data.value).map((machine) => {
      return {
        id: machine[1].id,
        ip: machine[1].lastIpAddress,
        vulnerabilities: [],
      };
    });

    return machines;
  };
  const getVulnerabilities = async (id) => {
    let URL_vulnerabilities = `https://api.securitycenter.microsoft.com/api/machines/${id}/vulnerabilities`;
    const response = await fetch(URL_vulnerabilities, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    return data.value;
  };

  try {
    const result = await getMachines();

    for (let index = 0; index < result.length; index++) {
      let first = await getVulnerabilities(result[index].id);
      first = Object.entries(first).map((vulnerability) => {
        return vulnerability[1].id;
      });
      result[index].vulnerabilities = first;
    }
    console.log("result", result);

    return res.status(200).json({ result });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
}
