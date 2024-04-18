export interface UserInterface {
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
  followers?: [UserInterface];
  following?: [UserInterface];
  created_at?: Date;
  updated_at?: Date;
}
