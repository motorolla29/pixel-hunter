const GAME_DATA = [
  {
    level: 0,
    type: `doubleQuestion`,
    task: `Угадайте для каждого изображения фото или рисунок?`,
    options: [{
      alt: `Option 1`,
      src: `https://render.fineartamerica.com/images/rendered/search/print/images-medium-5/kangaroo-grazing-graham-gercken.jpg`,
      inputName: `question1`,
      answer: `paint`
    },
    {
      alt: `Option 2`,
      src: `http://i.imgur.com/1KegWPz.jpg`,
      inputName: `question2`,
      answer: `photo`
    }
    ]
  },
  {
    level: 1,
    type: `singleQuestion`,
    task: `Угадай, фото или рисунок?`,
    options: [{
      alt: `Option 1`,
      src: `https://cdn.trendhunterstatic.com/phpthumbnails/270/270140/270140_6_800.jpeg`,
      inputName: `question1`,
      answer: `paint`
    }]
  },
  {
    level: 2,
    type: `tripleQuestion`,
    task: `Найдите рисунок среди изображений`,
    options: [{
      alt: `Option 1`,
      src: `https://i.pinimg.com/originals/aa/8c/64/aa8c643686154915d49238dc15118eae.jpg`,
      answer: `paint`
    },
    {
      alt: `Option 2`,
      src: `http://i.imgur.com/DKR1HtB.jpg`,
      answer: `photo`
    },
    {
      alt: `Option 3`,
      src: `https://i.imgur.com/DiHM5Zb.jpg`,
      answer: `photo`
    }
    ]
  },
  {
    level: 3,
    type: `doubleQuestion`,
    task: `Угадайте для каждого изображения фото или рисунок?`,
    options: [{
      alt: `Option 1`,
      src: `https://render.fineartamerica.com/images/rendered/search/print/images-medium-5/kangaroo-grazing-graham-gercken.jpg`,
      inputName: `question1`,
      answer: `paint`
    },
    {
      alt: `Option 2`,
      src: `http://i.imgur.com/1KegWPz.jpg`,
      inputName: `question2`,
      answer: `photo`
    }
    ]
  },
  {
    level: 4,
    type: `singleQuestion`,
    task: `Угадай, фото или рисунок?`,
    options: [{
      alt: `Option 1`,
      src: `https://cdn.trendhunterstatic.com/phpthumbnails/270/270140/270140_6_800.jpeg`,
      inputName: `question1`,
      answer: `paint`
    }]
  },
  {
    level: 5,
    type: `tripleQuestion`,
    task: `Найдите рисунок среди изображений`,
    options: [{
      alt: `Option 1`,
      src: `https://i.pinimg.com/originals/aa/8c/64/aa8c643686154915d49238dc15118eae.jpg`,
      answer: `paint`
    },
    {
      alt: `Option 2`,
      src: `http://i.imgur.com/DKR1HtB.jpg`,
      answer: `photo`
    },
    {
      alt: `Option 3`,
      src: `https://i.imgur.com/DiHM5Zb.jpg`,
      answer: `photo`
    }
    ]
  },
  {
    level: 6,
    type: `doubleQuestion`,
    task: `Угадайте для каждого изображения фото или рисунок?`,
    options: [{
      alt: `Option 1`,
      src: `https://render.fineartamerica.com/images/rendered/search/print/images-medium-5/kangaroo-grazing-graham-gercken.jpg`,
      inputName: `question1`,
      answer: `paint`
    },
    {
      alt: `Option 2`,
      src: `http://i.imgur.com/1KegWPz.jpg`,
      inputName: `question2`,
      answer: `photo`
    }
    ]
  },
  {
    level: 7,
    type: `singleQuestion`,
    task: `Угадай, фото или рисунок?`,
    options: [{
      alt: `Option 1`,
      src: `https://cdn.trendhunterstatic.com/phpthumbnails/270/270140/270140_6_800.jpeg`,
      inputName: `question1`,
      answer: `paint`
    }]
  },
  {
    level: 8,
    type: `tripleQuestion`,
    task: `Найдите рисунок среди изображений`,
    options: [{
      alt: `Option 1`,
      src: `https://i.pinimg.com/originals/aa/8c/64/aa8c643686154915d49238dc15118eae.jpg`,
      answer: `paint`
    },
    {
      alt: `Option 2`,
      src: `http://i.imgur.com/DKR1HtB.jpg`,
      answer: `photo`
    },
    {
      alt: `Option 3`,
      src: `https://i.imgur.com/DiHM5Zb.jpg`,
      answer: `photo`
    }
    ]
  },
  {
    level: 9,
    type: `doubleQuestion`,
    task: `Угадайте для каждого изображения фото или рисунок?`,
    options: [{
      alt: `Option 1`,
      src: `https://render.fineartamerica.com/images/rendered/search/print/images-medium-5/kangaroo-grazing-graham-gercken.jpg`,
      inputName: `question1`,
      answer: `paint`
    },
    {
      alt: `Option 2`,
      src: `http://i.imgur.com/1KegWPz.jpg`,
      inputName: `question2`,
      answer: `photo`
    }
    ]
  }
];

const STATS_DATA = new Array(GAME_DATA.length).fill(`unknown`);

export {GAME_DATA, STATS_DATA};
