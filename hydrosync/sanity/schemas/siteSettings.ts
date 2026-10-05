import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        { name: "street", type: "string", title: "Street" },
        { name: "city", type: "string", title: "City" },
        { name: "state", type: "string", title: "State" },
        { name: "zip", type: "string", title: "ZIP Code" },
      ],
    }),
    defineField({
      name: "hours",
      title: "Business Hours",
      type: "object",
      fields: [
        { name: "weekday", type: "string", title: "Weekday Hours" },
        { name: "saturday", type: "string", title: "Saturday Hours" },
        { name: "sunday", type: "string", title: "Sunday Hours" },
      ],
    }),
    defineField({
      name: "social",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "facebook", type: "url", title: "Facebook" },
        { name: "instagram", type: "url", title: "Instagram" },
        { name: "twitter", type: "url", title: "Twitter/X" },
        { name: "linkedin", type: "url", title: "LinkedIn" },
        { name: "youtube", type: "url", title: "YouTube" },
      ],
    }),
    defineField({
      name: "emergencyPhone",
      title: "Emergency Phone",
      type: "string",
    }),
    defineField({
      name: "licenseNumber",
      title: "License Number",
      type: "string",
    }),
    defineField({
      name: "googleReviewsUrl",
      title: "Google Reviews URL",
      type: "url",
    }),
    defineField({
      name: "googlePlacesId",
      title: "Google Places ID",
      type: "string",
    }),
    defineField({
      name: "defaultSeo",
      title: "Default SEO",
      type: "seo",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});