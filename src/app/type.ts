export type ProjectItemType = {
  id: number;
  url: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  qrUrl: string;
};
export type ProjectType = {
  year: string;
  list: ProjectItemType[];
}[];
