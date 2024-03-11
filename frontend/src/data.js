import Thumbnail1 from './images/blog1.jpg'
import Thumbnail2 from './images/blog2.jpg'
import Thumbnail3 from './images/blog3.jpg'
import Thumbnail4 from './images/blog4.jpg'

export const DUMMY_POSTS =[
    {
        id: '1',
        thumbnail: Thumbnail1,
        category: 'education',
        title: 'What has become of our education system?',
        desc: `
          In this in-depth exploration, we analyze the current state of the education system, examining challenges, innovations, and potential paths for improvement. Join us on a journey to understand the complexities of modern education and its impact on society.
          `,
        authorID: 3,
      },
      {
        id: '2',
        thumbnail: Thumbnail2,
        category: 'technology',
        title: 'The Unseen Impact of Quantum Computing',
        desc: `
          Delve into the fascinating world of quantum computing and its transformative effects on technology. This article unveils the mysteries behind quantum phenomena, exploring practical applications, challenges, and the potential paradigm shift in computing.
          `,
        authorID: 2,
      },
      {
        id: '3',
        thumbnail: Thumbnail3,
        category: 'science',
        title: 'Journey to the Edge of the Universe',
        desc: `
          Embark on an awe-inspiring lorem journey to the outer reaches of the universe. Discover the wonders of distant galaxies, cosmic phenomena, and the latest breakthroughs in space exploration. Join us as we push the boundaries of human understanding.
          `,
        authorID: 1,
      },
      {
        id: '4',
        thumbnail: Thumbnail4,
        category: 'art',
        title: 'The Surreal World of Abstract Expressionism',
        desc: `
          Immerse yourself in the surreal and thought-provoking realm of abstract expressionism. This article explores the origins, techniques, and impact of abstract art on culture and creativity. Uncover the beauty and complexity of artistic expression.
          `,
        authorID: 4,
      },
]