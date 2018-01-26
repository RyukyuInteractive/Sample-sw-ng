export interface PostContent {
  protected: boolean;
  rendered: string;
}

export interface PostTitle {
  rendered: string;
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
