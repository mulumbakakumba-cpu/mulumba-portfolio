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
};

export const projects: Project[] = [
  {
    slug: "eforeigner-drc",
    title: "eForeigner DRC",
    category: "Web Application",
    description:
      "A digital platform designed to simplify access to immigration-related services in the Democratic Republic of Congo.",
    longDescription:
      "eForeigner DRC is a digital platform concept focused on providing foreigners with a modern way to access immigration services, submit applications and track their requests online.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    github: "https://github.com/",
    featured: true,
  },

  {
    slug: "movie-recommender",
    title: "Movie Recommendation System",
    category: "AI / Machine Learning",
    description:
      "A recommendation system that suggests movies based on content similarity and user preferences.",
    longDescription:
      "This project explores recommendation techniques using TF-IDF, cosine similarity and machine learning approaches to generate relevant movie recommendations.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "TF-IDF",
      "Cosine Similarity",
    ],
    github: "https://github.com/",
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
    github: "https://github.com/",
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
    github: "https://github.com/",
    featured: false,
  },
];