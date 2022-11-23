import {
  getAllMachines,
  getMachineVulnerabilitiesById,
} from "../../../lib/utils";
export default async function handler(req, res) {
  const token = req.body;
  try {
    let result = await getAllMachines(token);
    for (const [index, machine] of result.entries()) {
      let rawVulnerabilities = await getMachineVulnerabilitiesById(
        machine.id,
        token
      );
      rawVulnerabilities = Object.entries(rawVulnerabilities).map(
        (vulnerability) => {
          return vulnerability[1].id;
        }
      );
      result[index].vulnerabilities = rawVulnerabilities;
    }
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
}
