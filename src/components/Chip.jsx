import React from "react";

const Chip = ({ icon, children }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-chip px-3 py-1 text-xs font-medium text-body">
    {icon && React.createElement(icon, { className: "text-sm text-muted", "aria-hidden": true })}
    {children}
  </span>
);

export default Chip;
