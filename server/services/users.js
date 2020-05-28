export const getAll = () => {
  return Promise.resolve([
    {
      id: 1,
      name: 'John Wick',
    },
    {
      id: 2,
      name: 'Bruce Wayne',
    },
  ]);
};

export const saveAll = () => {
  return Promise.resolve([
    {
      id: 1,
      name: 'John Wick - save',
    },
    {
      id: 2,
      name: 'Bruce Wayne - save',
    },
  ]);
};
