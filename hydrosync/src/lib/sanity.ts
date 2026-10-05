import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "demo-project",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(sanityConfig);

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export function getImageUrl(source: SanityImageSource, width?: number, height?: number) {
  let url = builder.image(source);
  if (width) url = url.width(width);
  if (height) url = url.height(height);
  return url.auto("format").fit("max").url();
}

export async function getSettings() {
  return sanityClient.fetch(`*[_type == "siteSettings"][0]`);
}

export async function getNavigation() {
  return sanityClient.fetch(`
    *[_type == "serviceCategory"] | order(order asc) {
      _id,
      title,
      slug,
      description,
      icon,
      order,
      "services": *[_type == "service" && category._ref == ^._id] | order(order asc) {
        _id,
        title,
        slug,
        shortDescription,
        icon,
        "image": image.asset->url,
        features,
        order,
        "subServices": *[_type == "subService" && service._ref == ^._id] | order(order asc) {
          _id,
          title,
          slug,
          shortDescription,
          icon,
          features,
          order
        }
      }
    }
  `);
}

export async function getHomePage() {
  return sanityClient.fetch(`
    *[_type == "page" && slug.current == "home"][0] {
      title,
      sections,
      seo
    }
  `);
}

export async function getPageBySlug(slug: string) {
  return sanityClient.fetch(
    `
    *[_type == "page" && slug.current == $slug][0] {
      title,
      sections,
      seo
    }
  `,
    { slug }
  );
}

export async function getServiceBySlug(categorySlug: string, serviceSlug: string) {
  return sanityClient.fetch(
    `
    *[_type == "service" && slug.current == $serviceSlug && category->slug.current == $categorySlug][0] {
      _id,
      title,
      slug,
      shortDescription,
      description,
      icon,
      "image": image.asset->url,
      features,
      "category": category->{title, slug},
      "subServices": *[_type == "subService" && service._ref == ^._id] | order(order asc) {
        _id,
        title,
        slug,
        shortDescription,
        description,
        icon,
        features,
        order
      }
    }
  `,
    { categorySlug, serviceSlug }
  );
}

export async function getSubServiceBySlug(categorySlug: string, serviceSlug: string, subServiceSlug: string) {
  return sanityClient.fetch(
    `
    *[_type == "subService" && slug.current == $subServiceSlug && service->slug.current == $serviceSlug && service->category->slug.current == $categorySlug][0] {
      _id,
      title,
      slug,
      shortDescription,
      description,
      icon,
      features,
      "service": service->{title, slug, "category": category->{title, slug}}
    }
  `,
    { categorySlug, serviceSlug, subServiceSlug }
  );
}

export async function getAllServiceSlugs() {
  return sanityClient.fetch(`
    *[_type == "service"] {
      "categorySlug": category->slug.current,
      "serviceSlug": slug.current,
      "subServices": *[_type == "subService" && service._ref == ^._id] {
        "subServiceSlug": slug.current
      }
    }
  `);
}

export async function getReviews(limit = 10) {
  return sanityClient.fetch(
    `
    *[_type == "review"] | order(date desc) [$limit] {
      _id,
      authorName,
      authorAvatar,
      rating,
      content,
      date,
      source,
      verified
    }
  `,
    { limit }
  );
}

export async function getBlogPosts(limit = 10, offset = 0) {
  return sanityClient.fetch(
    `
    *[_type == "blogPost"] | order(publishedAt desc) [$offset...$limit] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      author,
      categories,
      publishedAt,
      seo
    }
  `,
    { limit, offset }
  );
}

export async function getBlogPostBySlug(slug: string) {
  return sanityClient.fetch(
    `
    *[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      content,
      mainImage,
      author,
      categories,
      publishedAt,
      seo
    }
  `,
    { slug }
  );
}

export async function getServiceAreas() {
  return sanityClient.fetch(`
    *[_type == "serviceArea"] | order(city asc) {
      _id,
      city,
      state,
      zipCodes,
      latitude,
      longitude
    }
  `);
}

export async function getCoupons() {
  return sanityClient.fetch(`
    *[_type == "coupon" && active == true] | order(validUntil asc) {
      _id,
      title,
      description,
      code,
      discountType,
      discountValue,
      validUntil,
      terms
    }
  `);
}

export async function getFAQs(category?: string) {
  const filter = category ? `&& category == $category` : "";
  return sanityClient.fetch(
    `
    *[_type == "faq" ${filter}] | order(order asc) {
      _id,
      question,
      answer,
      category,
      order
    }
  `,
    { category }
  );
}

export async function getTeamMembers() {
  return sanityClient.fetch(`
    *[_type == "teamMember"] | order(order asc) {
      _id,
      name,
      role,
      bio,
      image,
      certifications,
      order
    }
  `);
}