export interface Project {
  id: string;
  title: string;
  location: string;
  /** matching service slug — used for filtering */
  serviceSlug: string;
  serviceLabel: string;
  description: string;
  /** still image OR poster for a video card */
  image?: string;
  /** mp4 path; when set, card renders <video> instead of <img> */
  video?: string;
}

export const projects: Project[] = [
  {
    id: 'hidroizolatsiya-nishki-valyak',
    title: 'Хидроизолация с нишки и валяк — 450 м²',
    location: 'София',
    serviceSlug: 'hidroizolatsiya',
    serviceLabel: 'Хидроизолация',
    description:
      'Изкъртване на компрометираната стара хидроизолация, грундиране и полагане на два пласта нова мембрана. Нишките са оформени с валяк за допълнителна якост по детайлите. 450 м² за 4 дена.',
    video: '/images/projects/hidroizolatsiya-nishki-valyak.mp4',
  },
  {
    id: 'nov-keremiden-pokriv',
    title: 'Изграждане на нов керемиден покрив',
    location: 'София',
    serviceSlug: 'remont-na-pokrivi',
    serviceLabel: 'Цялостен ремонт',
    description:
      'Демонтаж на старите летви, мембрана и компрометирани греди и дъски. Положихме нова подкеремидна мембрана и двойна летвена скара, наредихме керемидите и подменихме счупените с нови. 11 дена работа.',
    image: '/images/projects/nov-keremiden-pokriv.jpg',
  },
  {
    id: 'prenarezhdane-keremiden-pokriv',
    title: 'Пренареждане на керемиден покрив',
    location: 'София',
    serviceSlug: 'prenarezhdane-na-keremidi',
    serviceLabel: 'Керемиди',
    description:
      'Сваляне и пренареждане на керемидите по проблемните зони, подмяна на счупените с нови от съответния модел и проверка на летвите и подложната мембрана. Възстановено правилно застъпване и плътност на покритието.',
    video: '/images/projects/prenarezhdane-keremiden-pokriv.mp4',
  },
  {
    id: 'hidroizolatsiya-plosak-pokriv',
    title: 'Хидроизолация на плосък покрив',
    location: 'София',
    serviceSlug: 'hidroizolatsiya',
    serviceLabel: 'Плосък покрив',
    description:
      'Полагане на нова хидроизолационна мембрана върху плосък покрив с прецизна обработка на детайлите около комините, отдушниците и проникванията на климатичните инсталации. Чист, водоплътен завършек, готов за дълготрайна експлоатация.',
    image: '/images/projects/hidroizolatsiya-plosak-pokriv.jpg',
  },
  {
    id: 'hidroizolatsiya-osnova-nov-stroezh',
    title: 'Хидроизолация на основа — нов строеж',
    location: 'София',
    serviceSlug: 'hidroizolatsiya',
    serviceLabel: 'Нов строеж',
    description:
      'Подготовка и хидроизолация на бетонна основа преди обратен насип в рамките на нов строеж. Защитата на плочата от подпочвени води е основата на сух и дълготраен бъдещ покрив.',
    image: '/images/projects/hidroizolatsiya-osnova-nov-stroezh.jpg',
  },
];
