import React from "react";

function Footer() {
  return (
    <footer className="footer" style={{ textAlign: "center", padding: "1rem", background: "#f7f7f7", color: "#888" }}>
      &copy; {new Date().getFullYear()} SukuSmart. All rights reserved.
    </footer>
  );
}

export default Footer;
