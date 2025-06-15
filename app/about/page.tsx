"use client"

import Link from "next/link"
import { Shield, ArrowLeft, Users, Trophy, BookOpen, Globe, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
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
                Our Mission
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                About <span className="text-primary">CyberSafe</span> Education
              </h1>
              <p className="text-xl text-muted-foreground">
                We're dedicated to making cybersecurity education accessible, engaging, and effective for everyone.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-muted/50 dark:bg-muted/10">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold">Our Story</h2>
                <p className="text-muted-foreground">
                  CyberSafe Education was founded in 2018 by a team of cybersecurity professionals who recognized a
                  critical gap in how security concepts were being taught to the general public.
                </p>
                <p className="text-muted-foreground">
                  We noticed that while cybersecurity threats were becoming increasingly sophisticated and prevalent,
                  educational resources remained overly technical and inaccessible to non-specialists.
                </p>
                <p className="text-muted-foreground">
                  Our mission became clear: transform complex security concepts into engaging, practical knowledge that
                  anyone can understand and apply to protect themselves in the digital world.
                </p>
              </motion.div>

              <motion.div
                className="relative h-[400px] rounded-lg overflow-hidden bg-muted"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Shield className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Founded in 2022</h3>
                    <p className="text-muted-foreground max-w-xs mx-auto">
                      With a mission to democratize cybersecurity knowledge
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16">
          <div className="container">
            <motion.div
              className="text-center space-y-4 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="px-3 py-1 text-sm mb-2">
                Our Experts
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground">
                A diverse group of cybersecurity experts, educators, and designers working together to create
                exceptional learning experiences.
              </p>
            </motion.div>

{/*             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Sarah Chen",
                  role: "Founder & Chief Security Officer",
                  bio: "Former security researcher with 15+ years of experience in threat intelligence and a passion for education.",
                  icon: <Shield className="h-5 w-5" />,
                },
                {
                  name: "Michael Rodriguez",
                  role: "Head of Educational Content",
                  bio: "Cybersecurity educator with a background in instructional design and curriculum development.",
                  icon: <BookOpen className="h-5 w-5" />,
                },
                {
                  name: "Aisha Patel",
                  role: "Lead Developer",
                  bio: "Full-stack developer specializing in creating interactive learning tools and simulations.",
                  icon: <Code className="h-5 w-5" />,
                },
                {
                  name: "James Wilson",
                  role: "Community Manager",
                  bio: "Focused on building and nurturing our community of learners and security enthusiasts.",
                  icon: <Users className="h-5 w-5" />,
                },
                {
                  name: "Elena Kuznetsova",
                  role: "Threat Intelligence Analyst",
                  bio: "Keeps our content up-to-date with the latest security threats and mitigation strategies.",
                  icon: <Globe className="h-5 w-5" />,
                },
                {
                  name: "David Park",
                  role: "Accessibility Specialist",
                  bio: "Ensures our educational content is accessible to everyone, regardless of ability.",
                  icon: <Trophy className="h-5 w-5" />,
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          {member.icon}
                        </div>
                        <div>
                          <CardTitle>{member.name}</CardTitle>
                          <CardDescription>{member.role}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div> */}
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-muted/50 dark:bg-muted/10">
          <div className="container">
            <motion.div
              className="text-center space-y-4 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="px-3 py-1 text-sm mb-2">
                Our Principles
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide our work and shape our educational approach.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Accessibility",
                  description:
                    "Making cybersecurity knowledge accessible to everyone, regardless of technical background.",
                },
                {
                  title: "Practicality",
                  description: "Focusing on practical, actionable advice that can be immediately applied.",
                },
                {
                  title: "Integrity",
                  description: "Maintaining the highest standards of accuracy and ethical conduct in all our content.",
                },
                {
                  title: "Innovation",
                  description:
                    "Continuously exploring new ways to make learning about cybersecurity engaging and effective.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-background rounded-lg p-6 shadow-sm border transition-all hover:shadow-md hover:border-primary/50 space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-xl p-8 md:p-12 border border-primary/20 text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold">Join Our Mission</h2>
              <p className="text-xl text-muted-foreground">
                Help us create a more secure digital world through education and awareness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/">Explore Our Resources</Link>
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

