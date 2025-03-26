"use client"

import { Search } from "lucide-react"
import { motion } from "framer-motion"

interface DetectionCardProps {
  title: string
  description: string
}

export default function DetectionCard({ title, description }: DetectionCardProps) {
  return (
    <motion.div
      className="bg-background rounded-lg p-6 shadow-sm border transition-all hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900 space-y-4"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
          <Search className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

