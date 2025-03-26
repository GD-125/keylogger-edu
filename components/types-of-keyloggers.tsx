"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { Keyboard, Cpu, Globe, Database, Smartphone, Usb, Code, FileCode } from "lucide-react"

export default function TypesOfKeyloggers() {
  const [activeTab, setActiveTab] = useState("hardware")

  const types = {
    hardware: {
      title: "Hardware Keyloggers",
      description: "Physical devices that capture keystrokes directly from the hardware level.",
      icon: <Keyboard className="h-8 w-8 text-primary" />,
      examples: [
        {
          title: "USB Keyloggers",
          description:
            "Small devices that plug in between the keyboard and computer, recording all keystrokes without requiring any software installation.",
          icon: <Usb />,
        },
        {
          title: "Hardware Implants",
          description: "Devices installed inside keyboards that record keystrokes and store them for later retrieval.",
          icon: <Cpu />,
        },
        {
          title: "Wireless Sniffers",
          description: "Devices that intercept and record data transmitted by wireless keyboards.",
          icon: <Globe />,
        },
      ],
    },
    software: {
      title: "Software Keyloggers",
      description: "Programs that run on the target computer to record keystrokes and other activities.",
      icon: <Code className="h-8 w-8 text-primary" />,
      examples: [
        {
          title: "Kernel-based Keyloggers",
          description:
            "Operate at the kernel level of the operating system, making them difficult to detect and remove.",
          icon: <Cpu />,
        },
        {
          title: "API-level Keyloggers",
          description: "Intercept API calls between the keyboard and the application receiving the input.",
          icon: <FileCode />,
        },
        {
          title: "Form Grabbers",
          description:
            "Specifically target data entered into web forms, often focusing on login credentials and financial information.",
          icon: <Globe />,
        },
        {
          title: "Memory-Injection Keyloggers",
          description: "Inject malicious code into running processes to capture keystrokes from specific applications.",
          icon: <Database />,
        },
      ],
    },
    mobile: {
      title: "Mobile Keyloggers",
      description: "Specialized applications designed to monitor input on mobile devices.",
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      examples: [
        {
          title: "Spyware Apps",
          description: "Malicious applications that record keystrokes, often disguised as legitimate apps.",
          icon: <Code />,
        },
        {
          title: "Keyboard Replacement Apps",
          description: "Custom keyboard apps that look legitimate but secretly record everything typed.",
          icon: <Keyboard />,
        },
        {
          title: "Screen Loggers",
          description: "Capture screenshots when keys are pressed rather than logging the actual keystrokes.",
          icon: <Smartphone />,
        },
      ],
    },
  }

  return (
    <div className="space-y-8">
      <Tabs defaultValue="hardware" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="hardware" className="flex items-center gap-2">
            <Keyboard className="h-4 w-4" />
            <span>Hardware</span>
          </TabsTrigger>
          <TabsTrigger value="software" className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            <span>Software</span>
          </TabsTrigger>
          <TabsTrigger value="mobile" className="flex items-center gap-2">
            <Smartphone className="h-4 w-4" />
            <span>Mobile</span>
          </TabsTrigger>
        </TabsList>

        {Object.entries(types).map(([key, data]) => (
          <TabsContent key={key} value={key} className="mt-6">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {data.icon}
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold">{data.title}</h3>
                  <p className="text-muted-foreground mt-2">{data.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.examples.map((example, index) => (
                  <motion.div
                    key={index}
                    className="bg-background rounded-lg p-6 shadow-sm border transition-all hover:shadow-md hover:border-primary/50 space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      {example.icon}
                    </div>
                    <h4 className="text-lg font-semibold">{example.title}</h4>
                    <p className="text-muted-foreground">{example.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

