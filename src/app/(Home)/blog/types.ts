
export interface Blogdata { 
    status: boolean,
    blogs:BlogArr[]
}
export interface BlogArr {
  id: number;
  title: string;
  cover_image: string;
  content: string;
  category: string;
  author: string;
  created_at: string;
}
    


export interface BlogObjectType {
  id: number;
  title: string;
  cover_image: string;
  content: string;
  category: string;
  author: string;
  created_at: string;
}