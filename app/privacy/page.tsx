"use client"

import Link from "next/link"
import { Shield, ArrowLeft, Lock, Eye, Server, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function PrivacyPage() {
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
                Your Privacy Matters
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Privacy <span className="text-primary">Policy</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We are committed to protecting your privacy and ensuring the security of your personal information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-background rounded-lg p-8 shadow-sm border">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Eye className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Introduction</h2>
                  </div>
                  <p className="text-muted-foreground">
                    This Privacy Policy explains how CyberSafe Education ("we", "us", or "our") collects, uses, and
                    discloses your information when you use our website, educational resources, and services
                    (collectively, the "Services").
                  </p>
                  <p className="text-muted-foreground">
                    We take your privacy seriously and are committed to protecting your personal information. Please
                    read this Privacy Policy carefully to understand our practices regarding your data.
                  </p>
                  <p className="text-muted-foreground">
                    By accessing or using our Services, you agree to this Privacy Policy. If you do not agree with our
                    policies and practices, please do not use our Services.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Server className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Information We Collect</h2>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">Personal Information</h3>
                    <p className="text-muted-foreground">
                      We may collect personal information that you provide directly to us, including:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>Contact information (such as name, email address, and phone number)</li>
                      <li>Account credentials (such as username and password)</li>
                      <li>Profile information (such as educational background and professional interests)</li>
                      <li>Payment information (when purchasing premium content or services)</li>
                      <li>Communications you send to us (such as support requests and feedback)</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">Usage Information</h3>
                    <p className="text-muted-foreground">
                      We automatically collect certain information about your use of our Services, including:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>Log data (such as IP address, browser type, pages visited, and time spent)</li>
                      <li>Device information (such as device type, operating system, and unique device identifiers)</li>
                      <li>Location information (such as general geographic location based on IP address)</li>
                      <li>Learning progress and assessment results</li>
                      <li>Interaction data (such as content viewed, features used, and links clicked)</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Lock className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">How We Use Your Information</h2>
                  </div>
                  <p className="text-muted-foreground">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Providing, maintaining, and improving our Services</li>
                    <li>Processing transactions and managing your account</li>
                    <li>Personalizing your learning experience</li>
                    <li>Communicating with you about our Services, updates, and promotional offers</li>
                    <li>Responding to your comments, questions, and requests</li>
                    <li>Monitoring and analyzing trends, usage, and activities</li>
                    <li>Detecting, preventing, and addressing technical issues and security breaches</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Data Security</h2>
                  </div>
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational measures to protect your personal information
                    from unauthorized access, disclosure, alteration, and destruction. However, no method of
                    transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee
                    absolute security.
                  </p>
                  <p className="text-muted-foreground">
                    We regularly review our security practices and update them as necessary to maintain appropriate
                    levels of protection.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Data Retention</h2>
                  </div>
                  <p className="text-muted-foreground">
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in
                    this Privacy Policy, unless a longer retention period is required or permitted by law.
                  </p>
                  <p className="text-muted-foreground">
                    When determining the appropriate retention period, we consider the amount, nature, and sensitivity
                    of the personal information, the potential risk of harm from unauthorized use or disclosure, and the
                    purposes for which we process the information.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Changes to This Privacy Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for other
                    operational, legal, or regulatory reasons. We will notify you of any material changes by posting the
                    updated Privacy Policy on this page and updating the "Last Updated" date.
                  </p>
                  <p className="text-muted-foreground">
                    We encourage you to review this Privacy Policy periodically to stay informed about how we are
                    protecting your information.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy
                    practices, please contact us at:
                  </p>
                  <div className="bg-muted/50 p-4 rounded-md">
                    <p className="font-medium">CyberSafe Education</p>
                    <p className="text-muted-foreground">Email: info.devqueens@gmail.com</p>
                    <p className="text-muted-foreground">Address: Updated Soon</p>
                    <p className="text-muted-foreground">Phone: +91 9363202115</p>
                  </div>
                </div>

                <div className="pt-6 border-t text-sm text-muted-foreground">
                  <p>Last Updated: March 25, 2025</p>
                </div>
              </div>
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

