import { Star, ExternalLink } from 'lucide-react';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import ReviewCard from '../components/ReviewCard';
import CTASection from '../components/CTASection';
import { reviews, reviewsAggregate } from '../data/reviews';
import { business } from '../data/business';
import { reviewsSchema, breadcrumbSchema } from '../lib/seo';

const crumbs = [
  { name: 'Начало', path: '/' },
  { name: 'Отзиви', path: '/otzivi' },
];

export default function Testimonials() {
  return (
    <>
      <Seo
        title="Отзиви от клиенти за ПОКРИВЧЕ | Ремонт на покриви"
        description="Прочетете какво казват клиентите ни за ремонта на покриви, отстраняването на течове и обслужването на ПОКРИВЧЕ в цяла България."
        path="/otzivi"
        jsonLd={[reviewsSchema(), breadcrumbSchema(crumbs)]}
      />
      <PageHeader
        crumbs={crumbs}
        label="Отзиви"
        title="Какво казват клиентите"
        intro="Доверието на нашите клиенти е най-добрата ни препоръка. Ето част от отзивите, които сме получили."
      />

      <section className="bg-bg-light py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl">
          {/* Aggregate */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 text-center">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-dark font-bold">
              <span className="text-2xl font-black font-heading">{reviewsAggregate.ratingValue.toFixed(1)}</span>
              <span className="text-gray-500 font-medium"> от 5 — на база {reviewsAggregate.reviewCount} отзива</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((r, i) => (
              <ReviewCard key={i} review={r} />
            ))}
          </div>

          {business.googleReviewsUrl && (
            <div className="text-center mt-12">
              <a href={business.googleReviewsUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest hover:gap-3 transition-all">
                Вижте всички отзиви в Google <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
