import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Seo from '../components/Seo';
import Breadcrumbs from '../components/Breadcrumbs';
import CTASection from '../components/CTASection';
import NotFound from './NotFound';
import { postBySlug, type Block } from '../data/posts';
import { articleSchema, breadcrumbSchema } from '../lib/seo';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('bg-BG', { day: 'numeric', month: 'long', year: 'numeric' });
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case 'h2':
      return <h2 key={i} className="text-2xl font-black font-heading text-dark uppercase tracking-tight mt-10 mb-4">{block.text}</h2>;
    case 'ul':
      return (
        <ul key={i} className="list-disc pl-6 space-y-2 my-5 text-gray-600 text-lg leading-relaxed marker:text-primary">
          {block.items.map((it, j) => <li key={j}>{it}</li>)}
        </ul>
      );
    default:
      return <p key={i} className="text-gray-600 text-lg leading-relaxed my-5">{block.text}</p>;
  }
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? postBySlug(slug) : undefined;

  if (!post) return <NotFound />;

  const crumbs = [
    { name: 'Начало', path: '/' },
    { name: 'Блог', path: '/blog' },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <>
      <Seo
        title={post.metaTitle}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        image={post.coverImage}
        type="article"
        jsonLd={[articleSchema(post), breadcrumbSchema(crumbs)]}
      />

      {/* Header */}
      <section className="relative bg-dark overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-10 max-w-3xl py-12 md:py-16">
          <Breadcrumbs items={crumbs} dark />
          <h1 className="text-3xl md:text-4xl font-black font-heading text-white leading-tight uppercase tracking-tighter mb-5">{post.title}</h1>
          <div className="flex items-center gap-5 text-xs font-bold uppercase tracking-wider text-white/50">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" /> {formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> {post.readingMinutes} мин четене</span>
          </div>
        </div>
      </section>

      {/* Cover */}
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-3xl -mt-0">
          <div className="rounded-brand overflow-hidden border border-dark/5 aspect-[16/9] -translate-y-8 shadow-lg">
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="bg-white pb-16 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-3xl">
          {post.content.map(renderBlock)}

          <div className="mt-12 pt-8 border-t border-dark/5">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" /> Обратно към блога
            </Link>
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
