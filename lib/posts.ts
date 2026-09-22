export type Link = {
  title: string;
  url: string;
};

export type Post = {
  slug: string;
  title: string;
  links: Link[];
};

export const posts: Post[] = [
  {
    slug: "learn-claude",
    title: "Learn Claude",
    links: [
      {
        title: "CLAUDE CODE FULL COURSE 4 HOURS: Build & Sell (2026)",
        url: "https://youtu.be/QoQBzR1NIqI?si=wF8RfB1dG5mMEkFV",
      },
      {
        title: "Learn 80% of Claude Code in Under 20 Minutes",
        url: "https://youtu.be/z9rdrNrkvDY?si=OmhMkgrz48QwnWJj",
      },
      {
        title: "10 Best FREE AI Courses for Beginners",
        url: "https://youtu.be/eZ-8bikpH5g?si=jrb_VG5SOfVA1rUh",
      },
      {
        title: "9 Claude Skills I Use Every Single Day (Steal Them)",
        url: "https://youtu.be/cAeQjck1jHs?si=HsDQkmQgrddfZFc-",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
