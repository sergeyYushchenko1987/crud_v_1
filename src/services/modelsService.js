exports.resultsIsEmpty = (results) => {
  if (results.length === 0) {
    return { status: 204, description: 'List is empty' };
  }
  return false;
};
