"use client"

import Link from "next/link"
import { Shield, ArrowLeft, BookOpen, FileText, Download, ArrowRight, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GuidesPage() {
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
                Learn & Implement
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Cybersecurity <span className="text-primary">Guides</span> & Tutorials
              </h1>
              <p className="text-xl text-muted-foreground">
                Step-by-step instructions and comprehensive resources to enhance your security knowledge and skills.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Guide */}
        <section className="py-12 bg-muted/50 dark:bg-muted/10">
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
                      <BookOpen className="h-12 w-12 text-primary" />
                    </div>
                    <Badge className="mt-4">Featured Guide</Badge>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h2 className="text-2xl font-bold">Complete Guide to Personal Cybersecurity</h2>
                  <p className="text-muted-foreground">
                    A comprehensive guide covering all aspects of personal digital security, from basic practices to
                    advanced protection strategies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Beginner-Friendly</Badge>
                    <Badge variant="outline">Comprehensive</Badge>
                    <Badge variant="outline">Updated 2023</Badge>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/guides/personal-cybersecurity">Access Guide</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Guide Categories */}
        <section className="py-16">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Browse by Category</h2>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
                <TabsTrigger value="all">All Guides</TabsTrigger>
                <TabsTrigger value="beginners">For Beginners</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
                <TabsTrigger value="prevention">Prevention</TabsTrigger>
                <TabsTrigger value="recovery">Recovery</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Identifying and Removing Malware",
                      description:
                        "Step-by-step instructions for detecting and eliminating various types of malware from your devices.",
                      level: "Intermediate",
                      type: "Tutorial",
                      icon: <FileText className="h-8 w-8 text-primary" />,
                      slug: "malware-removal",
                    },
                    {
                      title: "Secure Password Management",
                      description:
                        "Best practices for creating and managing strong, unique passwords across all your accounts.",
                      level: "Beginner",
                      type: "Guide",
                      icon: <BookOpen className="h-8 w-8 text-primary" />,
                      slug: "password-management",
                    },
                    {
                      title: "Privacy Protection Guide",
                      description:
                        "Comprehensive techniques to safeguard your personal information online and minimize your digital footprint.",
                      level: "Beginner",
                      type: "Guide",
                      icon: <BookOpen className="h-8 w-8 text-primary" />,
                      slug: "privacy-protection",
                    },
                    {
                      title: "Setting Up Two-Factor Authentication",
                      description:
                        "A complete walkthrough for implementing 2FA on all your important accounts and services.",
                      level: "Beginner",
                      type: "Tutorial",
                      icon: <FileText className="h-8 w-8 text-primary" />,
                      slug: "two-factor-authentication",
                    },
                    {
                      title: "Securing Your Home Network",
                      description:
                        "Essential steps to protect your home Wi-Fi network from unauthorized access and attacks.",
                      level: "Intermediate",
                      type: "Guide",
                      icon: <BookOpen className="h-8 w-8 text-primary" />,
                      slug: "secure-home-network",
                    },
                    {
                      title: "Data Recovery After a Security Breach",
                      description:
                        "Recovery procedures to follow after experiencing a security incident or data breach.",
                      level: "Advanced",
                      type: "Guide",
                      icon: <BookOpen className="h-8 w-8 text-primary" />,
                      slug: "data-recovery-breach",
                    },
                    {
                      title: "Secure Browsing Practices",
                      description:
                        "Learn how to browse the web safely and protect yourself from common online threats.",
                      level: "Beginner",
                      type: "Guide",
                      icon: <BookOpen className="h-8 w-8 text-primary" />,
                      slug: "secure-browsing",
                    },
                    {
                      title: "Protecting Children Online",
                      description: "A parent's guide to ensuring children's safety and privacy in the digital world.",
                      level: "Beginner",
                      type: "Guide",
                      icon: <BookOpen className="h-8 w-8 text-primary" />,
                      slug: "protecting-children-online",
                    },
                    {
                      title: "Advanced Encryption Techniques",
                      description:
                        "Understanding and implementing encryption to protect your sensitive data and communications.",
                      level: "Advanced",
                      type: "Tutorial",
                      icon: <FileText className="h-8 w-8 text-primary" />,
                      slug: "advanced-encryption",
                    },
                  ].map((guide, index) => (
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
                              {guide.icon}
                            </div>
                            <Badge
                              variant={
                                guide.level === "Beginner"
                                  ? "default"
                                  : guide.level === "Intermediate"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {guide.level}
                            </Badge>
                          </div>
                          <CardTitle className="mt-4">{guide.title}</CardTitle>
                          <CardDescription>{guide.type}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-muted-foreground">{guide.description}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" size="sm" className="gap-1" asChild>
                            <Link href={`/guides/${guide.slug}`}>
                              <FileText className="h-4 w-4" />
                              Read
                            </Link>
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-1" asChild>
                            <Link href={`/guides/${guide.slug}/download`}>
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

              <TabsContent value="beginners">
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">Beginner-Friendly Guides</h3>
                  <p className="text-muted-foreground mb-6">Perfect starting points for those new to cybersecurity</p>
                  <Button asChild>
                    <Link href="/guides?level=beginner">View All Beginner Guides</Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="advanced">
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">Advanced Security Guides</h3>
                  <p className="text-muted-foreground mb-6">
                    In-depth resources for security professionals and enthusiasts
                  </p>
                  <Button asChild>
                    <Link href="/guides?level=advanced">View All Advanced Guides</Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="prevention">
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">Prevention-Focused Resources</h3>
                  <p className="text-muted-foreground mb-6">
                    Guides to help you prevent security incidents before they happen
                  </p>
                  <Button asChild>
                    <Link href="/guides?category=prevention">View All Prevention Guides</Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="recovery">
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">Recovery & Response Guides</h3>
                  <p className="text-muted-foreground mb-6">What to do when you've experienced a security breach</p>
                  <Button asChild>
                    <Link href="/guides?category=recovery">View All Recovery Guides</Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Download Security Checklist */}
        <section className="py-16 bg-muted/50 dark:bg-muted/10">
          <div className="container">
            <motion.div
              className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-xl p-8 md:p-12 border border-primary/20 text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold">Essential Cybersecurity Checklist</h2>
              <p className="text-muted-foreground">
                Download our comprehensive security checklist to ensure you've covered all the basics of protecting your
                digital life.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <Link href="/resources/security-checklist">
                  Download Free Checklist
                  <ArrowRight className="h-4 w-4" />
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

