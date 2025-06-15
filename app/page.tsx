"use client"

import Link from "next/link"
import {
  ArrowRight,
  Shield,
  Eye,
  Lock,
  AlertTriangle,
  Moon,
  Sun,
  ExternalLink,
  Info,
  FileText,
  BookOpen,
  Code,
  Server,
  Database,
  ShieldAlert,
  Search,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import KeyloggerDemo from "@/components/keylogger-demo"
import PreventionCard from "@/components/prevention-card"
import DetectionCard from "@/components/detection-card"
import HeroAnimation from "@/components/hero-animation"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import InteractiveDemo from "@/components/interactive-demo"
import TypesOfKeyloggers from "@/components/types-of-keyloggers"
import RealWorldCases from "@/components/real-world-cases"
import LegalImplications from "@/components/legal-implications"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("what-are-keyloggers")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "what-are-keyloggers",
        "types-of-keyloggers",
        "how-they-work",
        "interactive-demo",
        "detection",
        "prevention",
        "real-world-cases",
        "legal-implications",
        "resources",
      ]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Shield className="h-6 w-6 text-primary" />
            <span>CyberSafe Education</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link
              href="#what-are-keyloggers"
              className={`${activeSection === "what-are-keyloggers" ? "text-primary font-medium" : "text-muted-foreground"} hover:text-foreground transition-colors`}
            >
              What are Keyloggers
            </Link>
            <Link
              href="#types-of-keyloggers"
              className={`${activeSection === "types-of-keyloggers" ? "text-primary font-medium" : "text-muted-foreground"} hover:text-foreground transition-colors`}
            >
              Types
            </Link>
            <Link
              href="#how-they-work"
              className={`${activeSection === "how-they-work" ? "text-primary font-medium" : "text-muted-foreground"} hover:text-foreground transition-colors`}
            >
              How They Work
            </Link>
            <Link
              href="#detection"
              className={`${activeSection === "detection" ? "text-primary font-medium" : "text-muted-foreground"} hover:text-foreground transition-colors`}
            >
              Detection
            </Link>
            <Link
              href="#prevention"
              className={`${activeSection === "prevention" ? "text-primary font-medium" : "text-muted-foreground"} hover:text-foreground transition-colors`}
            >
              Prevention
            </Link>
            <Link
              href="#real-world-cases"
              className={`${activeSection === "real-world-cases" ? "text-primary font-medium" : "text-muted-foreground"} hover:text-foreground transition-colors`}
            >
              Case Studies
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <Button variant="outline" size="icon" onClick={toggleTheme} className="rounded-full border-primary/20">
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-primary" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Resources Button (Desktop) */}
            <Button asChild className="hidden md:flex">
              <Link href="/resources/security-checklist">Resources</Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-background/95 pt-16 px-4">
          <nav className="flex flex-col gap-4 mt-6">
            <Link
              href="#what-are-keyloggers"
              className={`${activeSection === "what-are-keyloggers" ? "text-primary font-medium" : "text-muted-foreground"} hover:text-foreground transition-colors py-3 text-lg border-b`}
              onClick={() => setMobileMenuOpen(false)}
            >
              What are Keyloggers
            </Link>
            <Link
              href="#types-of-keyloggers"
              className={`${activeSection === "types-of-keyloggers" ? "text-primary font-medium" : "text-muted-foreground"} hover:text-foreground transition-colors py-3 text-lg border-b`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Types
            </Link>
            <Link
              href="#how-they-work"
              className={`${activeSection === "how-they-work" ? "text-primary font-medium" : "text-muted-foreground"} hover:text-foreground transition-colors py-3 text-lg border-b`}
              onClick={() => setMobileMenuOpen(false)}
            >
              How They Work
            </Link>
            <Link
              href="#detection"
              className={`${activeSection === "detection" ? "text-primary font-medium" : "text-muted-foreground"} hover:text-foreground transition-colors py-3 text-lg border-b`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Detection
            </Link>
            <Link
              href="#prevention"
              className={`${activeSection === "prevention" ? "text-primary font-medium" : "text-muted-foreground"} hover:text-foreground transition-colors py-3 text-lg border-b`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Prevention
            </Link>
            <Link
              href="#real-world-cases"
              className={`${activeSection === "real-world-cases" ? "text-primary font-medium" : "text-muted-foreground"} hover:text-foreground transition-colors py-3 text-lg border-b`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              href="#resources"
              className={`${activeSection === "resources" ? "text-primary font-medium" : "text-muted-foreground"} hover:text-foreground transition-colors py-3 text-lg border-b`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>

            <div className="flex items-center gap-2 mt-6">
              <span className="text-sm text-muted-foreground">Theme:</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  toggleTheme()
                  setMobileMenuOpen(false)
                }}
                className="gap-2"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="h-4 w-4 text-yellow-500" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 text-primary" />
                    <span>Dark Mode</span>
                  </>
                )}
              </Button>
            </div>
          </nav>
        </div>
      )}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/10">
          <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Badge variant="outline" className="px-3 py-1 text-sm mb-4 border-primary/20 bg-primary/5 text-primary">
                  Cybersecurity Education
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Understanding <span className="text-primary">Keyloggers</span> for Better Security
                </h1>
                <p className="text-xl text-muted-foreground mt-6">
                  Learn how keyloggers work, how to detect them, and most importantly, how to protect yourself from this
                  common cybersecurity threat.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" className="gap-2 group" asChild>
                    <Link href="#what-are-keyloggers">
                      Start Learning
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#resources">View Resources</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <HeroAnimation />
            </motion.div>
          </div>
        </section>

        {/* What are Keyloggers */}
        <section id="what-are-keyloggers" className="py-16 bg-muted/50 dark:bg-muted/10">
          <div className="container space-y-12">
            <motion.div
              className="text-center space-y-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="px-3 py-1 text-sm mb-2">
                Introduction
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">What are Keyloggers?</h2>
              <p className="text-xl text-muted-foreground">
                Keyloggers are monitoring tools that record keystrokes made by a user. While they have legitimate uses,
                they can also be misused for malicious purposes.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="bg-background rounded-lg p-6 shadow-sm border transition-all hover:shadow-md hover:border-primary/50 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Monitoring Tool</h3>
                <p className="text-muted-foreground">
                  Keyloggers record every keystroke made on a device, capturing passwords, messages, and other sensitive
                  information.
                </p>
              </motion.div>

              <motion.div
                className="bg-background rounded-lg p-6 shadow-sm border transition-all hover:shadow-md hover:border-primary/50 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Types of Keyloggers</h3>
                <p className="text-muted-foreground">
                  Keyloggers can be hardware devices or software programs, each with different methods of installation
                  and data collection.
                </p>
              </motion.div>

              <motion.div
                className="bg-background rounded-lg p-6 shadow-sm border transition-all hover:shadow-md hover:border-primary/50 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Security Implications</h3>
                <p className="text-muted-foreground">
                  When used maliciously, keyloggers can lead to identity theft, financial fraud, and unauthorized access
                  to accounts.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Types of Keyloggers */}
        <section id="types-of-keyloggers" className="py-16">
          <div className="container">
            <motion.div
              className="text-center space-y-4 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="px-3 py-1 text-sm mb-2">
                Classification
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Types of Keyloggers</h2>
              <p className="text-xl text-muted-foreground">
                Keyloggers come in various forms, each with different implementation methods and capabilities.
              </p>
            </motion.div>

            <TypesOfKeyloggers />
          </div>
        </section>

        {/* How Keyloggers Work */}
        <section id="how-they-work" className="py-16 bg-muted/50 dark:bg-muted/10">
          <div className="container">
            <motion.div
              className="text-center space-y-4 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="px-3 py-1 text-sm mb-2">
                Mechanics
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">How Keyloggers Work</h2>
              <p className="text-xl text-muted-foreground">
                Understanding the mechanics behind keyloggers can help you better protect yourself against them.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">Capturing Keystrokes</h3>
                  <p className="text-muted-foreground">
                    Keyloggers intercept and record the signals sent from your keyboard to your operating system,
                    capturing everything you type.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">Data Storage</h3>
                  <p className="text-muted-foreground">
                    The captured data is stored either locally on the infected device or sent to a remote server
                    controlled by the attacker.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">Data Transmission</h3>
                  <p className="text-muted-foreground">
                    Malicious keyloggers typically transmit the collected data to attackers through email, FTP, or by
                    uploading to a web server.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">Stealth Techniques</h3>
                  <p className="text-muted-foreground">
                    Advanced keyloggers use various techniques to hide their presence, such as running as system
                    processes or using rootkit technology.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <KeyloggerDemo />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Demo */}
        <section id="interactive-demo" className="py-16">
          <div className="container space-y-8">
            <motion.div
              className="text-center space-y-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="px-3 py-1 text-sm mb-2">
                Try It Yourself
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Interactive Demonstration</h2>
              <p className="text-xl text-muted-foreground">
                See how keyloggers capture information in this safe, educational demonstration.
              </p>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <InteractiveDemo />
            </motion.div>
          </div>
        </section>

        {/* Detection */}
        <section id="detection" className="py-16 bg-muted/50 dark:bg-muted/10">
          <div className="container space-y-12">
            <motion.div
              className="text-center space-y-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="px-3 py-1 text-sm mb-2">
                Identification
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">How to Detect Keyloggers</h2>
              <p className="text-xl text-muted-foreground">
                Identifying the presence of a keylogger can be challenging, but there are warning signs to watch for.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Unusual System Behavior",
                  description:
                    "Slow performance, unexpected crashes, or strange delays when typing could indicate a keylogger.",
                },
                {
                  title: "Suspicious Processes",
                  description:
                    "Unknown processes running in your task manager might be associated with keylogging software.",
                },
                {
                  title: "Unexpected Network Activity",
                  description:
                    "Unusual outbound network connections could indicate a keylogger sending data to a remote server.",
                },
                {
                  title: "Anti-Virus Alerts",
                  description:
                    "Modern anti-virus software can detect many known keyloggers during regular system scans.",
                },
                {
                  title: "Unexpected Hardware",
                  description:
                    "Physical keyloggers may appear as small devices between your keyboard cable and computer.",
                },
                {
                  title: "Suspicious Files",
                  description:
                    "Unknown or suspicious files in startup folders or registry entries could be keyloggers.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <DetectionCard title={item.title} description={item.description} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Prevention */}
        <section id="prevention" className="py-16">
          <div className="container space-y-12">
            <motion.div
              className="text-center space-y-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="px-3 py-1 text-sm mb-2">
                Protection
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Protecting Yourself from Keyloggers</h2>
              <p className="text-xl text-muted-foreground">
                Implement these security measures to minimize the risk of keylogger attacks.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Keep Software Updated",
                  description:
                    "Regularly update your operating system and applications to patch security vulnerabilities.",
                },
                {
                  title: "Use Anti-Malware Software",
                  description:
                    "Install and maintain reputable anti-malware software that can detect and remove keyloggers.",
                },
                {
                  title: "Be Cautious with Downloads",
                  description:
                    "Only download software from trusted sources to avoid bundled malware that might include keyloggers.",
                },
                {
                  title: "Use Two-Factor Authentication",
                  description:
                    "Enable 2FA where possible, as it provides an additional layer of security even if passwords are compromised.",
                },
                {
                  title: "Virtual Keyboards",
                  description:
                    "Use on-screen virtual keyboards when entering sensitive information to bypass hardware keyloggers.",
                },
                {
                  title: "Regular Security Scans",
                  description:
                    "Perform regular security scans to detect and remove any potential threats including keyloggers.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <PreventionCard title={item.title} description={item.description} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Real World Cases */}
        <section id="real-world-cases" className="py-16 bg-muted/50 dark:bg-muted/10">
          <div className="container">
            <motion.div
              className="text-center space-y-4 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="px-3 py-1 text-sm mb-2">
                Case Studies
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Real-World Keylogger Cases</h2>
              <p className="text-xl text-muted-foreground">
                Examining actual incidents helps understand the real impact of keylogger attacks.
              </p>
            </motion.div>

            <RealWorldCases />
          </div>
        </section>

        {/* Legal Implications */}
        <section id="legal-implications" className="py-16">
          <div className="container">
            <motion.div
              className="text-center space-y-4 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="px-3 py-1 text-sm mb-2">
                Legal Framework
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Legal Implications</h2>
              <p className="text-xl text-muted-foreground">
                Understanding the legal aspects of keyloggers in different contexts.
              </p>
            </motion.div>

            <LegalImplications />
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-16 bg-muted/50 dark:bg-muted/10">
          <div className="container space-y-12">
            <motion.div
              className="text-center space-y-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="px-3 py-1 text-sm mb-2">
                Learning Materials
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Cybersecurity Resources</h2>
              <p className="text-xl text-muted-foreground">
                Expand your knowledge with these carefully selected resources.
              </p>
            </motion.div>

            <Tabs defaultValue="guides" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="tools">Security Tools</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="articles">Articles</TabsTrigger>
              </TabsList>
              <TabsContent value="guides" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Complete Guide to Personal Cybersecurity",
                      description: "A comprehensive guide covering all aspects of personal digital security.",
                      icon: <FileText className="h-5 w-5" />,
                      link: "/guides/personal-cybersecurity.pdf",
                    },
                    {
                      title: "Identifying and Removing Malware",
                      description: "Step-by-step instructions for detecting and eliminating various types of malware.",
                      icon: <Search className="h-5 w-5" />,
                      link: "/guides/malware-removal.pdf",
                    },
                    {
                      title: "Secure Password Management",
                      description: "Best practices for creating and managing strong, unique passwords.",
                      icon: <Lock className="h-5 w-5" />,
                      link: "/guides/password-management.pdf",
                    },
                    {
                      title: "Privacy Protection Guide",
                      description: "Techniques to safeguard your personal information online.",
                      icon: <Shield className="h-5 w-5" />,
                      link: "/guides/privacy-protection.pdf",
                    },
                  ].map((item, index) => (
                    <Card key={index} className="transition-all hover:shadow-md hover:border-primary/50">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            {item.icon}
                          </div>
                          <CardTitle>{item.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{item.description}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full gap-2" asChild>
                          <Link href={item.link}>
                            View Guide <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="tools" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Anti-Keylogger Software",
                      description: "Specialized tools designed to detect and block keylogging activities.",
                      icon: <ShieldAlert className="h-5 w-5" />,
                      link: "/tools/anti-keylogger.pdf",
                    },
                    {
                      title: "Password Managers",
                      description: "Secure applications for generating and storing complex passwords.",
                      icon: <Lock className="h-5 w-5" />,
                      link: "/tools/password-managers.pdf",
                    },
                    {
                      title: "Virtual Keyboards",
                      description: "On-screen keyboards that help bypass hardware keyloggers.",
                      icon: <Code className="h-5 w-5" />,
                      link: "/tools/virtual-keyboards.pdf",
                    },
                    {
                      title: "Network Monitoring Tools",
                      description: "Applications that monitor network traffic for suspicious activities.",
                      icon: <Server className="h-5 w-5" />,
                      link: "/tools/network-monitoring.pdf",
                    },
                  ].map((item, index) => (
                    <Card key={index} className="transition-all hover:shadow-md hover:border-primary/50">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            {item.icon}
                          </div>
                          <CardTitle>{item.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{item.description}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full gap-2" asChild>
                          <Link href={item.link}>
                            Explore Tool <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="courses" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Introduction to Cybersecurity",
                      description: "A beginner-friendly course covering the fundamentals of digital security.",
                      icon: <BookOpen className="h-5 w-5" />,
                      link: "/courses/intro-cybersecurity.pdf",
                    },
                    {
                      title: "Advanced Malware Analysis",
                      description: "Learn techniques for analyzing and understanding malicious software.",
                      icon: <Code className="h-5 w-5" />,
                      link: "/courses/malware-analysis.pdf",
                    },
                    {
                      title: "Ethical Hacking Fundamentals",
                      description: "Understand security from an offensive perspective to better defend systems.",
                      icon: <Shield className="h-5 w-5" />,
                      link: "/courses/ethical-hacking.pdf",
                    },
                    {
                      title: "Digital Forensics",
                      description: "Techniques for investigating digital security incidents and data breaches.",
                      icon: <Search className="h-5 w-5" />,
                      link: "/courses/digital-forensics.pdf",
                    },
                  ].map((item, index) => (
                    <Card key={index} className="transition-all hover:shadow-md hover:border-primary/50">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            {item.icon}
                          </div>
                          <CardTitle>{item.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{item.description}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full gap-2" asChild>
                          <Link href={item.link}>
                            Enroll Now <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="articles" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "The Evolution of Keyloggers",
                      description: "How keylogging technology has evolved over the years and what to expect next.",
                      icon: <Info className="h-5 w-5" />,
                      link: "/articles/keylogger-evolution.pdf",
                    },
                    {
                      title: "Famous Data Breaches Involving Keyloggers",
                      description: "Analysis of major security incidents where keyloggers played a central role.",
                      icon: <Database className="h-5 w-5" />,
                      link: "/articles/keylogger-data-breaches.pf",
                    },
                    {
                      title: "The Psychology of Social Engineering",
                      description: "Understanding the human factors that make social engineering attacks successful.",
                      icon: <BookOpen className="h-5 w-5" />,
                      link: "/articles/social-engineering-psychology.pdf",
                    },
                    {
                      title: "Emerging Threats in Cybersecurity",
                      description: "New and evolving digital threats that everyone should be aware of.",
                      icon: <AlertTriangle className="h-5 w-5" />,
                      link: "/articles/emerging-threats",
                    },
                  ].map((item, index) => (
                    <Card key={index} className="transition-all hover:shadow-md hover:border-primary/50">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            {item.icon}
                          </div>
                          <CardTitle>{item.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{item.description}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full gap-2" asChild>
                          <Link href={item.link}>
                            Read Article <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-xl p-8 md:p-12 border border-primary/20 text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold">Stay Protected in the Digital World</h2>
              <p className="text-xl text-muted-foreground">
                Cybersecurity education is your first line of defense against threats like keyloggers. Continue learning
                and implementing best practices to keep your digital life secure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 group" asChild>
                  <Link href="/resources/security-checklist">
                    Download Security Checklist
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/topics">Explore More Topics</Link>
                </Button>
              </div>
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

