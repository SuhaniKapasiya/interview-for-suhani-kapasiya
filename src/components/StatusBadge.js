import React from "react";

// Placeholder StatusBadge component
const StatusBadge = ({status}) => {

  const styles = {
    Success: "bg-green-100 text-green-700",
    Failure: "bg-red-100 text-red-700",
    Upcoming: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span className={`text-xs px-2 py-1 rounded ${styles[status]}`}>
      {status}
    </span>
  );

};

export default StatusBadge;
 