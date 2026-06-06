import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import { publishedPosts } from '../data/posts';
import { breadcrumbSchema } from '../lib/seo';

const crumbs = [
  { name: 'Начало', path: '/' },
  { name: 'Блог', path: '/blog' },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('bg-BG', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BlogIndex() {
  return (
    <>
      <Seo
        title="Блог за покриви — съвети и полезна информация | ПОКРИВЧЕ"
        description="Полезни статии и съвети за поддръжката и ремонта на покриви — признаци за проблеми, хидроизолация, подготовка за зимата и още."
        path="/blog"
        jsonLd={breadcrumbSchema(crumbs)}
      />
      <PageHeader
        crumbs={crumbs}
        label="Блог"
        title="Съвети за вашия покрив"
        intro="Полезни статии и практични съвети, които да ви помогнат да поддържате покрива си в добро състояние."
      />

      <section className="bg-bg-light py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {publishedPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group bg-white rounded-brand overflow-hidden border border-white shadow-sm hover:shadow-md transition-all flex flex-col">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={post.coverImage} alt={post.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {formatDate(post.date)}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readingMinutes} мин</span>
                  </div>
                  <h2 className="font-bold font-heading text-dark text-lg leading-snug mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="text-sm text-gray-500 leading-snug flex-grow">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-primary text-xs font-bold uppercase tracking-widest">
                    Прочети <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
