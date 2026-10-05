"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Layout";
import { Star, Quote, ChevronRight } from "lucide-react";
import { Avatar } from "@/components/ui";
import { cn } from "@/lib/utils";

interface Review {
  id: string;
  authorName: string;
  authorAvatar?: string;
  rating: number;
  content: string;
  date: string;
  source: "google" | "yelp" | "angie" | "internal";
  verified: boolean;
  serviceType?: string;
  technicianName?: string;
}

const mockReviews: Review[] = [
  {
    id: "1",
    authorName: "Victor Cook",
    authorAvatar: undefined,
    rating: 5,
    content: "The service man found the problem right away and gave me a breakdown of what the repair was and the cost breakdown.",
    date: "July 20, 2026",
    source: "google",
    verified: true,
    serviceType: "HVAC Repair",
    technicianName: "Steve",
  },
  {
    id: "2",
    authorName: "Raymond Waters",
    authorAvatar: undefined,
    rating: 5,
    content: "I was very pleased with the how quickly a technician arrived. Steve was very friendly, diagnosed the problem, and explained the issue. He was able to put on a new part and was good at explaining in laymen terms what went wrong.",
    date: "July 19, 2026",
    source: "google",
    verified: true,
    serviceType: "Plumbing Repair",
    technicianName: "Steve",
  },
  {
    id: "3",
    authorName: "Paula Klusman",
    authorAvatar: undefined,
    rating: 5,
    content: "Called the Waterworks to fix toilet. Very responsive and technician was excellent in terms of his knowledge and customer service.",
    date: "July 18, 2026",
    source: "google",
    verified: true,
    serviceType: "Toilet Repair",
  },
  {
    id: "4",
    authorName: "Debra Leno",
    authorAvatar: undefined,
    rating: 5,
    content: "Friendly and fast service. The technician was prompt, wore shoe protection, and performed the checkup quickly.",
    date: "July 17, 2026",
    source: "google",
    verified: true,
    serviceType: "HVAC Maintenance",
  },
  {
    id: "5",
    authorName: "Bob Herrmann",
    authorAvatar: undefined,
    rating: 5,
    content: "Technician was prompt, wore shoe protection, and performed the checkup quickly. Not much of a conversationalist however.",
    date: "July 17, 2026",
    source: "google",
    verified: true,
    serviceType: "Plumbing Maintenance",
  },
  {
    id: "6",
    authorName: "Dan Watson",
    authorAvatar: undefined,
    rating: 5,
    content: "Waterworks has been a great company to work with, and we are grateful that Michael was so knowledgeable and thorough. Thank you for becoming our go-to plumbing resource!",
    date: "July 17, 2026",
    source: "google",
    verified: true,
    serviceType: "Plumbing Installation",
    technicianName: "Michael",
  },
  {
    id: "7",
    authorName: "Mark",
    authorAvatar: undefined,
    rating: 5,
    content: "Prompt, same day response. Service technician was polite and efficient and finished in an hour.",
    date: "July 17, 2026",
    source: "google",
    verified: true,
    serviceType: "Emergency Repair",
  },
  {
    id: "8",
    authorName: "Tom Otten",
    authorAvatar: undefined,
    rating: 5,
    content: "My technician today, Will, performed an exceptional job, checking my HVAC unit at my home. He was professional, polite, friendly, and efficient. He checked all the systems inside and outside, cleaned everything.",
    date: "July 17, 2026",
    source: "google",
    verified: true,
    serviceType: "HVAC Maintenance",
    technicianName: "Will",
  },
  {
    id: "9",
    authorName: "Ian Heyman",
    authorAvatar: undefined,
    rating: 5,
    content: "Todd was great! Came out and looked at the problem. Saw my floors were going to need repaired as well and he sent me in the right direction! Super helpful and very detailed!",
    date: "July 16, 2026",
    source: "google",
    verified: true,
    serviceType: "Plumbing Repair",
    technicianName: "Todd",
  },
  {
    id: "10",
    authorName: "Celia Carmean",
    authorAvatar: undefined,
    rating: 5,
    content: "Waterworks came through for me. Kameron Gates worked his magic because he's very professional and knowledgeable. He gave my family back a much needed working bathroom in minimal time and saved the day.",
    date: "July 16, 2026",
    source: "google",
    verified: true,
    serviceType: "Bathroom Plumbing",
    technicianName: "Kameron Gates",
  },
];

