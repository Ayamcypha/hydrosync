import { defineField, defineType } from "sanity";

export const review = defineType({
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    defineField({
      name: "authorName",
      title: "Author Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "authorAvatar",
      title: "Author Avatar",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (rule) => rule.required().min(1).max(5).integer(),
    }),
    defineField({
      name: "content",
      title: "Review Content",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      title: "Review Date",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      options: {
        list: ["google", "yelp", "angie", "facebook", "internal"],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "verified",
      title: "Verified Purchase/Service",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "serviceType",
      title: "Service Type",
      type: "string",
      description: "e.g., HVAC Repair, Plumbing Installation",
    }),
    defineField({
      name: "technicianName",
      title: "Technician Name",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "authorName",
      subtitle: "content",
      rating: "rating",
      media: "authorAvatar",
    },
    prepare({ title, subtitle, rating, media }) {
      return {
        title,
        subtitle: `★${rating} - ${subtitle?.substring(0, 50)}...`,
        media,
      };
    },
  },
});