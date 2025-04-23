"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

export default function ElfsightPlayer() {
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    if (scriptLoaded && window.ElfsightApp) {
      window.ElfsightApp.init()
    }
  }, [scriptLoaded])

  return (
    <div className="audio-player-container">
      <h3 className="text-xl font-semibold text-[#ff4d79] mb-4">Listen to Our Song</h3>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
      <div
        className="elfsight-app-ec5bd496-985c-4a35-a0c5-bb2e5f610b36"
        data-elfsight-app-lazy
      ></div>
    </div>
  )
}

// Extend the window interface properly
declare global {
  interface Window {
    ElfsightApp?: {
      init: () => void
    }
  }
}
