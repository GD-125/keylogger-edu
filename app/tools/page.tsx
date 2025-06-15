"use client"

import Link from "next/link"
import { Shield, ArrowLeft, PenToolIcon as Tool, ExternalLink, Download, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ToolsPage() {
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
                Security Resources
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Cybersecurity <span className="text-primary">Tools</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover recommended software and resources to enhance your digital security.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tool Categories */}
        <section className="py-16">
          <div className="container">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
                <TabsTrigger value="all">All Tools</TabsTrigger>
                <TabsTrigger value="antivirus">Antivirus</TabsTrigger>
                <TabsTrigger value="password">Password Managers</TabsTrigger>
                <TabsTrigger value="vpn">VPN Services</TabsTrigger>
                <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Anti-Keylogger Software",
                      description:
                        "Specialized tools designed to detect and block keylogging activities on your devices.",
                      category: "Protection",
                      // rating: 4.8,
                      // free: true,
                      icon: <Tool className="h-8 w-8 text-primary" />,
                      slug: "anti-keylogger",
                    },
                    {
                      title: "Password Managers",
                      description:
                        "Secure applications for generating and storing complex passwords across all your accounts.",
                      category: "Security",
                      // rating: 4.9,
                      // free: true,
                      icon: <Tool className="h-8 w-8 text-primary" />,
                      slug: "password-managers",
                    },
                    {
                      title: "Virtual Keyboards",
                      description:
                        "On-screen keyboards that help bypass hardware keyloggers and protect against keystroke capture.",
                      category: "Protection",
                      // rating: 4.5,
                      // free: true,
                      icon: <Tool className="h-8 w-8 text-primary" />,
                      slug: "virtual-keyboards",
                    },
                    {
                      title: "Network Monitoring Tools",
                      description:
                        "Applications that monitor network traffic for suspicious activities and unauthorized connections.",
                      category: "Monitoring",
                      // rating: 4.7,
                      // free: false,
                      icon: <Tool className="h-8 w-8 text-primary" />,
                      slug: "network-monitoring",
                    },
                    {
                      title: "Antivirus Software",
                      description:
                        "Comprehensive protection against malware, including keyloggers, trojans, and other threats.",
                      category: "Protection",
                      // rating: 4.6,
                      // free: true,
                      icon: <Tool className="h-8 w-8 text-primary" />,
                      slug: "antivirus-software",
                    },
                    {
                      title: "Encryption Tools",
                      description:
                        "Software for encrypting your files, folders, and communications to protect sensitive data.",
                      category: "Privacy",
                      // rating: 4.8,
                      // free: true,
                      icon: <Tool className="h-8 w-8 text-primary" />,
                      slug: "encryption-tools",
                    },
                    {
                      title: "VPN Services",
                      description:
                        "Virtual Private Networks that encrypt your internet connection and protect your online privacy.",
                      category: "Privacy",
                      // rating: 4.7,
                      // free: false,
                      icon: <Tool className="h-8 w-8 text-primary" />,
                      slug: "vpn-services",
                    },
                    {
                      title: "Two-Factor Authentication Apps",
                      description:
                        "Applications that add an extra layer of security to your accounts beyond passwords.",
                      category: "Security",
                      // rating: 4.9,
                      // free: true,
                      icon: <Tool className="h-8 w-8 text-primary" />,
                      slug: "two-factor-authentication",
                    },
                    {
                      title: "Security Scanners",
                      description:
                        "Tools that scan your system for vulnerabilities, outdated software, and security risks.",
                      category: "Monitoring",
                      // rating: 4.6,
                      // free: true,
                      icon: <Tool className="h-8 w-8 text-primary" />,
                      slug: "security-scanners",
                    },
                  ].map((tool, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full flex flex-col transition-all hover:shadow-md hover:border-primary/50">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                              {tool.icon}
                            </div>
                            <Badge variant={tool.free ? "default" : "secondary"}>
                              {tool.free ? "Free" : "Premium"}
                            </Badge>
                          </div>
                          <CardTitle className="mt-4">{tool.title}</CardTitle>
                          <CardDescription>{tool.category}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-muted-foreground">{tool.description}</p>
                          <div className="flex items-center mt-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                              <span className="ml-1">{tool.rating}/5</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" size="sm" className="gap-1" asChild>
                            <Link href={`/tools/${tool.slug}`}>Learn More</Link>
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-1" asChild>
                            <Link href={`/tools/${tool.slug}/download`}>
                              <Download className="h-4 w-4" />
                              Download
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="antivirus">
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">Antivirus & Anti-Malware Tools</h3>
                  <p className="text-muted-foreground mb-6">Protect your devices from malicious software and threats</p>
                  <Button asChild>
                    <Link href="/tools?category=antivirus">View All Antivirus Tools</Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="password">
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">Password Management Solutions</h3>
                  <p className="text-muted-foreground mb-6">Secure and convenient ways to manage your credentials</p>
                  <Button asChild>
                    <Link href="/tools?category=password">View All Password Tools</Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="vpn">
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">VPN & Privacy Services</h3>
                  <p className="text-muted-foreground mb-6">Protect your online privacy and secure your connections</p>
                  <Button asChild>
                    <Link href="/tools?category=vpn">View All VPN Services</Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="monitoring">
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">Security Monitoring Tools</h3>
                  <p className="text-muted-foreground mb-6">Keep an eye on your systems and detect threats early</p>
                  <Button asChild>
                    <Link href="/tools?category=monitoring">View All Monitoring Tools</Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Featured Tool */}
        <section className="py-16 bg-muted/50 dark:bg-muted/10">
          <div className="container">
            <motion.div
              className="max-w-4xl mx-auto bg-background rounded-lg shadow-sm border overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2">
                <div className="bg-primary/10 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="h-24 w-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <Shield className="h-12 w-12 text-primary" />
                    </div>
                    <Badge className="mt-4">Featured Tool</Badge>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h2 className="text-2xl font-bold">CyberSafe Security Suite</h2>
                  <p className="text-muted-foreground">
                    Our comprehensive security toolkit that combines anti-keylogging, password management, and system
                    monitoring in one package.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">All-in-One</Badge>
                    <Badge variant="outline">Free Version</Badge>
                    <Badge variant="outline">Cross-Platform</Badge>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/tools/cybersafe-security-suite">Learn More</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* External Resources */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Additional Resources</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We've curated a list of trusted external resources to complement our recommended tools.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "NIST Cybersecurity Framework",
                  description:
                    "Guidelines and best practices for managing cybersecurity risk from the National Institute of Standards and Technology.",
                  url: "https://www.nist.gov/cyberframework",
                },
                {
                  title: "SANS Security Resources",
                  description: "Free security resources, research, and tools from the SANS Institute.",
                  url: "https://www.sans.org/security-resources/",
                },
                {
                  title: "Have I Been Pwned",
                  description: "Check if your email or phone has been compromised in a data breach.",
                  url: "https://haveibeenpwned.com/",
                },
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col transition-all hover:shadow-md hover:border-primary/50">
                    <CardHeader>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm">{resource.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full gap-1" asChild>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          Visit Resource
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
{/*         <section className="py-16 bg-muted/50 dark:bg-muted/10">
          <div className="container">
            <motion.div
              className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-xl p-8 md:p-12 border border-primary/20 text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold">Not Sure Where to Start?</h2>
              <p className="text-muted-foreground">
                Take our security assessment to get personalized tool recommendations based on your needs.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <Link href="/tools/assessment">
                  Take Security Assessment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section> */}
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
              Designed and Developed by{" "}
              <a
                href="https://devqueens.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-primary hover:underline"
              >
                DevQueens
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

