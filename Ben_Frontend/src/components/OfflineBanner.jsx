import React, { useEffect, useRef, useState } from "react";
import { IoCloudOfflineOutline, IoCheckmarkCircleOutline } from "react-icons/io5";
import useOnlineStatus from "../hooks/useOnlineStatus";

const BACK_ONLINE_MS = 3000;

// Small pill at the bottom of the screen while the connection is down, then a
// brief "Back online" confirmation when it returns.
function OfflineBanner() {
  const online = useOnlineStatus();
  const [showBackOnline, setShowBackOnline] = useState(false);
  const wasOffline = useRef(false);

  useEffect(() => {
    if (!online) {
      wasOffline.current = true;
      setShowBackOnline(false);
      return undefined;
    }
    if (!wasOffline.current) return undefined;
    wasOffline.current = false;
    setShowBackOnline(true);
    const timer = setTimeout(() => setShowBackOnline(false), BACK_ONLINE_MS);
    return () => clearTimeout(timer);
  }, [online]);

  if (online && !showBackOnline) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4"
    >
      <p
        className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-white shadow-lg ${
          online ? "bg-media-green" : "bg-ink"
        }`}
      >
        {online ? (
          <>
            <IoCheckmarkCircleOutline aria-hidden="true" size={18} />
            Back online
          </>
        ) : (
          <>
            <IoCloudOfflineOutline aria-hidden="true" size={18} />
            You&apos;re offline. Some content won&apos;t load until you reconnect.
          </>
        )}
      </p>
    </div>
  );
}

export default OfflineBanner;
