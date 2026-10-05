import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sections",
      title: "Page Sections",
      type: "array",
      of: [
        { type: "heroSection" },
        { type: "serviceGridSection" },
        { type: "whyChooseUsSection" },
        { type: "ctaSection" },
        { type: "reviewsSection" },
        { type: "trustSignalsSection" },
        { type: "contentSection" },
        { type: "teamSection" },
        { type: "faqSection" },
        { type: "couponsSection" },
        { type: "serviceAreaSection" },
        { type: "blogPostsSection" },
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
  },
});

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subheadline",
      title: "Subheadline",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "primaryCta",
      title: "Primary CTA",
      type: "object",
      fields: [
        { name: "text", type: "string", title: "Button Text" },
        { name: "link", type: "string", title: "Link" },
      ],
    }),
    defineField({
      name: "secondaryCta",
      title: "Secondary CTA",
      type: "object",
      fields: [
        { name: "text", type: "string", title: "Button Text" },
        { name: "link", type: "string", title: "Link" },
      ],
    }),
    defineField({
      name: "trustBadges",
      title: "Trust Badges",
      type: "array",
      of: [{ type: "trustBadge" }],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Hero Section" };
    },
  },
});

export const trustBadge = defineType({
  name: "trustBadge",
  title: "Trust Badge",
  type: "object",
  fields: [
    { name: "icon", type: "string", title: "Icon Name" },
    { name: "label", type: "string", title: "Label" },
    { name: "value", type: "string", title: "Value" },
  ],
});

export const serviceGridSection = defineType({
  name: "serviceGridSection",
  title: "Service Grid Section",
  type: "object",
  fields: [
    { name: "headline", type: "string", title: "Headline" },
    { name: "subheadline", type: "text", title: "Subheadline", rows: 3 },
    {
      name: "categories",
      title: "Categories to Display",
      type: "array",
      of: [{ type: "reference", to: [{ type: "serviceCategory" }] }],
    },
    { name: "viewAllLink", type: "string", title: "View All Link" },
    { name: "viewAllText", type: "string", title: "View All Text", initialValue: "View All Services" },
  ],
  preview: {
    prepare() {
      return { title: "Service Grid Section" };
    },
  },
});

export const whyChooseUsSection = defineType({
  name: "whyChooseUsSection",
  title: "Why Choose Us Section",
  type: "object",
  fields: [
    { name: "headline", type: "string", title: "Headline" },
    { name: "subheadline", type: "text", title: "Subheadline", rows: 3 },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "featureItem" }],
    },
  ],
  preview: {
    prepare() {
      return { title: "Why Choose Us Section" };
    },
  },
});

export const featureItem = defineType({
  name: "featureItem",
  title: "Feature Item",
  type: "object",
  fields: [
    { name: "icon", type: "string", title: "Icon Name" },
    { name: "title", type: "string", title: "Title" },
    { name: "description", type: "text", title: "Description", rows: 2 },
  ],
});

export const ctaSection = defineType({
  name: "ctaSection",
  title: "CTA Section",
  type: "object",
  fields: [
    { name: "headline", type: "string", title: "Headline" },
    { name: "subheadline", type: "text", title: "Subheadline", rows: 3 },
    { name: "backgroundImage", type: "image", title: "Background Image", options: { hotspot: true } },
    {
      name: "ctaButtons",
      title: "CTA Buttons",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "text", type: "string", title: "Button Text" },
            { name: "link", type: "string", title: "Link" },
            { name: "variant", type: "string", title: "Variant", options: { list: ["primary", "secondary", "outline"] } },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return { title: "CTA Section" };
    },
  },
});

export const reviewsSection = defineType({
  name: "reviewsSection",
  title: "Reviews Section",
  type: "object",
  fields: [
    { name: "headline", type: "string", title: "Headline" },
    { name: "subheadline", type: "text", title: "Subheadline", rows: 3 },
    { name: "rating", type: "number", title: "Overall Rating", validation: (rule) => rule.min(0).max(5) },
    { name: "reviewCount", type: "number", title: "Review Count" },
    { name: "source", type: "string", title: "Review Source", options: { list: ["google", "yelp", "angie", "mixed"] } },
    { name: "reviewsToShow", type: "number", title: "Number of Reviews to Show", initialValue: 6 },
    { name: "viewAllLink", type: "string", title: "View All Reviews Link" },
  ],
  preview: {
    prepare() {
      return { title: "Reviews Section" };
    },
  },
});

