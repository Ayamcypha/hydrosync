import { defineField, defineType } from "sanity";

export const serviceArea = defineType({
  name: "serviceArea",
  title: "Service Area",
  type: "document",
  fields: [
    defineField({
      name: "city",
      title: "City",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "state",
      title: "State",
      type: "string",
      validation: (rule) => rule.required().length(2),
    }),
    defineField({
      name: "zipCodes",
      title: "ZIP Codes",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "latitude",
      title: "Latitude",
      type: "number",
    }),
    defineField({
      name: "longitude",
      title: "Longitude",
      type: "number",
    }),
    defineField({
      name: "active",
      title: "Active",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "city",
      subtitle: "state",
    },
  },
});