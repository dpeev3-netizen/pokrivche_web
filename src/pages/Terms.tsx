import type { ReactNode } from 'react';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import { business } from '../data/business';

const crumbs = [
  { name: 'Начало', path: '/' },
  { name: 'Общи условия', path: '/obshti-usloviya' },
];

function H({ children }: { children: ReactNode }) {
  return <h2 className="text-xl md:text-2xl font-black font-heading text-dark uppercase tracking-tight mt-10 mb-4">{children}</h2>;
}
function P({ children }: { children: ReactNode }) {
  return <p className="text-gray-600 text-base md:text-lg leading-relaxed my-4">{children}</p>;
}

export default function Terms() {
  return (
    <>
      <Seo
        title="Общи условия | ПОКРИВЧЕ"
        description="Общи условия за ползване на уебсайта и услугите на ПОКРИВЧЕ."
        path="/obshti-usloviya"
        noindex
      />
      <PageHeader crumbs={crumbs} title="Общи условия" />

      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-3xl">
          <P>
            Настоящите Общи условия уреждат използването на уебсайта на {business.legalName} и реда за заявяване на
            нашите услуги. С използването на сайта вие се съгласявате с тези условия.
          </P>


          <H>Услуги</H>
          <P>
            Предлагаме услуги за ремонт, поддръжка и изграждане на покриви, включително отстраняване на течове,
            пренареждане на керемиди, хидроизолация, нови покривни конструкции и монтаж на улуци. Конкретният обхват
            на всяка услуга се договаря индивидуално след оглед.
          </P>

          <H>Оферти и цени</H>
          <P>
            Информацията на сайта има информативен характер и не представлява обвързваща оферта. Окончателната цена се
            определя след безплатен оглед на място и се предоставя в писмена оферта без скрити такси.
          </P>

          <H>Гаранция</H>
          <P>
            За извършените от нас работи предоставяме писмена гаранция. Обхватът и срокът на гаранцията се посочват в
            договора или офертата за съответния обект.
          </P>

          <H>Отговорност</H>
          <P>
            Стремим се информацията на сайта да е точна и актуална, но не носим отговорност за евентуални неточности
            или за решения, взети единствено въз основа на съдържанието тук, без предварителна консултация с нас.
          </P>

          <H>Интелектуална собственост</H>
          <P>
            Съдържанието на този сайт — текстове, изображения и лого — е собственост на {business.legalName} и не може
            да бъде използвано без разрешение.
          </P>

          <H>Приложимо право</H>
          <P>
            За всички неуредени въпроси се прилага действащото законодателство на Република България.
          </P>

          <H>Контакт</H>
          <P>
            За въпроси относно тези условия се свържете с нас на {business.phone} или {business.email}.
          </P>
        </div>
      </section>
    </>
  );
}
