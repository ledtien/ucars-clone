import React from "react";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <div
        className="flex justify-between items-center"
        style={{ height: "72px" }}
      >
        <div className="flex divide-x">
          <div>
            71 Ayer Rajah Crescent, #06-14, <br /> Singapore 139951
          </div>
          <div className="ml-5 px-5">Email us at: hello@carbuyer.com.sg</div>
        </div>
        <div>
          <span> +65 8808 7905</span> <br />
          <span>+7 (700) 51 51 518</span>
        </div>
      </div>
    </div>
  );
}
