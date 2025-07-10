import { useEffect, useState } from "react";
import {
  fetchAllLaunches,
  fetchAllRockets,
  fetchAllLaunchpads,
  fetchAllPayloads,
} from "../utils/api";

export default function useDashboardData() {
  const [loading, setLoading] = useState(true);
  const [launches, setLaunches] = useState([]);
  const [rocketsMap, setRocketsMap] = useState({});
  const [launchpadsMap, setLaunchpadsMap] = useState({});
  const [payloadsMap, setPayloadsMap] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [launchData, rocketData, launchpadData, payloadData] =
          await Promise.all([
            fetchAllLaunches(),
            fetchAllRockets(),
            fetchAllLaunchpads(),
            fetchAllPayloads(),
          ]);

        setLaunches(launchData);

        const rocketMap = {};
        rocketData.forEach((r) => {
          rocketMap[r.id] = r.name;
        });
        setRocketsMap(rocketMap);

        const launchpadMap = {};
        launchpadData.forEach((lp) => {
          launchpadMap[lp.id] = lp.name;
        });
        setLaunchpadsMap(launchpadMap);

        const payloadsMap = {};
        payloadData.forEach((payload) => {
          if (payload && payload.id) {
            payloadsMap[payload.id] = payload;
          }
        });
        setPayloadsMap(payloadsMap);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        // Optionally handle error
      }
    };
    fetchData();
  }, []);

  return { launches, rocketsMap, launchpadsMap, payloadsMap, loading };
}
