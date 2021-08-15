export interface User {
  id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  token: string;
  roles: string;
}

export const UserModel: User = {
  id: null,
  username: null,
  email: null,
  isAdmin: false,
  token: null,
  roles: null
};
