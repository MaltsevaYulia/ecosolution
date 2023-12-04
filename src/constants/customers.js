import { nanoid } from 'nanoid';

import zakhidnyi from 'assets/customers/zakhidnyi.png';
import audi from 'assets/customers/audi.png';
import dnipro from 'assets/customers/dnipro.png';
import bosch from 'assets/customers/bosch.png';

export const customers = [
  {
    name: 'Bosch',
    img: bosch,
    url: 'https://www.bosch.com/',
    id: nanoid(),
  },
  {
    name: 'Zakhidnyi Buh',
    img: zakhidnyi,
    url: 'https://zahbug.com/en/',
    id: nanoid(),
  },
  {
    name: 'Audi',
    img: audi,
    url: 'https://www.audi.com/en.html',
    id: nanoid(),
  },
  {
    name: 'Dnipro M',
    img: dnipro,
    url: 'https://dnipro-m.ua/',
    id: nanoid(),
  },
];
