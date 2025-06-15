"use client"

import Link from "next/link"
import { Shield, ArrowLeft, FileText, AlertTriangle, Scale, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function TermsPage() {
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
                Legal Agreement
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Terms of <span className="text-primary">Service</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Please read these terms carefully before using our services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Terms of Service Content */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-background rounded-lg p-8 shadow-sm border">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Introduction</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Welcome to CyberSafe Education. These Terms of Service ("Terms") govern your access to and use of
                    our website, educational resources, and services (collectively, the "Services").
                  </p>
                  <p className="text-muted-foreground">
                    By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to
                    these Terms, you may not access or use the Services.
                  </p>
                  <p className="text-muted-foreground">
                    We may modify these Terms at any time. If we make changes, we will provide notice by posting the
                    updated Terms on this page and updating the "Last Updated" date. Your continued use of the Services
                    after any such changes constitutes your acceptance of the new Terms.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Account Registration</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Some features of our Services require you to register for an account. When you register, you agree
                    to provide accurate, current, and complete information about yourself and to update this information
                    to keep it accurate, current, and complete.
                  </p>
                  <p className="text-muted-foreground">
                    You are responsible for safeguarding your account credentials and for all activities that occur
                    under your account. You agree to notify us immediately of any unauthorized use of your account or
                    any other breach of security.
                  </p>
                  <p className="text-muted-foreground">
                    We reserve the right to disable any user account at any time if, in our opinion, you have failed to
                    comply with these Terms or if we believe your account is being used fraudulently.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Scale className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Intellectual Property Rights</h2>
                  </div>
                  <p className="text-muted-foreground">
                    The Services and their entire contents, features, and functionality (including but not limited to
                    all information, software, text, displays, images, video, and audio, and the design, selection, and
                    arrangement thereof) are owned by CyberSafe Education, its licensors, or other providers of such
                    material and are protected by copyright, trademark, patent, trade secret, and other intellectual
                    property or proprietary rights laws.
                  </p>
                  <p className="text-muted-foreground">
                    These Terms permit you to use the Services for your personal, non-commercial use only. You must not
                    reproduce, distribute, modify, create derivative works of, publicly display, publicly perform,
                    republish, download, store, or transmit any of the material on our Services, except as follows:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>
                      Your computer may temporarily store copies of such materials in RAM incidental to your accessing
                      and viewing those materials.
                    </li>
                    <li>
                      You may store files that are automatically cached by your Web browser for display enhancement
                      purposes.
                    </li>
                    <li>
                      You may print or download one copy of a reasonable number of pages of the Services for your own
                      personal, non-commercial use and not for further reproduction, publication, or distribution.
                    </li>
                    <li>
                      If we provide social media features with certain content, you may take such actions as are enabled
                      by such features.
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <AlertTriangle className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Prohibited Uses</h2>
                  </div>
                  <p className="text-muted-foreground">
                    You may use the Services only for lawful purposes and in accordance with these Terms. You agree not
                    to use the Services:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>
                      In any way that violates any applicable federal, state, local, or international law or regulation.
                    </li>
                    <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
                    <li>
                      To transmit, or procure the sending of, any advertising or promotional material, including any
                      "junk mail," "chain letter," "spam," or any other similar solicitation.
                    </li>
                    <li>
                      To impersonate or attempt to impersonate CyberSafe Education, a CyberSafe Education employee,
                      another user, or any other person or entity.
                    </li>
                    <li>
                      To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the
                      Services, or which may harm CyberSafe Education or users of the Services or expose them to
                      liability.
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Termination</h2>
                  </div>
                  <p className="text-muted-foreground">
                    We may terminate or suspend your account and access to the Services immediately, without prior
                    notice or liability, for any reason whatsoever, including without limitation if you breach these
                    Terms.
                  </p>
                  <p className="text-muted-foreground">
                    Upon termination, your right to use the Services will immediately cease. If you wish to terminate
                    your account, you may simply discontinue using the Services or contact us to request account
                    deletion.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Disclaimer of Warranties</h2>
                  <p className="text-muted-foreground">
                    THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY
                    KIND, EITHER EXPRESS OR IMPLIED. CYBERSAFE EDUCATION DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED,
                    INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                    PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                  <p className="text-muted-foreground">
                    CYBERSAFE EDUCATION DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT
                    DEFECTS WILL BE CORRECTED, OR THAT THE SERVICES OR THE SERVER THAT MAKES THEM AVAILABLE ARE FREE OF
                    VIRUSES OR OTHER HARMFUL COMPONENTS.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    IN NO EVENT WILL CYBERSAFE EDUCATION, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS,
                    EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY,
                    ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES, INCLUDING ANY
                    DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Governing Law</h2>
                  <p className="text-muted-foreground">
                    These Terms and any dispute or claim arising out of or in connection with them or their subject
                    matter or formation shall be governed by and construed in accordance with the laws of the state of
                    [State], without giving effect to any choice or conflict of law provision or rule.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms, please contact us at:
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

