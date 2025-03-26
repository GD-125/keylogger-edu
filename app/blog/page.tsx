"use client"

import Link from "next/link"
import { Shield, ArrowLeft, Calendar, User, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function BlogPage() {
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
                Latest Insights
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Security <span className="text-primary">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Stay informed with the latest cybersecurity news, trends, and educational content.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Categories */}
        <section className="py-8 border-b">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="w-full md:w-1/2 lg:w-1/3 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search articles..." className="pl-10" />
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                  All Topics
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary/80">
                  Keyloggers
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary/80">
                  Malware
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary/80">
                  Privacy
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary/80">
                  Best Practices
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12">
          <div className="container">
            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-muted rounded-lg aspect-video relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-muted-foreground/50">Featured Image</div>
                </div>
              </div>
              <div className="space-y-4">
                <Badge>Featured</Badge>
                <h2 className="text-3xl font-bold">The Rising Threat of Advanced Keyloggers in 2023</h2>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>March 15, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>Dr. Sarah Chen</span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  As technology evolves, so do the threats we face. Modern keyloggers have become increasingly
                  sophisticated, employing advanced techniques to evade detection and harvest sensitive information.
                  This article explores the latest developments in keylogging technology and provides updated strategies
                  for protection.
                </p>
                <Button asChild>
                  <Link href="/blog/rising-threat-advanced-keyloggers">Read Full Article</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-16 bg-muted/50 dark:bg-muted/10">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Recent Articles</h2>
              <Button variant="outline" size="sm" asChild>
                <Link href="/blog/archive">View All</Link>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "How to Detect Hardware Keyloggers on Your Devices",
                  excerpt:
                    "Learn the telltale signs of hardware keyloggers and how to perform a thorough inspection of your devices.",
                  date: "March 10, 2023",
                  author: "Michael Rodriguez",
                  category: "Hardware Security",
                  slug: "detect-hardware-keyloggers",
                },
                {
                  title: "The Legal Implications of Keylogger Use in the Workplace",
                  excerpt:
                    "Exploring the complex legal landscape surrounding employer monitoring and employee privacy rights.",
                  date: "March 5, 2023",
                  author: "Elena Kuznetsova",
                  category: "Legal",
                  slug: "legal-implications-keyloggers-workplace",
                },
                {
                  title: "Virtual Keyboards: An Effective Defense Against Keyloggers?",
                  excerpt:
                    "Analyzing the effectiveness of virtual keyboards as a countermeasure against various types of keyloggers.",
                  date: "February 28, 2023",
                  author: "Aisha Patel",
                  category: "Prevention",
                  slug: "virtual-keyboards-defense-keyloggers",
                },
                {
                  title: "The Psychology of Social Engineering in Keylogger Distribution",
                  excerpt: "Understanding the psychological tactics used to trick users into installing keyloggers.",
                  date: "February 20, 2023",
                  author: "James Wilson",
                  category: "Social Engineering",
                  slug: "psychology-social-engineering-keyloggers",
                },
                {
                  title: "Open Source Security Tools to Detect and Remove Keyloggers",
                  excerpt:
                    "A comprehensive guide to free and open source tools that can help identify and eliminate keyloggers.",
                  date: "February 15, 2023",
                  author: "David Park",
                  category: "Tools",
                  slug: "open-source-tools-keyloggers",
                },
                {
                  title: "Mobile Keyloggers: The Hidden Threat in Your Pocket",
                  excerpt: "How keyloggers affect mobile devices and what you can do to protect your smartphone.",
                  date: "February 8, 2023",
                  author: "Dr. Sarah Chen",
                  category: "Mobile Security",
                  slug: "mobile-keyloggers-hidden-threat",
                },
              ].map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col transition-all hover:shadow-md hover:border-primary/50">
                    <CardHeader className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                      </div>
                      <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                      <CardDescription className="text-sm flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-3">{article.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" size="sm" className="w-full gap-1 group" asChild>
                        <Link href={`/blog/${article.slug}`}>
                          Read More
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

        {/* Newsletter */}
        <section className="py-16">
          <div className="container">
            <motion.div
              className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-xl p-8 md:p-12 border border-primary/20 text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold">Stay Updated on Cybersecurity</h2>
              <p className="text-muted-foreground">
                Subscribe to our newsletter to receive the latest articles, tips, and security alerts directly in your
                inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input placeholder="Your email address" type="email" />
                <Button>Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
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

