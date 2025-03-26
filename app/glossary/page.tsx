"use client"

import Link from "next/link"
import { Shield, ArrowLeft, Search, BookOpen, AlertTriangle, Zap, Lock, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const glossaryTerms = [
    {
      term: "Keylogger",
      definition:
        "Software or hardware that records keystrokes made on a computer or mobile device, often used maliciously to capture sensitive information like passwords and credit card numbers.",
      category: "Threats",
    },
    {
      term: "Two-Factor Authentication (2FA)",
      definition:
        "A security process that requires users to provide two different authentication factors to verify their identity, typically something they know (password) and something they have (mobile device).",
      category: "Security",
    },
    {
      term: "Malware",
      definition:
        "Malicious software designed to damage, disrupt, or gain unauthorized access to a computer system. Examples include viruses, worms, trojans, and ransomware.",
      category: "Threats",
    },
    {
      term: "Phishing",
      definition:
        "A cybercrime technique where attackers disguise themselves as trustworthy entities to trick individuals into revealing sensitive information such as passwords or credit card details.",
      category: "Threats",
    },
    {
      term: "Encryption",
      definition:
        "The process of converting information or data into a code to prevent unauthorized access. Encrypted data appears scrambled and requires a key to decrypt and read.",
      category: "Security",
    },
    {
      term: "Firewall",
      definition:
        "A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules, acting as a barrier between a trusted network and untrusted networks.",
      category: "Security",
    },
    {
      term: "VPN (Virtual Private Network)",
      definition:
        "A service that encrypts your internet connection and disguises your online identity, helping to protect your privacy and sensitive data when using public networks.",
      category: "Privacy",
    },
    {
      term: "Zero-day Vulnerability",
      definition:
        "A software security flaw that is unknown to the software vendor and has not yet been patched, giving attackers the opportunity to exploit it before a fix is available.",
      category: "Threats",
    },
    {
      term: "Social Engineering",
      definition:
        "The psychological manipulation of people into performing actions or divulging confidential information. It relies on human error rather than technical hacking techniques.",
      category: "Threats",
    },
    {
      term: "Ransomware",
      definition:
        "A type of malicious software designed to block access to a computer system or data until a sum of money (ransom) is paid.",
      category: "Threats",
    },
    {
      term: "Brute Force Attack",
      definition:
        "A trial-and-error method used to obtain information such as passwords or PINs by systematically trying all possible combinations until the correct one is found.",
      category: "Attacks",
    },
    {
      term: "DDoS (Distributed Denial of Service)",
      definition:
        "A malicious attempt to disrupt the normal traffic of a targeted server, service, or network by overwhelming it with a flood of internet traffic from multiple sources.",
      category: "Attacks",
    },
    {
      term: "Spyware",
      definition:
        "Software that secretly monitors and collects information about a user's activities without their knowledge or consent.",
      category: "Threats",
    },
    {
      term: "Rootkit",
      definition:
        "A collection of software tools that enable an unauthorized user to gain control of a computer system without being detected.",
      category: "Threats",
    },
    {
      term: "SSL/TLS (Secure Sockets Layer/Transport Layer Security)",
      definition:
        "Cryptographic protocols designed to provide secure communication over a computer network, commonly used to secure websites (HTTPS).",
      category: "Security",
    },
    {
      term: "Penetration Testing",
      definition:
        "An authorized simulated cyberattack on a computer system, performed to evaluate the security of the system and identify vulnerabilities.",
      category: "Security",
    },
    {
      term: "Biometric Authentication",
      definition:
        "A security process that relies on the unique biological characteristics of individuals, such as fingerprints, facial recognition, or iris scans, to verify their identity.",
      category: "Security",
    },
    {
      term: "Trojan Horse",
      definition:
        "A type of malware that disguises itself as legitimate software but contains malicious code designed to perform harmful actions once installed.",
      category: "Threats",
    },
    {
      term: "Man-in-the-Middle Attack",
      definition:
        "A cyberattack where the attacker secretly relays and possibly alters the communications between two parties who believe they are directly communicating with each other.",
      category: "Attacks",
    },
    {
      term: "Patch",
      definition:
        "A software update designed to fix bugs, security vulnerabilities, or improve the performance of a program or operating system.",
      category: "Security",
    },
  ]

  // Filter terms based on search
  const filteredTerms = glossaryTerms.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Group terms alphabetically
  const groupedTerms = filteredTerms.reduce((acc, term) => {
    const firstLetter = term.term[0].toUpperCase()
    if (!acc[firstLetter]) {
      acc[firstLetter] = []
    }
    acc[firstLetter].push(term)
    return acc
  }, {})

  // Sort the keys alphabetically
  const sortedLetters = Object.keys(groupedTerms).sort()

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
                Terminology
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Cybersecurity <span className="text-primary">Glossary</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A comprehensive reference of cybersecurity terms and definitions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 border-b">
          <div className="container">
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search glossary terms..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Glossary Content */}
        <section className="py-16">
          <div className="container">
            {filteredTerms.length > 0 ? (
              <div className="space-y-12">
                {sortedLetters.map((letter) => (
                  <div key={letter} className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">
                        {letter}
                      </div>
                      <div className="h-px flex-grow bg-border"></div>
                    </div>

                    <div className="grid gap-6">
                      {groupedTerms[letter].map((item, index) => (
                        <motion.div
                          key={index}
                          className="bg-background rounded-lg p-6 shadow-sm border"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                          <div className="flex flex-col md:flex-row md:items-start gap-4">
                            <div className="md:w-1/3">
                              <div className="flex items-center gap-2">
                                <h3 className="text-xl font-bold">{item.term}</h3>
                                <Badge variant="outline">{item.category}</Badge>
                              </div>
                            </div>
                            <div className="md:w-2/3">
                              <p className="text-muted-foreground">{item.definition}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mx-auto">
                  <BookOpen className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-medium mt-6 mb-2">No matching terms found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or browse the full glossary instead.
                </p>
                <Button variant="outline" className="mt-4" onClick={() => setSearchTerm("")}>
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-muted/50 dark:bg-muted/10">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore cybersecurity terms organized by category.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Security Concepts",
                  count: 8,
                  icon: <Shield className="h-8 w-8 text-primary" />,
                  slug: "security",
                },
                {
                  title: "Common Threats",
                  count: 10,
                  icon: <AlertTriangle className="h-8 w-8 text-primary" />,
                  slug: "threats",
                },
                {
                  title: "Attack Types",
                  count: 6,
                  icon: <Zap className="h-8 w-8 text-primary" />,
                  slug: "attacks",
                },
                {
                  title: "Privacy Tools",
                  count: 5,
                  icon: <Lock className="h-8 w-8 text-primary" />,
                  slug: "privacy",
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Button
                    variant="outline"
                    className="w-full h-auto py-8 flex flex-col items-center gap-4 hover:bg-primary/5 hover:border-primary/20"
                    asChild
                  >
                    <Link href={`/glossary/category/${category.slug}`}>
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                        {category.icon}
                      </div>
                      <div className="text-center">
                        <h3 className="text-lg font-medium">{category.title}</h3>
                        <p className="text-sm text-muted-foreground">{category.count} terms</p>
                      </div>
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-16">
          <div className="container">
            <motion.div
              className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-xl p-8 md:p-12 border border-primary/20 text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold">Download Complete Glossary</h2>
              <p className="text-muted-foreground">
                Get our comprehensive cybersecurity glossary in PDF format for offline reference.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <Link href="/resources/cybersecurity-glossary.pdf">
                  Download PDF
                  <Download className="h-4 w-4" />
                </Link>
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

