"use client"

import Link from "next/link"
import { Shield, ArrowLeft, Download, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function SecurityChecklistPage() {
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
                Essential Resource
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Cybersecurity <span className="text-primary">Checklist</span>
              </h1>
              <p className="text-xl text-muted-foreground">A comprehensive guide to securing your digital life.</p>
              <Button size="lg" className="gap-2 mt-4" asChild>
                <a href="cybersecurity-checklist.pdf" download>
                  Download PDF Version
                  <Download className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Checklist Content */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Account Security */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Badge className="px-3 py-1">Account Security</Badge>
                  <div className="h-px flex-grow bg-border"></div>
                </div>

                <Card>
                  <CardContent className="p-6 space-y-4">
                    {[
                      "Use strong, unique passwords for each account (12+ characters with a mix of letters, numbers, and symbols)",
                      "Enable two-factor authentication (2FA) on all accounts that support it",
                      "Use a password manager to securely store and generate passwords",
                      "Regularly review and remove unused accounts and apps",
                      "Set up account recovery options and keep them updated",
                      "Be cautious of password reset emails you didn't request",
                      "Log out of accounts when using shared or public computers",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p>{item}</p>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Device Security */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Badge className="px-3 py-1">Device Security</Badge>
                  <div className="h-px flex-grow bg-border"></div>
                </div>

                <Card>
                  <CardContent className="p-6 space-y-4">
                    {[
                      "Keep all operating systems and software updated with the latest security patches",
                      "Use reputable antivirus/anti-malware software and keep it updated",
                      "Enable device encryption (BitLocker for Windows, FileVault for Mac)",
                      "Set up screen locks with strong passwords or biometric authentication",
                      "Back up important data regularly using the 3-2-1 rule (3 copies, 2 different media types, 1 offsite)",
                      "Be cautious when connecting to public Wi-Fi networks; use a VPN when possible",
                      "Disable Bluetooth and Wi-Fi when not in use",
                      "Review app permissions regularly and limit access to sensitive data",
                      "Use a firewall on all devices",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p>{item}</p>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Email Security */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Badge className="px-3 py-1">Email Security</Badge>
                  <div className="h-px flex-grow bg-border"></div>
                </div>

                <Card>
                  <CardContent className="p-6 space-y-4">
                    {[
                      "Be suspicious of unexpected emails, especially those with urgent requests or too-good-to-be-true offers",
                      "Never click on links or download attachments from unknown or suspicious senders",
                      "Verify the sender's email address carefully; look for subtle misspellings or domain changes",
                      "Use email filtering to reduce spam and phishing attempts",
                      "Avoid sending sensitive information via email; use secure messaging or encrypted email when necessary",
                      "Be cautious with email forwarding, especially for sensitive content",
                      "Use a separate email address for online shopping and non-essential accounts",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p>{item}</p>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Online Privacy */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Badge className="px-3 py-1">Online Privacy</Badge>
                  <div className="h-px flex-grow bg-border"></div>
                </div>

                <Card>
                  <CardContent className="p-6 space-y-4">
                    {[
                      "Use a VPN when accessing sensitive information or using public Wi-Fi",
                      "Regularly review and adjust privacy settings on social media accounts",
                      "Be mindful of what you share online; once posted, it's difficult to completely remove",
                      "Use private browsing modes when appropriate, but understand their limitations",
                      "Clear cookies and browsing history regularly",
                      "Consider using privacy-focused browsers and search engines",
                      "Use ad-blockers and anti-tracking extensions",
                      "Review app permissions and limit location tracking",
                      "Be cautious with online quizzes and surveys that collect personal information",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p>{item}</p>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Home Network Security */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Badge className="px-3 py-1">Home Network Security</Badge>
                  <div className="h-px flex-grow bg-border"></div>
                </div>

                <Card>
                  <CardContent className="p-6 space-y-4">
                    {[
                      "Change default router login credentials and use a strong password",
                      "Update router firmware regularly",
                      "Use WPA3 encryption for your Wi-Fi network if available, or at minimum WPA2",
                      "Create a guest network for visitors and IoT devices",
                      "Use strong, unique Wi-Fi passwords and change them periodically",
                      "Enable router firewall and other security features",
                      "Consider using DNS filtering to block malicious websites",
                      "Position your router in a central location to minimize signal outside your home",
                      "Disable remote management of your router",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p>{item}</p>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 bg-muted/50 dark:bg-muted/10">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Additional Resources</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore these resources to further enhance your cybersecurity knowledge and protection.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Comprehensive Guide to Personal Cybersecurity",
                  description: "A detailed guide covering all aspects of personal digital security.",
                  link: "/guides/personal-cybersecurity",
                },
                {
                  title: "Security Tools Comparison",
                  description: "Compare different security tools to find the best options for your needs.",
                  link: "/tools",
                },
                {
                  title: "Cybersecurity Glossary",
                  description:
                    "Learn the terminology used in cybersecurity to better understand threats and protections.",
                  link: "/glossary",
                },
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold">{resource.title}</h3>
                      <p className="text-muted-foreground">{resource.description}</p>
                      <Button variant="outline" className="w-full gap-1 group" asChild>
                        <Link href={resource.link}>
                          Explore
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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

