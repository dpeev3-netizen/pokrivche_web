import { Star } from 'lucide-react';
import type { Review } from '../data/reviews';

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-bg-light p-8 rounded-brand shadow-sm border border-transparent hover:border-primary/20 transition-colors relative flex flex-col h-full">
      <div className="absolute top-6 right-6 text-white drop-shadow-sm">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
        </svg>
      </div>
      <div className="flex gap-1 mb-6">
        {[...Array(review.rating)].map((_, j) => (
          <Star key={j} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 relative z-10 italic flex-grow">
        "{review.text}"
      </p>
      <div className="flex justify-between items-end border-t border-dark/5 pt-4 mt-auto">
        <div>
          <h4 className="font-bold text-dark font-heading text-sm uppercase">{review.name}</h4>
          {review.city && <p className="text-xs text-gray-500 mt-1">{review.city}</p>}
        </div>
      </div>
    </div>
  );
}