export const trustSignalsSection = defineType({
  name: "trustSignalsSection",
  title: "Trust Signals Section",
  type: "object",
  fields: [
    { name: "headline", type: "string", title: "Headline" },
    {
      name: "signals",
      title: "Trust Signals",
      type: "array",
      of: [{ type: "trustSignalItem" }],
    },
  ],
  preview: {
    prepare() {
      return { title: "Trust Signals Section" };
    },
  },
});

export const trustSignalItem = defineType({
  name: "trustSignalItem",
  title: "Trust Signal Item",
  type: "object",
  fields: [
    { name: "icon", type: "string", title: "Icon Name" },
    { name: "title", type: "string", title: "Title" },
    { name: "description", type: "text", title: "Description", rows: 2 },
  ],
});

export const contentSection = defineType({
  name: "contentSection",
  title: "Content Section",
  type: "object",
  fields: [
    { name: "headline", type: "string", title: "Headline" },
    { name: "content", type: "array", title: "Content", of: [{ type: "block" }, { type: "image" }] },
    { name: "layout", type: "string", title: "Layout", options: { list: ["single", "two-column", "image-left", "image-right"] } },
    { name: "image", type: "image", title: "Section Image", options: { hotspot: true } },
  ],
  preview: {
    prepare() {
      return { title: "Content Section" };
    },
  },
});

export const teamSection = defineType({
  name: "teamSection",
  title: "Team Section",
  type: "object",
  fields: [
    { name: "headline", type: "string", title: "Headline" },
    { name: "subheadline", type: "text", title: "Subheadline", rows: 3 },
    { name: "memberLimit", type: "number", title: "Member Limit", initialValue: 6 },
  ],
  preview: {
    prepare() {
      return { title: "Team Section" };
    },
  },
});

export const faqSection = defineType({
  name: "faqSection",
  title: "FAQ Section",
  type: "object",
  fields: [
    { name: "headline", type: "string", title: "Headline" },
    { name: "category", type: "string", title: "FAQ Category (optional)" },
    { name: "limit", type: "number", title: "Limit", initialValue: 10 },
  ],
  preview: {
    prepare() {
      return { title: "FAQ Section" };
    },
  },
});

export const couponsSection = defineType({
  name: "couponsSection",
  title: "Coupons Section",
  type: "object",
  fields: [
    { name: "headline", type: "string", title: "Headline" },
    { name: "subheadline", type: "text", title: "Subheadline", rows: 3 },
  ],
  preview: {
    prepare() {
      return { title: "Coupons Section" };
    },
  },
});

export const serviceAreaSection = defineType({
  name: "serviceAreaSection",
  title: "Service Area Section",
  type: "object",
  fields: [
    { name: "headline", type: "string", title: "Headline" },
    { name: "subheadline", type: "text", title: "Subheadline", rows: 3 },
    { name: "showMap", type: "boolean", title: "Show Map", initialValue: true },
    { name: "zipCodeLookup", type: "boolean", title: "Enable Zip Code Lookup", initialValue: true },
  ],
  preview: {
    prepare() {
      return { title: "Service Area Section" };
    },
  },
});

export const blogPostsSection = defineType({
  name: "blogPostsSection",
  title: "Blog Posts Section",
  type: "object",
  fields: [
    { name: "headline", type: "string", title: "Headline" },
    { name: "subheadline", type: "text", title: "Subheadline", rows: 3 },
    { name: "limit", type: "number", title: "Post Limit", initialValue: 3 },
    { name: "categoryFilter", type: "string", title: "Category Filter (optional)" },
    { name: "viewAllLink", type: "string", title: "View All Link" },
  ],
  preview: {
    prepare() {
      return { title: "Blog Posts Section" };
    },
  },
});