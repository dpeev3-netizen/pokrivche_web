export interface NavItem {
  label: string;
  to: string;
}

/** Primary navigation — shared by the navbar and the footer. */
export const navItems: NavItem[] = [
  { label: 'Услуги', to: '/uslugi' },
  { label: 'Проекти', to: '/proekti' },
  { label: 'За нас', to: '/za-nas' },
  { label: 'Отзиви', to: '/otzivi' },
  { label: 'ЧЗВ', to: '/chesto-zadavani-vaprosi' },
  { label: 'Блог', to: '/blog' },
  { label: 'Контакти', to: '/kontakti' },
];
