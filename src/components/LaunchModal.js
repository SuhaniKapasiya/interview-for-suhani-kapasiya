import React from "react";
import { formatUTCDate } from "../utils/format";
import { X, Youtube, Globe, BookOpen } from "lucide-react";

const LaunchModal = ({
  isOpen,
  onClose,
  launch,
  rocket,
  payload,
  launchpad,
}) => {
  if (!isOpen || !launch) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-6 w-[95%] max-w-2xl relative shadow-2xl border border-gray-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl focus:outline-none"
          aria-label="Close modal"
        >
          <X/>
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <img
            src={launch.links?.patch?.small || ""}
            alt={launch.name}
            className="w-16 h-16 object-contain rounded-lg border border-gray-300 bg-gray-50"
          />
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold text-gray-900 truncate">
              {launch.name}
            </h2>
            <p className="text-sm text-gray-500 truncate">{rocket}</p>
          </div>
          <div>
            {launch.success ? (
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full border border-green-200">
                Success
              </span>
            ) : launch.upcoming ? (
              <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full border border-yellow-200">
                Upcoming
              </span>
            ) : (
              <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full border border-red-200">
                Failed
              </span>
            )}
          </div>
        </div>

        {/* Media Icons */}
        <div className="flex items-center gap-4 text-gray-400 mb-4 ml-20 sm:ml-20 mt-2">
          {launch.links?.wikipedia && (
            <a
              href={launch.links.wikipedia}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
              title="Wikipedia"
            >
              <Globe size={18} />
            </a>
          )}
          {launch.links?.article && (
            <a
              href={launch.links.article}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
              title="Article"
            >
              <BookOpen size={18} />
            </a>
          )}
          {launch.links?.webcast && (
            <a
              href={launch.links.webcast}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors"
              title="Webcast"
            >
              <Youtube size={18} />
            </a>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700 mb-5">
          {launch.details || "No details available."}
          {launch.links?.wikipedia && (
            <a
              href={launch.links.wikipedia}
              className="text-blue-500 underline ml-1 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipedia
            </a>
          )}
        </p>

        {/* Details Grid */}
        <div className="text-sm divide-y divide-gray-200 border border-gray-300 rounded-lg overflow-hidden">
          {[
            ["Flight Number", launch.flight_number],
            ["Mission Name", launch.name],
            ["Rocket Type", rocket || "-"],
            ["Rocket Name", rocket || "-"],
            ["Manufacturer", payload?.manufacturers || "-"],
            [
              "Nationality",
              payload?.nationalities?.[0] || payload?.nationality || "-",
            ],
            ["Launch Date", formatUTCDate(launch.date_utc)],
            ["Payload Type", payload?.type || "-"],
            ["Orbit", payload?.orbit || "-"],
            ["Launch Site", launchpad || "-"],
          ].map(([label, value], idx) => (
            <div
              key={idx}
              className="flex justify-between items-center px-4 py-2 hover:bg-blue-50 transition-colors"
            >
              <span className="text-gray-500 font-medium w-1/2 truncate">
                {label}
              </span>
              <span className="text-gray-700 w-1/2 text-right truncate">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaunchModal;
