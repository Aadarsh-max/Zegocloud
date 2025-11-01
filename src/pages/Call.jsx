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
      branding: {
        logoURL: "",
      },
      layout: "Auto",
      showScreenSharingButton: true,
    });
  }, []);

  return (
    <div
      className={`w-full min-h-screen flex flex-col items-center justify-center transition-colors duration-500 overflow-hidden 
    pt-20 sm:pt-24 md:pt-28
    ${
      theme === "dark"
        ? "bg-linear-to-br from-gray-900 via-purple-900 to-gray-900 text-white"
        : "bg-linear-to-br from-violet-50 via-purple-50 to-pink-50 text-gray-900"
    }`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25 sm:opacity-10">
        <div
          className={`absolute top-10 right-10 w-56 h-56 sm:w-80 sm:h-80 rounded-full blur-3xl ${
            theme === "dark"
              ? "bg-linear-to-r from-violet-600 to-fuchsia-600"
              : "bg-linear-to-r from-violet-300 to-fuchsia-300"
          }`}
        />
        <div
          className={`absolute bottom-10 left-10 w-56 h-56 sm:w-72 sm:h-72 rounded-full blur-3xl ${
            theme === "dark"
              ? "bg-linear-to-r from-cyan-600 to-blue-600"
              : "bg-linear-to-r from-cyan-300 to-blue-300"
          }`}
        />
      </div>

      <div
        ref={containerRef}
        className={`relative z-10 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] h-[80vh] sm:h-[85vh] lg:h-[90vh] xl:h-[95vh] 
        rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md border transition-all duration-500 ${
          theme === "dark"
            ? "bg-gray-800/60 border-gray-700"
            : "bg-white/70 border-violet-200"
        }`}
      />

      <p
        className={`relative z-10 text-sm sm:text-base mt-4 mb-6 text-center opacity-80 lg:hidden ${
          theme === "dark" ? "text-gray-400" : "text-gray-700"
        }`}
      >
        Powered by{" "}
        <span className="font-semibold bg-clip-text text-transparent bg-linear-to-r from-violet-400 via-fuchsia-400 to-pink-400">
          ZegoCloud
        </span>
      </p>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
