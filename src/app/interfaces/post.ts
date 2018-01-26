export interface PostContent {
  protected: boolean;
  renderd: string;
}

export interface PostTitle {
  renderd: string;
}

export interface Post {
  author: number;
  categories: number[];
  content: PostContent;
  date: string;
  featured_media: number;
  format: string;
  id: number;
  meta: string[];
  modified: string;
  tags: string[];
  title: PostTitle;
  type: string;
}
