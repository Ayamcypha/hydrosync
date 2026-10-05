import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        { type: "image" },
        { type: "codeBlock" },
        { type: "callout" },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "teamMember" }],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
    defineField({
      name: "featured",
      title: "Featured Post",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "author.name",
      media: "mainImage",
      date: "publishedAt",
    },
    prepare({ title, subtitle, media, date }) {
      return {
        title,
        subtitle: `${subtitle ? `by ${subtitle} • ` : ""}${date ? new Date(date).toLocaleDateString() : ""}`,
        media,
      };
    },
  },
});

export const codeBlock = defineType({
  name: "codeBlock",
  title: "Code Block",
  type: "object",
  fields: [
    { name: "language", type: "string", title: "Language", initialValue: "javascript" },
    { name: "code", type: "text", title: "Code", rows: 10 },
    { name: "filename", type: "string", title: "Filename (optional)" },
  ],
});

export const callout = defineType({
  name: "callout",
  title: "Callout",
  type: "object",
  fields: [
    { name: "type", type: "string", title: "Type", options: { list: ["info", "warning", "tip", "note"] } },
    { name: "title", type: "string", title: "Title" },
    { name: "content", type: "array", title: "Content", of: [{ type: "block" }] },
  ],
});