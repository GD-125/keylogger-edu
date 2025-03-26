"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function InteractiveDemo() {
  const [inputValue, setInputValue] = useState("")
  const [capturedKeystrokes, setCapturedKeystrokes] = useState<string[]>([])
  const [isCapturing, setIsCapturing] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)

    if (isCapturing) {
      // Add each keystroke to the captured list
      const lastChar = e.target.value.slice(-1)
      if (lastChar) {
        setCapturedKeystrokes((prev) => [...prev, lastChar])
      }
    }
  }

  // Start/stop capturing
  const toggleCapturing = () => {
    if (!isCapturing) {
      setCapturedKeystrokes([])
      setShowAlert(true)
      setTimeout(() => setShowAlert(false), 5000)
    }
    setIsCapturing(!isCapturing)
  }

  // Clear all data
  const clearData = () => {
    setInputValue("")
    setCapturedKeystrokes([])
  }

  return (
    <div className="bg-background rounded-lg p-8 shadow-sm border">
      <div className="space-y-6">
        {showAlert && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            <Alert variant="default" className="bg-primary/10 border-primary/20 text-foreground">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Keylogger activated</AlertTitle>
              <AlertDescription>
                This is a safe demonstration. Your keystrokes will be captured and displayed below.
              </AlertDescription>
            </Alert>
          </motion.div>
        )}

        <div className="space-y-2">
          <p className="text-muted-foreground">
            Type something in the field below to see how a keylogger might capture your keystrokes.
            <span className="font-semibold text-foreground">
              {" "}
              This is a safe demonstration - no data is being sent anywhere.
            </span>
          </p>

          <div className="flex gap-4 mb-4">
            <Button onClick={toggleCapturing} variant={isCapturing ? "destructive" : "default"} className="gap-2">
              {isCapturing ? "Stop Capturing" : "Start Capturing"}
            </Button>
            <Button variant="outline" onClick={clearData}>
              Clear Data
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type something here..."
              className="w-full p-4 border rounded-md"
            />
            {isCapturing && (
              <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-bl-md rounded-tr-md">
                Recording
              </div>
            )}
          </div>

          <div className="p-4 bg-muted rounded-md">
            <h4 className="font-medium mb-2 flex items-center gap-2">
              Captured keystrokes:
              {isCapturing && <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>}
            </h4>
            <div className="font-mono text-sm min-h-[50px]" id="captured-keystrokes">
              {capturedKeystrokes.length > 0 ? (
                <div className="flex flex-wrap gap-1">
                  {capturedKeystrokes.map((key, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="inline-block px-2 py-1 bg-background border rounded"
                    >
                      {key === " " ? "␣" : key}
                    </motion.span>
                  ))}
                </div>
              ) : (
                <span className="text-muted-foreground">
                  {isCapturing
                    ? "Keystrokes will appear here as you type..."
                    : "Click 'Start Capturing' and type in the field above"}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="bg-primary/10 p-4 rounded-md">
          <p className="text-sm">
            <strong>Educational Note:</strong> This demonstration shows how easily keystrokes can be captured. Real
            keyloggers operate silently in the background without any visible indication to the user.
          </p>
        </div>
      </div>
    </div>
  )
}

