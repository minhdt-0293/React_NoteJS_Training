module.exports = (name) => {
  return async context => {
    const {data} = context;

    if(!data.email) {
      throw new Error('Ahihi');
    }

    return context;
  };
};
