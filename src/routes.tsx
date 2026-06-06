import type { RouteRecord } from 'vite-react-ssg';
import App from './App';
import Home from './pages/Home';
import Services from './pages/Services';
import ServicePage from './pages/ServicePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Faq from './pages/Faq';
import Testimonials from './pages/Testimonials';
import CityPage from './pages/CityPage';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import { services } from './data/services';
import { cities } from './data/cities';
import { publishedPosts } from './data/posts';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <App />,
    entry: 'src/App.tsx',
    children: [
      { index: true, Component: Home },
      { path: 'uslugi', Component: Services },
      {
        path: 'uslugi/:slug',
        Component: ServicePage,
        entry: 'src/pages/ServicePage.tsx',
        getStaticPaths: () => services.map((s) => `uslugi/${s.slug}`),
      },
      { path: 'za-nas', Component: About },
      { path: 'proekti', Component: Gallery },
      { path: 'otzivi', Component: Testimonials },
      { path: 'chesto-zadavani-vaprosi', Component: Faq },
      { path: 'kontakti', Component: Contact },
      { path: 'blog', Component: BlogIndex },
      {
        path: 'blog/:slug',
        Component: BlogPost,
        entry: 'src/pages/BlogPost.tsx',
        getStaticPaths: () => publishedPosts.map((p) => `blog/${p.slug}`),
      },
      {
        path: 'pokrivni-uslugi/:city',
        Component: CityPage,
        entry: 'src/pages/CityPage.tsx',
        getStaticPaths: () => cities.map((c) => `pokrivni-uslugi/${c.slug}`),
      },
      { path: 'poveritelnost', Component: Privacy },
      { path: 'obshti-usloviya', Component: Terms },
      { path: '*', Component: NotFound },
    ],
  },
];
