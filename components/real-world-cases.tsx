"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, AlertTriangle, Building, Users, ShieldAlert } from "lucide-react"
import Link from "next/link"

export default function RealWorldCases() {
  const cases = [
    {
      title: "Target Data Breach (2013)",
      description:
        "One of the largest retail data breaches involved keyloggers installed on point-of-sale systems, affecting 40 million credit and debit card accounts.",
      impact: "Financial loss of $162 million, compromised customer trust",
      icon: <Building className="h-5 w-5" />,
      color: "bg-red-100 dark:bg-red-900/20",
      iconColor: "text-red-600 dark:text-red-400",
      link: "/case-study/target-data-breach.pdf",
    },
    {
      title: "Norwegian Government Attack (2018)",
      description:
        "Sophisticated keyloggers were used in a targeted attack against Norwegian government officials, potentially exposing sensitive diplomatic information.",
      impact: "Compromised government communications, national security concerns",
      icon: <ShieldAlert className="h-5 w-5" />,
      color: "bg-blue-100 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      link: "/case-study/norwegian-government-attack.pdf",
    },
    {
      title: "University Exam Cheating Ring (2019)",
      description:
        "A group of students installed keyloggers on university computers to steal professors' credentials and access upcoming exam questions.",
      impact: "Academic integrity compromised, disciplinary actions against students",
      icon: <Users className="h-5 w-5" />,
      color: "bg-amber-100 dark:bg-amber-900/20",
      iconColor: "text-amber-600 dark:text-amber-400",
      link: "/case-study/university-exam-cheating-ring.pdf",
    },
    {
      title: "Banking Trojan Campaign (2020)",
      description:
        "A widespread malware campaign used keyloggers as part of banking trojans to steal financial credentials from thousands of victims across multiple countries.",
      impact: "Millions in financial theft, identity theft cases",
      icon: <AlertTriangle className="h-5 w-5" />,
      color: "bg-purple-100 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
      link: "/case-study/banking-trojan-campaign.pdf",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {cases.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div
                  className={`mt-1 h-10 w-10 rounded-full ${item.color} flex items-center justify-center flex-shrink-0`}
                >
                  <div className={item.iconColor}>{item.icon}</div>
                </div>
                <div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{item.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-3 rounded-md">
                <p className="text-sm font-medium">Impact:</p>
                <p className="text-sm text-muted-foreground">{item.impact}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full gap-2" asChild>
                <Link href={item.link} target="_blank" rel="noopener noreferrer">
                  Read Full Case Study <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
