import React from "react";

const CommentIcon: React.FC = () => (
  <svg
    className="w-6 h-6 text-current"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="ChatIcon"
  >
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z"></path>
  </svg>
);

export default CommentIcon;
