export const getAllMachines = async (token) => {
  const URL = process.env.NEXT_PUBLIC_All_MACHINES_API;

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  const machines = Object.entries(data.value).map((machine) => {
    return {
      id: machine[1].id,
      ip: machine[1].lastIpAddress,
      vulnerabilities: [],
    };
  });

  return machines;
};

export const getMachineVulnerabilitiesById = async (id, token) => {
  let URL = process.env.NEXT_PUBLIC_MACHINE_VULNERABILITIES_BY_ID_API; // `https://api.securitycenter.microsoft.com/api/machines/${id}/vulnerabilities`
  URL = URL.replace("{id}", id);

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return data.value;
};
