"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, Briefcase, Building, Users, AlertTriangle } from "lucide-react"

export default function LegalImplications() {
  const legalInfo = {
    personal: {
      title: "Personal Use",
      description: "The legality of keyloggers in personal contexts varies by jurisdiction and intent.",
      icon: <Users className="h-6 w-6 text-primary" />,
      points: [
        {
          title: "Monitoring Your Own Devices",
          description: "Generally legal to monitor your own personal devices, but may have limitations.",
        },
        {
          title: "Monitoring Family Members",
          description:
            "Parents can typically monitor their minor children's devices, but monitoring adult family members without consent may be illegal.",
        },
        {
          title: "Monitoring Partners",
          description:
            "Installing keyloggers on a partner's device without consent is generally illegal and may violate privacy laws and constitute cyberstalking.",
        },
      ],
    },
    workplace: {
      title: "Workplace Use",
      description: "Employers have certain rights to monitor company-owned devices, but with important limitations.",
      icon: <Building className="h-6 w-6 text-primary" />,
      points: [
        {
          title: "Employee Notification",
          description:
            "Most jurisdictions require employers to notify employees about monitoring activities and obtain consent.",
        },
        {
          title: "Company Equipment",
          description:
            "Monitoring company-owned devices is generally permitted with proper disclosure and acceptable use policies.",
        },
        {
          title: "Personal Devices (BYOD)",
          description: "Monitoring personal devices used for work typically requires explicit policies and consent.",
        },
        {
          title: "Privacy Boundaries",
          description:
            "Even with consent, employers must respect certain privacy boundaries, such as not monitoring personal communications.",
        },
      ],
    },
    criminal: {
      title: "Criminal Use",
      description: "Using keyloggers for unauthorized access or data theft is illegal worldwide.",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      points: [
        {
          title: "Unauthorized Access",
          description:
            "Using keyloggers to gain unauthorized access to systems or accounts violates computer fraud laws.",
        },
        {
          title: "Identity Theft",
          description: "Using captured credentials for identity theft carries severe criminal penalties.",
        },
        {
          title: "Financial Fraud",
          description: "Using keyloggers to steal financial information for fraudulent purposes is a serious crime.",
        },
        {
          title: "Corporate Espionage",
          description:
            "Using keyloggers to steal trade secrets or confidential business information violates multiple laws.",
        },
      ],
    },
    lawEnforcement: {
      title: "Law Enforcement Use",
      description: "Government and law enforcement agencies may use keyloggers with proper legal authorization.",
      icon: <Scale className="h-6 w-6 text-primary" />,
      points: [
        {
          title: "Court Orders",
          description:
            "Law enforcement typically requires a warrant or court order to use keyloggers for surveillance.",
        },
        {
          title: "National Security",
          description:
            "Intelligence agencies may have broader authority for national security investigations, but still within legal frameworks.",
        },
        {
          title: "Evidence Collection",
          description:
            "Information gathered through legally authorized keyloggers may be admissible as evidence in court.",
        },
        {
          title: "Oversight Requirements",
          description:
            "Government use of surveillance technologies is subject to oversight and accountability mechanisms.",
        },
      ],
    },
  }

  return (
    <div className="space-y-8">
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="personal" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>Personal</span>
          </TabsTrigger>
          <TabsTrigger value="workplace" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            <span>Workplace</span>
          </TabsTrigger>
          <TabsTrigger value="criminal" className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span>Criminal</span>
          </TabsTrigger>
          <TabsTrigger value="lawEnforcement" className="flex items-center gap-2">
            <Scale className="h-4 w-4" />
            <span>Law Enforcement</span>
          </TabsTrigger>
        </TabsList>

        {Object.entries(legalInfo).map(([key, data]) => (
          <TabsContent key={key} value={key} className="mt-6">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {data.icon}
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold">{data.title}</h3>
                  <p className="text-muted-foreground mt-2">{data.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {data.points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="text-lg">{point.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{point.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="bg-muted/50 p-4 rounded-md text-sm">
                <p>
                  <strong>Disclaimer:</strong> This information is provided for educational purposes only and should not
                  be considered legal advice. Laws vary by jurisdiction and are subject to change. Consult with a legal
                  professional for advice specific to your situation.
                </p>
              </div>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

