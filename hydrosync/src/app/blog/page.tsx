"use client";

import { Hero, CTASection } from "@/components/sections";
import { Calendar, Clock, Tag, ArrowRight, ChevronRight, User, MessageSquare } from "lucide-react";

const blogPosts = [
  {
    slug: "hvac-maintenance-checklist",
    title: "The Ultimate HVAC Maintenance Checklist for Homeowners",
    excerpt: "Keep your heating and cooling system running efficiently all year with this comprehensive maintenance guide.",
    category: "HVAC Tips",
    author: "Mike Rodriguez",
    date: "2026-07-15",
    readTime: "8 min read",
    image: "/blog/hvac-maintenance.jpg",
  },
  {
    slug: "signs-you-need-new-water-heater",
    title: "7 Signs It's Time to Replace Your Water Heater",
    excerpt: "Don't wait for a cold shower or flood. Learn the warning signs that your water heater is nearing the end of its life.",
    category: "Plumbing",
    author: "Sarah Chen",
    date: "2026-07-10",
    readTime: "6 min read",
    image: "/blog/water-heater-signs.jpg",
  },
  {
    slug: "how-to-prevent-frozen-pipes",
    title: "How to Prevent Frozen Pipes This Winter",
    excerpt: "Central Ohio winters can be brutal on plumbing. Follow these steps to protect your pipes and avoid costly repairs.",
    category: "Seasonal",
    author: "James Mitchell",
    date: "2026-07-05",
    readTime: "5 min read",
    image: "/blog/frozen-pipes.jpg",
  },
  {
    slug: "heat-pump-vs-furnace",
    title: "Heat Pump vs. Furnace: Which Is Right for Your Home?",
    excerpt: "Compare the pros and cons of heat pumps and furnaces for Central Ohio's climate. Make an informed decision for your next replacement.",
    category: "HVAC",
    author: "Mike Rodriguez",
    date: "2026-06-28",
    readTime: "10 min read",
    image: "/blog/heat-pump-furnace.jpg",
  },
  {
    slug: "drain-cleaning-methods",
    title: "Professional Drain Cleaning Methods Explained",
    excerpt: "From snaking to hydrojetting - understand the different methods plumbers use to clear clogs and which is right for your situation.",
    category: "Plumbing",
    author: "Sarah Chen",
    date: "2026-06-20",
    readTime: "7 min read",
    image: "/blog/drain-cleaning.jpg",
  },
  {
    slug: "indoor-air-quality-guide",
    title: "Complete Guide to Indoor Air Quality Improvement",
    excerpt: "Your home's air could be 2-5x more polluted than outdoor air. Learn how to test, improve, and maintain healthy indoor air.",
    category: "Air Quality",
    author: "James Mitchell",
    date: "2026-06-15",
    readTime: "12 min read",
    image: "/blog/indoor-air-quality.jpg",
  },
];

export default function BlogPage() {
  return (
    <>
      <Hero
        headline="HydroSync Blog"
        subheadline="Expert tips, guides, and insights on plumbing, HVAC, and home maintenance from Central Ohio's trusted professionals."
        primaryCta={{ text: "Subscribe to Newsletter", link: "#newsletter" }}
        secondaryCta={{ text: "Schedule Service", link: "/schedule" }}
        trustBadges={[
          { icon: <Calendar className="w-6 h-6" />, label: "Weekly Posts", value: "Fresh Content" },
          { icon: <User className="w-6 h-6" />, label: "Expert Authors", value: "Licensed Techs" },
          { icon: <Tag className="w-6 h-6" />, label: "Categories", value: "5+" },
          { icon: <Clock className="w-6 h-6" />, label: "Read Time", value: "5-12 min" },
        ]}
      />

      <section className="py-20 md:py-24" aria-labelledby="posts-heading">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1 space-y-8">
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 sticky top-24">
                <h3 className="font-bold text-neutral-900 mb-4">Categories</h3>
                <nav aria-label="Blog categories">
                  <ul className="space-y-2" role="list">
                    {["All Posts", "HVAC Tips", "Plumbing", "Air Quality", "Seasonal", "Commercial", "DIY vs Pro"].map((cat) => (
                      <li key={cat}>
                        <a href={`/blog?category=${cat.toLowerCase().replace(/\s+/g, "-")}`} className="block px-3 py-2 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                          {cat}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="bg-white rounded-2xl border border-neutral-200 p-6 sticky top-24" style={{ top: "200px" }}>
                <h3 className="font-bold text-neutral-900 mb-4">Recent Posts</h3>
                <ul className="space-y-3" role="list">
                  {blogPosts.slice(0, 5).map((post) => (
                    <li key={post.slug}>
                      <a href={`/blog/${post.slug}`} className="block hover:text-primary-600 transition-colors">
                        <p className="font-medium text-neutral-900 line-clamp-2">{post.title}</p>
                        <p className="text-sm text-neutral-500">{post.date}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <main className="lg:col-span-3 space-y-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-primary-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-video bg-neutral-100 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                      <span className="text-sm">Blog Image</span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-3">
                      <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">{post.author}</span>
                    </div>
                    <h2 className="text-xl font-bold text-neutral-900 mb-2 line-clamp-2">
                      <a href={`/blog/${post.slug}`} className="hover:text-primary-600 transition-colors">{post.title}</a>
                    </h2>
                    <p className="text-neutral-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <a href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm">
                      Read More
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </main>
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-neutral-300 text-neutral-700 font-medium hover:bg-neutral-50 transition-colors">
              Load More Posts
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <section id="newsletter" className="py-20 md:py-24 bg-primary-600 text-white" aria-labelledby="newsletter-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="newsletter-heading" className="text-3xl md:text-4xl font-bold mb-4">Stay Informed</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">Get home maintenance tips, seasonal reminders, and special offers delivered to your inbox monthly.</p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-primary-200 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button type="submit" className="px-6 py-3 rounded-xl bg-white text-primary-600 font-semibold hover:bg-primary-50 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-sm text-primary-200 mt-4">No spam, unsubscribe anytime. <a href="/privacy" className="underline">Privacy Policy</a></p>
        </div>
      </section>

      <CTASection
        title="Need Professional Help?"
        subtitle="Reading about it is great, but sometimes you need a pro. Schedule service with HydroSync today."
        buttons={[
          { text: "Schedule Service", link: "/schedule", variant: "primary" },
          { text: "Call (614) 232-2222", link: "tel:6142322222", variant: "outline" },
        ]}
      />
    </>
  );
}

import { motion } from "framer-motion";