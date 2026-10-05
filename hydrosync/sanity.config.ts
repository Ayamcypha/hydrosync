import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "hydrosync",
  title: "HydroSync",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "demo-project",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Site Settings")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            S.divider(),
            S.listItem()
              .title("Pages")
              .child(
                S.documentTypeList("page")
                  .title("Pages")
                  .filter('_type == "page"')
              ),
            S.divider(),
            S.listItem()
              .title("Service Categories")
              .child(S.documentTypeList("serviceCategory").title("Service Categories")),
            S.listItem()
              .title("Services")
              .child(S.documentTypeList("service").title("Services")),
            S.listItem()
              .title("Sub Services")
              .child(S.documentTypeList("subService").title("Sub Services")),
            S.divider(),
            S.listItem()
              .title("Blog Posts")
              .child(S.documentTypeList("blogPost").title("Blog Posts")),
            S.divider(),
            S.listItem()
              .title("Team Members")
              .child(S.documentTypeList("teamMember").title("Team Members")),
            S.listItem()
              .title("Reviews")
              .child(S.documentTypeList("review").title("Reviews")),
            S.listItem()
              .title("FAQs")
              .child(S.documentTypeList("faq").title("FAQs")),
            S.listItem()
              .title("Coupons")
              .child(S.documentTypeList("coupon").title("Coupons")),
            S.listItem()
              .title("Service Areas")
              .child(S.documentTypeList("serviceArea").title("Service Areas")),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});