export interface User {
  username: string;
  id: string;
  avatar_url?: string;
  type?: string;
  name?: string;
  company?: string;
  blog?: string;
  location?: string;
  email?: string;
  bio?: string;
  public_repos?: number;
  followers?: number;
  following?: number;
  created_at?: Date;
  updated_at?: Date;
}
