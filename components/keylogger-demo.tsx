"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function KeyloggerDemo() {
  const [demoState, setDemoState] = useState<"idle" | "typing" | "sending" | "complete">("idle")
  const [progress, setProgress] = useState(0)
  const [capturedText, setCapturedText] = useState("")

  useEffect(() => {
    const demoSequence = async () => {
      // Wait 1 second before starting
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Start typing animation
      setDemoState("typing")

      // Simulate typing with captured text
      const textToType = "mypassword123, user@example.com, credit_card_4532xxxxxxxxxxxx"
      let currentText = ""

      for (let i = 0; i < textToType.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 100))
        currentText += textToType[i]
        setCapturedText(currentText)
      }

      // Wait 1 second after typing
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Start sending animation
      setDemoState("sending")

      // Animate progress from 0 to 100 over 3 seconds
      let currentProgress = 0
      const interval = setInterval(() => {
        currentProgress += 2
        setProgress(currentProgress)

        if (currentProgress >= 100) {
          clearInterval(interval)
          setDemoState("complete")
        }
      }, 60)
    }

    demoSequence()

    // Reset demo every 12 seconds
    const resetInterval = setInterval(() => {
      setDemoState("idle")
      setProgress(0)
      setCapturedText("")
      demoSequence()
    }, 12000)

    return () => {
      clearInterval(resetInterval)
    }
  }, [])

  return (
    <div className="bg-background rounded-lg p-6 shadow-md border relative overflow-hidden">
      <div className="aspect-video bg-muted rounded-md p-4 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-muted-foreground">keylogger-process.exe</div>
        </div>

        <div className="flex-1 font-mono text-sm space-y-2">
          <div className="flex">
            <span className="text-green-600 mr-2">$</span>
            <span>keylogger_init.exe --silent --autostart</span>
          </div>

          <div className={`${demoState === "idle" ? "opacity-0" : "opacity-100"} transition-opacity`}>
            <span className="text-yellow-600">[INFO]</span> Keylogger initialized successfully
          </div>

          <div className={`${demoState === "idle" ? "opacity-0" : "opacity-100"} transition-opacity`}>
            <span className="text-blue-600">[DATA]</span> Captured keystrokes:
            <span className="text-muted-foreground ml-1">{capturedText}</span>
            {demoState === "typing" && (
              <span className="inline-block w-2 h-4 bg-primary/70 ml-0.5 animate-pulse"></span>
            )}
          </div>

          {demoState === "sending" && (
            <div className="mt-4">
              <div className="text-xs text-muted-foreground mb-1">Sending data to remote server...</div>
              <div className="w-full bg-muted rounded-full h-2">
                <motion.div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${progress}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          )}

          <div
            className={`${demoState === "complete" ? "opacity-100" : "opacity-0"} transition-opacity text-green-600`}
          >
            [SUCCESS] Data transmitted successfully
          </div>
        </div>
      </div>

      <div className="mt-4 bg-primary/10 p-3 rounded text-sm">
        <p>
          <strong>Note:</strong> This is a simulated demonstration of how a keylogger might operate. No actual
          keylogging is taking place.
        </p>
      </div>
    </div>
  )
}

