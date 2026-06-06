import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import FaqAccordion from '../components/FaqAccordion';
import CTASection from '../components/CTASection';
import { faqs } from '../data/faqs';
import { faqPageSchema, breadcrumbSchema } from '../lib/seo';

const crumbs = [
  { name: 'Начало', path: '/' },
  { name: 'Често задавани въпроси', path: '/chesto-zadavani-vaprosi' },
];

export default function Faq() {
  return (
    <>
      <Seo
        title="Често задавани въпроси за ремонт на покриви | ПОКРИВЧЕ"
        description="Отговори на най-честите въпроси за ремонта на покриви — цени, срокове, материали, гаранция и безплатен оглед. Всичко, което трябва да знаете."
        path="/chesto-zadavani-vaprosi"
        jsonLd={[faqPageSchema(faqs), breadcrumbSchema(crumbs)]}
      />
      <PageHeader
        crumbs={crumbs}
        label="ЧЗВ"
        title="Често задавани въпроси"
        intro="Събрахме отговорите на въпросите, които клиентите ни задават най-често. Не намирате своя въпрос? Обадете ни се."
      />

      <section className="bg-bg-light py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-3xl">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <CTASection title="Все още имате въпрос?" subtitle="Обадете се за безплатна консултация — ще отговорим на всичките ви въпроси." />
    </>
  );
}
