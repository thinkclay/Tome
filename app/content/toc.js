import c0s0 from './00_cover.md';
import c0s1 from './01_who.md';
import c0s2 from './02_what.md';
import c0s3 from './03_prerequisites.md';

export default [
  {
    key: 'primer',
    title: 'A Quick Primer',
    topics: [
      {
        key: 'cover',
        title: 'Unicorns and Gophers',
        description: 'Basically just a cover page to make this seems more book-like with some thank-yous and credits.',
        content: c0s0
      },
      {
        key: 'who',
        title: 'A note from the author',
        description: 'A quick insight on the inspiration and mission for this book and your takeaway as a reader.',
        content: c0s1
      },
      {
        key: 'what',
        title: 'What you will learn',
        description: 'An overview of the topics you will learn and what level of experience you need to learn.',
        content: c0s2
      },
      {
        key: 'pre',
        title: 'Before you begin',
        description: 'How to navigation the content and what prerequisites you may need or want.',
        content: c0s3
      },
    ]
  },
  {
    key: 'gophers',
    title: 'Understanding Gophers',
    topics: [
      {
        title: 'A quick primer',
        description: 'The who, what, where, why, when of the go programming language and the community that loves it.',
        content: c0s3
      },
      {
        title: 'Golang versus the other guys',
        description: 'Learn the pros and cons of Go and how it compares to other popular programming languages.',
        content: c0s3
      },
      {
        title: 'Primatives and the like',
        description: 'A simple list of the built-in data types with brief descriptions about each type with examples.',
        content: c0s3
      },
      {
        title: 'Lexers, tokens, and beards; OH MY!',
        description: 'A nice overview of reserved words and an overview of what they mean and do.',
        content: c0s3
      },
      {
        title: 'We are so like anti-conformist',
        description: 'Overview of control statements and scope and notable differences when compared to other popular languages.',
        content: c0s3
      },
      {
        title: 'Do gophers have nests?',
        description: 'Arrays, maps, and slices. Learn how the basics of working with collections and nested data.',
        content: c0s3
      },
      {
        title: 'Where are the classes?',
        description: 'You might have to unlearn some pre-conceived notions you had about OOP best practices.',
        content: c0s3
      },
      {
        title: 'Do NOT segfault on me',
        description: 'Dealing with errors, pointers and references. Low level power without the typical hassle.',
        content: c0s3
      },
      {
        title: 'Parallelism and all that jazz',
        description: 'Answers to the common questions about concurrency that nobody is really asking.',
        content: c0s3
      },
    ]
  },
  {
    title: 'Get GOing Already (and other puns)',
    topics: [
      {
        title: 'Opinionated setup, deal with it.. or not',
        description: 'My personal preferences for setting up a local dev environment. Opinions only in the places they belong.',
        content: c0s3
      },
      {
        title: 'Opinionated setup, deal with it.. or not',
        description: 'My personal preferences for setting up a local dev environment. Opinions only in the places they belong.',
        content: c0s3
      },
      {
        title: 'Resources you should know about',
        description: 'As developers, we are really only as good as the documentation or examples we have to work from.',
        content: c0s3
      },
    ]
  }
];
