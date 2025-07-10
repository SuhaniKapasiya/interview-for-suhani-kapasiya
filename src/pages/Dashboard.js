import React, { useState, useEffect } from "react";
import LaunchTable from "../components/LaunchTable";
import LaunchModal from "../components/LaunchModal";
import Pagination from "../components/Pagination";
import { formatUTCDate } from "../utils/format";
import useDashboardData from "../hooks/useDashboardData";
import Spinner from "../components/Spinner";
import { Filter, Calendar } from "lucide-react";
import Dropdown from "../components/Dropdown";

const timeOptions = [
  "All Time",
  "Past Week",
  "Past Month",
  "Past 3 Months",
  "Past 6 Months",
  "Past Year",
  "Past 2 Years",
];

const filterOptions = [
  "All Launches",
  "Upcoming Launches",
  "Successful Launches",
  "Failed Launches",
];

const Dashboard = () => {
  const { launches, rocketsMap, launchpadsMap, payloadsMap, loading } =
    useDashboardData();

  const [selectedLaunch, setSelectedLaunch] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeRange, setTimeRange] = useState("All Time");
  const [filter, setFilter] = useState("All Launches");
  const [currentPage, setCurrentPage] = useState(1);

  const getFilteredLaunches = () => {
    let filtered = [...launches];

    // Status filter
    if (filter === "Upcoming Launches") {
      filtered = filtered.filter((l) => l.upcoming === true);
    } else if (filter === "Successful Launches") {
      filtered = filtered.filter(
        (l) => l.success === true && l.upcoming === false
      );
    } else if (filter === "Failed Launches") {
      filtered = filtered.filter(
        (l) => l.success === false && l.upcoming === false
      );
    }

    // Time filter
    if (timeRange !== "All Time") {
      const daysMap = {
        "Past Week": 7,
        "Past Month": 30,
        "Past 3 Months": 90,
        "Past 6 Months": 180,
        "Past Year": 365,
        "Past 2 Years": 730,
      };

      const daysAgo = daysMap[timeRange];
      const now = new Date();
      const cutoffTime = now.getTime() - daysAgo * 24 * 60 * 60 * 1000;

      filtered = filtered.filter((launch) => {
        const launchTime = new Date(launch.date_utc).getTime();
        return !isNaN(launchTime) && launchTime >= cutoffTime;
      });
    }

    return filtered;
  };

  const openModal = (launch) => {
    setSelectedLaunch(launch);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedLaunch(null);
    setIsModalOpen(false);
  };

  const pageSize = 10;
  const filteredLaunches = getFilteredLaunches();
  const totalPages = Math.ceil(filteredLaunches.length / pageSize) || 1;

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(1);
  }, [timeRange, filter, totalPages, currentPage]);

  const paginatedLaunches = filteredLaunches.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const tableData = paginatedLaunches.map((launch, idx) => {
    const payloadId = Array.isArray(launch.payloads)
      ? launch.payloads[0]
      : null;
    const payload = payloadId ? payloadsMap[payloadId] : null;
    return {
      serial: (currentPage - 1) * pageSize + idx + 1,
      id: launch.id || idx,
      date_utc: launch.date_utc ? formatUTCDate(launch.date_utc) : "-",
      location: launchpadsMap[launch.launchpad] || "-",
      name: launch.name || "-",
      orbit: payload?.orbit || "-",
      status:
        launch.upcoming === true
          ? "Upcoming"
          : launch.success === true
          ? "Success"
          : "Failure",
      rocket: rocketsMap[launch.rocket] || "-",
      full: {
        ...launch,
        payload,
        rocket: rocketsMap[launch.rocket],
        launchpad: launchpadsMap[launch.launchpad],
      },
    };
  });

  return (
    <div className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-6 bg-gray-50">
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <Dropdown
              value={timeRange}
              setValue={setTimeRange}
              options={timeOptions}
              icon={Calendar}
            />
            <Dropdown
              value={filter}
              setValue={setFilter}
              options={filterOptions}
              icon={Filter}
            />
          </div>

          <div className="max-w-7xl mx-auto w-full overflow-x-auto">
            <LaunchTable
              data={tableData}
              onRowClick={openModal}
              loading={loading}
              filterActive={
                (filter !== "All Launches" || timeRange !== "All Time") &&
                !loading
              }
            />
          </div>

          <LaunchModal
            isOpen={isModalOpen}
            onClose={closeModal}
            launch={selectedLaunch}
            rocket={selectedLaunch?.rocket}
            payload={selectedLaunch?.payload}
            launchpad={selectedLaunch?.launchpad}
          />

          <div className="max-w-7xl mx-auto w-full flex justify-end mt-4">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
