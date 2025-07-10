import React from "react";
import StatusBadge from "./StatusBadge";

const LaunchTable = ({ data, onRowClick, loading, filterActive }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow border border-gray-300 mx-auto my-8 max-w-[1100px] w-full min-h-[500px] bg-white mb-1">
      <table className="min-w-full w-full divide-y divide-blue-100 bg-white rounded-lg border border-gray-300">
        <thead className="bg-blue-50">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-black uppercase">
              No.
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-black uppercase">
              Launched (UTC)
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-black uppercase">
              Location
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-black uppercase">
              Mission
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-black uppercase">
              Orbit
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-black uppercase">
              Launch Status
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-black uppercase">
              Rocket
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-blue-100">
          {loading ? (
            <tr>
              <td colSpan="7" className="px-4 py-8 text-center">
                {/* ...existing code for Spinner... */}
              </td>
            </tr>
          ) : data && data.length > 0 ? (
            data.map((launch, idx) => (
              <tr
                key={launch.id || idx}
                className="cursor-pointer hover:bg-blue-50 h-10 transition-colors"
                onClick={() => onRowClick(launch.full)}
              >
                <td className="px-4 py-2 whitespace-nowrap text-gray-700 font-medium">
                  {String(launch.serial ?? idx + 1).padStart(2, "0")}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  {launch.date_utc}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  {launch.location || "-"}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  {launch.name || "-"}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  {launch.orbit || "-"}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  <StatusBadge status={launch.status} />
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  {launch.rocket || "-"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="px-4 py-8 text-center text-gray-400">
                {filterActive
                  ? "No results found for the specified filter."
                  : "No data available"}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LaunchTable;
