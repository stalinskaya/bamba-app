export type PostPermission =
  | 'ReadPost'
  | 'CreatePost'
  | 'UpdatePost'
  | 'DeletePost';

export type Permission = { name: PostPermission; condition: Condition };

export type Role = 'admin' | 'user';

export type RolePermission = { name: Role; permissions: Permission[] };

export type Condition = 'all' | 'owner';

export const RolePermissions = [
  {
    name: 'admin',
    permissions: [
      { name: 'ReadPost', condition: 'all' },
      { name: 'CreatePost', condition: 'all' },
      { name: 'UpdatePost', condition: 'all' },
      { name: 'DeletePost', condition: 'all' },
    ],
  },
  {
    name: 'user',
    permissions: [
      { name: 'ReadPost', condition: 'all' },
      { name: 'CreatePost', condition: 'owner' },
      { name: 'UpdatePost', condition: 'owner' },
      { name: 'DeletePost', condition: 'owner' },
    ],
  },
];
