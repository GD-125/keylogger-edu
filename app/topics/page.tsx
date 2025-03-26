"use client"

import Link from "next/link"
import { Shield, ArrowLeft, ArrowRight, Laptop, Server, Lock, Users, Database, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function TopicsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Shield className="h-6 w-6 text-primary" />
            <span>CyberSafe Education</span>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/10">
          <div className="container">
            <motion.div
              className="max-w-3xl mx-auto text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="px-3 py-1 text-sm mb-4 border-primary/20 bg-primary/5 text-primary">
                Knowledge Base
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Cybersecurity <span className="text-primary">Topics</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Explore our comprehensive collection of cybersecurity subjects and educational resources.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Topics */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Personal Security",
                  description:
                    "Essential security practices for individuals to protect their digital identity and personal information.",
                  icon: <Users className="h-10 w-10 text-primary" />,
                  topics: [
                    "Password Security",
                    "Identity Protection",
                    "Social Media Privacy",
                    "Mobile Device Security",
                  ],
                  link: "/topics/personal-security",
                },
                {
                  title: "Threat Intelligence",
                  description:
                    "Understanding current and emerging cybersecurity threats and how to defend against them.",
                  icon: <Shield className="h-10 w-10 text-primary" />,
                  topics: [
                    "Malware Analysis",
                    "Phishing Techniques",
                    "Ransomware Protection",
                    "Zero-Day Vulnerabilities",
                  ],
                  link: "/topics/threat-intelligence",
                },
                {
                  title: "Network Security",
                  description:
                    "Protecting network infrastructure and data transmission from unauthorized access and attacks.",
                  icon: <Globe className="h-10 w-10 text-primary" />,
                  topics: ["Firewall Configuration", "VPN Implementation", "Wireless Security", "Network Monitoring"],
                  link: "/topics/network-security",
                },
                {
                  title: "Data Protection",
                  description: "Strategies and techniques for securing sensitive data at rest and in transit.",
                  icon: <Database className="h-10 w-10 text-primary" />,
                  topics: [
                    "Encryption Methods",
                    "Data Backup Strategies",
                    "Secure File Sharing",
                    "Data Loss Prevention",
                  ],
                  link: "/topics/data-protection",
                },
                {
                  title: "System Security",
                  description:
                    "Securing operating systems, applications, and hardware against vulnerabilities and exploits.",
                  icon: <Laptop className="h-10 w-10 text-primary" />,
                  topics: ["OS Hardening", "Application Security", "Patch Management", "Endpoint Protection"],
                  link: "/topics/system-security",
                },
                {
                  title: "Organizational Security",
                  description: "Comprehensive security frameworks and practices for businesses and organizations.",
                  icon: <Server className="h-10 w-10 text-primary" />,
                  topics: ["Security Policies", "Employee Training", "Incident Response", "Compliance Requirements"],
                  link: "/topics/organizational-security",
                },
              ].map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col transition-all hover:shadow-md hover:border-primary/50">
                    <CardHeader>
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        {topic.icon}
                      </div>
                      <CardTitle className="text-2xl">{topic.title}</CardTitle>
                      <CardDescription className="text-base">{topic.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-muted-foreground">Key Subjects:</h4>
                        <ul className="space-y-1">
                          {topic.topics.map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full gap-1 group" asChild>
                        <Link href={topic.link}>
                          Explore Topic
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Topics */}
        <section className="py-16 bg-muted/50 dark:bg-muted/10">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Special Focus Areas</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Dive deeper into these specialized cybersecurity topics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Keylogger Protection",
                  description: "Comprehensive guide to understanding, detecting, and defending against keyloggers.",
                  icon: <Lock className="h-8 w-8 text-primary" />,
                  link: "/",
                },
                {
                  title: "Child Online Safety",
                  description: "Resources for parents and educators to help protect children in the digital world.",
                  icon: <Users className="h-8 w-8 text-primary" />,
                  link: "/topics/child-online-safety",
                },
              ].map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                    <CardContent className="p-6 flex gap-6">
                      <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {topic.icon}
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold">{topic.title}</h3>
                        <p className="text-muted-foreground">{topic.description}</p>
                        <Button variant="outline" className="gap-1 group" asChild>
                          <Link href={topic.link}>
                            Learn More
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Structured Learning Paths</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Follow these curated learning paths to build your cybersecurity knowledge systematically.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Beginner's Path",
                  description:
                    "Start your cybersecurity journey with fundamental concepts and basic protection strategies.",
                  level: "Beginner",
                  duration: "4-6 weeks",
                  link: "/learning-paths/beginner",
                },
                {
                  title: "Intermediate Path",
                  description:
                    "Expand your knowledge with more advanced topics and practical security implementations.",
                  level: "Intermediate",
                  duration: "8-10 weeks",
                  link: "/learning-paths/intermediate",
                },
                {
                  title: "Advanced Path",
                  description: "Master complex security concepts and specialized areas of cybersecurity.",
                  level: "Advanced",
                  duration: "12+ weeks",
                  link: "/learning-paths/advanced",
                },
              ].map((path, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col transition-all hover:shadow-md hover:border-primary/50">
                    <CardHeader>
                      <Badge className="w-fit mb-2">{path.level}</Badge>
                      <CardTitle>{path.title}</CardTitle>
                      <CardDescription>Duration: {path.duration}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{path.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full gap-1 group" asChild>
                        <Link href={path.link}>
                          View Path
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/50 dark:bg-muted/10">
          <div className="container">
            <motion.div
              className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-xl p-8 md:p-12 border border-primary/20 text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold">Can't Find What You're Looking For?</h2>
              <p className="text-muted-foreground">
                Our team is continuously expanding our educational resources. Let us know what topics you'd like to see
                covered.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Request a Topic</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <Shield className="h-6 w-6 text-primary" />
                <span>CyberSafe Education</span>
              </div>
              <p className="text-muted-foreground">
                Empowering users with cybersecurity knowledge for a safer digital experience.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                    Security Blog
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="text-muted-foreground hover:text-foreground transition-colors">
                    Guides & Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/tools" className="text-muted-foreground hover:text-foreground transition-colors">
                    Security Tools
                  </Link>
                </li>
                <li>
                  <Link href="/glossary" className="text-muted-foreground hover:text-foreground transition-colors">
                    Glossary
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} CyberSafe Education. All rights reserved.</p>
            <p className="mt-2">
              Designed and Developed by <span className="font-bold text-primary">Dev Queens</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

