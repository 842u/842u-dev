export type Tool = {
  name: string;
  icon: string;
};

export type Project = {
  name: string;
  image: string;
  description: string;
  tools: Tool[];
  slug: string;
};