interface ReviewsCarouselProps {
  title?: string;
  subtitle?: string;
  rating?: number;
  reviewCount?: number;
  reviews?: Review[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export function ReviewsCarousel({
  title = "What Our Customers Are Saying",
  subtitle = "Since 1986, HydroSync has been the trusted choice for homeowners and businesses across Central Ohio.",
  rating = 4.8,
  reviewCount = 4261,
  reviews = mockReviews,
  autoPlay = true,
  autoPlayInterval = 5000,
  className,
}: ReviewsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [reviewsPerView, setReviewsPerView] = useState(3);
  const [carouselRef, setCarouselRef] = useState<HTMLDivElement | null>(null);

  const maxIndex = Math.max(0, reviews.length - reviewsPerView);

  useEffect(() => {
    const handleResize = () => {
      const newPerView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
      setReviewsPerView(newPerView);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [reviews.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  }, [maxIndex]);

  useEffect(() => {
    if (!autoPlay || !carouselRef) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, maxIndex, carouselRef]);

  useEffect(() => {
    if (carouselRef) {
      const cardWidth = carouselRef.querySelector('article')?.clientWidth || 0;
      const gap = 24; // gap-6 = 1.5rem = 24px
      const scrollAmount = (cardWidth + gap) * currentIndex;
      carouselRef.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  }, [currentIndex, carouselRef, reviewsPerView]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null || !carouselRef) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
    setTouchStart(null);
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + reviewsPerView);

  const sourceIcons = {
    google: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
    ),
    yelp: (
      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.18.358-.54.48-1.02.302-1.68-.636-5.402-2.156-5.58-5.217-.06-1.02.6-2.037 1.557-2.61.378-.225.66-.237 1.02-.063 2.221 1.055 5.825 2.517 5.88 5.313-.003.51-.228.936-.714 1.143-.288.123-.657.09-.993-.102zM7.2 12c0-2.58 1.914-4.8 4.44-5.103.21-.027.387-.213.387-.42 0-.318-.363-.465-.72-.3-.72.333-2.823 1.518-3.597 3.96-.186.567.117 1.056.603 1.131.312.048.537-.198.582-.618zm11.28-1.2c-2.703-.123-4.773-1.632-4.923-4.383-.06-1.14.747-2.193 1.707-2.757.333-.198.663-.195 1.023.063 2.28 1.62 5.817 3.147 5.937 5.442.003.51-.225.936-.714 1.146-.285.123-.657.09-.993-.102z" />
      </svg>
    ),
    angie: (
      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
    internal: (
      <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  };

  const sourceLabels = {
    google: "Google",
    yelp: "Yelp",
    angie: "Angie's List",
    internal: "Verified",
  };

  return (
    <section className={cn("py-20 md:py-24 bg-white", className)} aria-labelledby="reviews-heading">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 id="reviews-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-neutral-600 mb-6">{subtitle}</p>
          )}
          <div className="w-full flex items-center justify-end gap-4">
            <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-6 h-6",
                    i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-neutral-300"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-neutral-900">{rating}</span>
            <span className="text-neutral-500">Based on {reviewCount.toLocaleString()} reviews</span>
            {sourceIcons.google && (
              <span className="flex items-center gap-1 text-primary-600 font-medium">
                {sourceIcons.google}
                Google Reviews
              </span>
            )}
          </div>
        </motion.div>

        <div
          ref={setCarouselRef}
          className="flex gap-6 overflow-x-auto scroll-snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
          role="region"
          aria-label="Customer reviews carousel"
          aria-roledescription="carousel"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            {visibleReviews.map((review, index) => (
              <motion.article
                key={review.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "flex-shrink-0 scroll-snap-start w-full sm:max-w-[calc(50%-1.5rem)] lg:max-w-[calc(33.333%-2rem)]",
                  reviewsPerView === 1 && "sm:max-w-full",
                  reviewsPerView === 2 && "lg:max-w-[calc(50%-1.5rem)]"
                )}
                role="group"
                aria-roledescription="slide"
                aria-label={`Review ${currentIndex + index + 1} of ${reviews.length}`}
              >
                <div className="h-full bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-5 h-5",
                          i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-neutral-300"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium text-neutral-600 flex items-center gap-1">
                      {sourceLabels[review.source]}
                    </span>
                  </div>
                  <Quote className="w-10 h-10 text-primary-100 mb-4" aria-hidden="true" />
                  <blockquote className="text-neutral-700 leading-relaxed mb-6">
                    "{review.content}"
                  </blockquote>
                  <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                    <Avatar name={review.authorName} size="md" src={review.authorAvatar} />
                    <div>
                      <div className="flex items-center gap-2">
                        <cite className="font-semibold text-neutral-900 not-italic">{review.authorName}</cite>
                        {review.verified && (
                          <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Verified</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-neutral-500">
                        <span>{review.date}</span>
                        {review.serviceType && (
                          <>
                            <span className="text-neutral-300">•</span>
                            <span>{review.serviceType}</span>
                          </>
                        )}
                        {review.technicianName && (
                          <>
                            <span className="text-neutral-300">•</span>
                            <span>Tech: {review.technicianName}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="/reviews"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            View All Reviews
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}