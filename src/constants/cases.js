import { nanoid } from 'nanoid';

import slide1 from 'assets/cases/slide1-1280-1x.jpg';
import slide12x from 'assets/cases/slide1-1280-2x.jpg';

import slide2 from 'assets/cases/slide2-1280-1x.jpg';
import slide22x from 'assets/cases/slide2-1280-2x.jpg';

import slide3 from 'assets/cases/slide3-1280-1x.jpg';
import slide32x from 'assets/cases/slide3-1280-2x.jpg';

import slide4 from 'assets/cases/slide4-1280-1x.jpg';
import slide42x from 'assets/cases/slide4-1280-2x.jpg';

import slide5 from 'assets/cases/slide5-1280-1x.jpg';
import slide52x from 'assets/cases/slide5-1280-2x.jpg';

export const cases = [
  {
    id: nanoid(),
    title: 'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”',
    text: 'Wind Power for auto field irrigation',
    date: 'July 2023',
    img: {
      img1x: slide1,
      img2x: slide12x,
    },
  },
  {
    id: nanoid(),
    title: 'Zhytomyr city Private Enterprise “Bosch”',
    text: 'Solar Panels for industrial use',
    date: 'November 2023',
    img: {
      img1x: slide2,
      img2x: slide22x,
    },
  },
  {
    id: nanoid(),
    title: 'Rivne city Private Enterprise “Biotech”',
    text: 'Thermal modules',
    date: 'October 2023',
    img: {
      img1x: slide3,
      img2x: slide32x,
    },
  },
  {
    id: nanoid(),
    title: 'Kherson Region Private Enterprise “WINDCRAFT TAVRIA”',
    text: 'Wind power',
    date: 'May 2014',
    img: {
      img1x: slide4,
      img2x: slide42x,
    },
  },
  {
    id: nanoid(),
    title: 'Botievskaya wind farm”',
    text: 'The argest wind farms in Ukraine',
    date: 'June 2014',
    img: {
      img1x: slide5,
      img2x: slide52x,
    },
  },
];


