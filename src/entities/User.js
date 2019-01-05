module.exports = {
  name: 'User',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    password: {
      type: 'varchar',
    },
    name: {
      type: 'varchar',
    },
    occupation: {
      type: 'varchar',
    },
    email: {
      type: 'varchar',
    },
  },
};
