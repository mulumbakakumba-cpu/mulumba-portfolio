
export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github?: string;
  demo?: string;
  stats?: {
    label: string;
    value: string;
  }[];
  featured: boolean;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "cite-bethel",
    title: "Cité Béthel – Lemba Salongo",
    category: "Full-Stack Web Development",
    description:
      "A modern bilingual church website designed to strengthen digital communication, share sermons, manage events and connect the Cité Béthel community.",
    longDescription:
      "Cité Béthel is a complete bilingual digital platform developed for the Cité Béthel – Lemba Salongo Christian community in Kinshasa, Democratic Republic of Congo. The website provides visitors with information about the church, worship schedules, events, sermons and service replays. It includes a custom administration dashboard that allows authorized administrators to manage live broadcasts, sermon recordings, events and contact messages. The platform integrates Supabase for authentication, database management and image storage, and is deployed on Vercel.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Vercel",
    ],
    github:
      "https://github.com/mulumbakakumba-cpu/cite-bethel",
    demo:
      "https://cite-bethel-n5xe.vercel.app/",
      image: "/images/projects/cite-bethel.png",
    featured: true,
  },

  {
    slug: "eforeigner-drc",
    title: "eForeigner DRC",
    category: "Web Application",
    description:
      "A full-stack digital immigration management platform designed to simplify immigration services for foreigners in the Democratic Republic of Congo.",
    longDescription:
      "eForeigner DRC is a full-stack immigration management platform built to digitize the management of immigration applications in the Democratic Republic of Congo. The platform allows applicants to create accounts, submit applications, upload supporting documents, track their application progress and complete the payment step. Immigration officers can review applications, validate documents, verify medical information and payments, and make immigration decisions. The platform also includes role-based access control, audit logging, secure authentication and a bilingual French-English interface.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Turborepo",
    ],
    github:
      "https://github.com/mulumbakakumba-cpu/eforeigner-drc",
      image: "/images/projects/eforeigner-drc.png",
    featured: true,
  },

  {
    slug: "movie-recommender",
    title: "Movie Recommender System",
    category: "AI / Machine Learning",
    description:
      "A hybrid machine-learning recommendation system combining TF-IDF content-based filtering with SVD collaborative filtering to generate personalized movie recommendations.",
    longDescription:
      "This project combines content-based filtering and collaborative filtering in a hybrid recommendation engine. TF-IDF and cosine similarity are used to model movie content, while SVD learns user-movie preferences from ratings. The final hybrid model combines both signals, with the best evaluated configuration using 10% content-based scoring and 90% collaborative scoring. The application is integrated with the TMDB API for posters, ratings, metadata, descriptions and trailers, and is deployed as an interactive Streamlit application.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "TF-IDF",
      "SVD",
      "Machine Learning",
      "Streamlit",
      "TMDB API",
    ],
    github:
      "https://github.com/mulumbakakumba-cpu/movie-recommender",
    demo:
      "https://movie-recommender-09.streamlit.app/",
    
    stats: [
      {
        label: "RMSE",
        value: "0.8807",
      },
      {
        label: "F1@10",
        value: "0.0211",
      },
      {
        label: "Best Weight",
        value: "10 / 90",
      },
    ],
    image: "/images/projects/movie-recommender.jpg",
    featured: true,
  },

  {
    slug: "university-recommender",
    title: "University Recommender System",
    category: "Data / AI",
    description:
      "A system designed to help students identify suitable university or academic program options.",
    longDescription:
      "The system analyzes student information and available academic options to generate recommendations based on defined criteria.",
    technologies: [
      "Python",
      "SQL",
      "MySQL",
      "React",
      "Data Analysis",
    ],
    image: "/images/projects/university-recommender.jpg",
    featured: true,
  },

  {
    slug: "electricity-analytics",
    title: "Electricity Analytics",
    category: "Data Analytics",
    description:
      "An electricity analytics platform focused on consumption patterns, regional analysis and grid anomaly detection.",
    longDescription:
      "This project analyzes 35,040 electricity consumption records across four regions. It uses Python, Pandas, SQL and Streamlit to explore consumption trends, identify anomalies in electricity usage, voltage and power factor, and provide interactive insights through a publicly deployed dashboard.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "Streamlit",
      "Data Visualization",
    ],
    github:
      "https://github.com/mulumbakakumba-cpu/electricity-analytics",
    demo:
      "https://electricity-analytics.streamlit.app/",
    stats: [
      {
        label: "Records",
        value: "35,040",
      },
      {
        label: "Regions",
        value: "4",
      },
      {
        label: "Anomalies",
        value: "1,789",
      },
    ],
    featured: true,
  },

  {
    slug: "database-management",
    title: "Database Management System",
    category: "Database",
    description:
      "A relational database project focused on data modeling, SQL queries and database management.",
    longDescription:
      "A database project demonstrating relational data modeling, normalization, SQL queries, relationships and database administration concepts.",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "SQL",
      "Database Design",
      "Data Modeling",
    ],
    featured: false,
  },
];
