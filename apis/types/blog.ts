export interface Attachment {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      fileName: string;
    };
  };
}

export interface Tag {
  fields: {
    name: string;
    slug: string;
  };
}

export interface Post {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  heroImage: Attachment;
  tags: Tag[];
}

export interface Event {
  url: string;
  date: string;
  name: string;
  location: string;
  guests: number;
}
