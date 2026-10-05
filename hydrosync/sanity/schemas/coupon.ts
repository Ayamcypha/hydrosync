import { defineField, defineType } from "sanity";

export const coupon = defineType({
  name: "coupon",
  title: "Coupon/Promotion",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "code",
      title: "Coupon Code",
      type: "string",
      description: "Optional - leave blank for automatic discount",
    }),
    defineField({
      name: "discountType",
      title: "Discount Type",
      type: "string",
      options: {
        list: [
          { title: "Percentage Off", value: "percentage" },
          { title: "Fixed Amount Off", value: "fixed" },
          { title: "Free Service/Add-on", value: "free_service" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "discountValue",
      title: "Discount Value",
      type: "number",
      validation: (rule) => rule.required().positive(),
      description: "For percentage: enter 10 for 10%. For fixed: enter dollar amount.",
    }),
    defineField({
      name: "validFrom",
      title: "Valid From",
      type: "datetime",
    }),
    defineField({
      name: "validUntil",
      title: "Valid Until",
      type: "datetime",
    }),
    defineField({
      name: "terms",
      title: "Terms & Conditions",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "applicableServices",
      title: "Applicable Services",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }, { type: "subService" }] }],
      description: "Leave empty for all services",
    }),
    defineField({
      name: "active",
      title: "Active",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "discountType",
      discountValue: "discountValue",
    },
    prepare({ title, subtitle, discountValue }) {
      const value = subtitle === "percentage" ? `${discountValue}%` : `$${discountValue}`;
      return { title, subtitle: `${value} off` };
    },
  },
});