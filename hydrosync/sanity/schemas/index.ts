import { serviceCategory } from "./serviceCategory";
import { service } from "./service";
import { subService } from "./subService";
import { page } from "./page";
import { seo } from "./seo";
import { review } from "./review";
import { siteSettings } from "./siteSettings";
import { teamMember } from "./teamMember";
import { serviceArea } from "./serviceArea";
import { coupon } from "./coupon";
import { faq } from "./faq";
import { blogPost } from "./blogPost";

export { serviceCategory } from "./serviceCategory";
export { service } from "./service";
export { subService } from "./subService";
export { page, heroSection, serviceGridSection, whyChooseUsSection, ctaSection, reviewsSection, trustSignalsSection, contentSection, teamSection, faqSection, couponsSection, serviceAreaSection, blogPostsSection } from "./page";
export { seo } from "./seo";
export { review } from "./review";
export { siteSettings } from "./siteSettings";
export { teamMember } from "./teamMember";
export { serviceArea } from "./serviceArea";
export { coupon } from "./coupon";
export { faq } from "./faq";
export { blogPost, codeBlock, callout } from "./blogPost";

export const schemaTypes = [
  serviceCategory,
  service,
  subService,
  page,
  seo,
  review,
  siteSettings,
  teamMember,
  serviceArea,
  coupon,
  faq,
  blogPost,
];