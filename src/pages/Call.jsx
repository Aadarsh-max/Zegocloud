import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { appID, serverSecret } from "../config";
import { useTheme } from "../context/ThemeContext";

export default function Call() {
  const { theme } = useTheme();
  const containerRef = useRef(null);

  useEffect(() => {
    const roomID = "my-room";
    const userID = Date.now().toString();
    const userName = "User_" + userID;

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      userID,
      userName
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: containerRef.current,
      sharedLinks: [
        {
          name: "Join Room",
          url: `${window.location.origin}/room/${roomID}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      // Add theme handling for Zego call interface
      branding: {
        logoURL: "",
      },
      layout: "Auto",
      showScreenSharingButton: true,
    });
  }, []);

  return (
    <div
      className={`w-full h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div
        ref={containerRef}
        className="w-full h-full rounded-lg overflow-hidden shadow-lg"
      />
    </div>
  );
}
