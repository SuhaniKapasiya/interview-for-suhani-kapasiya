// Utility functions for SpaceX API requests

const BASE_URL = "https://api.spacexdata.com/v4";

export const fetchAllLaunches = async () => {
 
  const res = await fetch(`${BASE_URL}/launches`);
  return res.json();
};

export const fetchAllRockets = async () => {
  const res = await fetch(`${BASE_URL}/rockets`);
  return res.json();
};

export const fetchAllLaunchpads = async () => {
  const res = await fetch(`${BASE_URL}/launchpads`);
  return res.json();
};

export const fetchAllPayloads = async () => {
  const res = await fetch(`${BASE_URL}/payloads`);
  return res.json();
};
