export type NavLink = {
  id: string;
  title: string;
};

export type Service = {
  title: string;
  icon: string;
};

export type Tech = {
  name: string;
  icon: string;
};

export type Experience = {
  title: string;
  companyName: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

export type ProjectTagColor =
  | "blue-text-gradient"
  | "green-text-gradient"
  | "pink-text-gradient";

export type ProjectTag = {
  name: string;
  color: ProjectTagColor;
};

export type Project = {
  name: string;
  description: string;
  tags: ProjectTag[];
  image: string;
  sourceCodeLink: string;
};
