"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

interface PreventionCardProps {
  title: string
  description: string
}

export default function PreventionCard({ title, description }: PreventionCardProps) {
  return (
    <motion.div
      className="bg-background rounded-lg p-6 shadow-sm border transition-all hover:shadow-md hover:border-green-200 dark:hover:border-green-900 space-y-4"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
          <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

