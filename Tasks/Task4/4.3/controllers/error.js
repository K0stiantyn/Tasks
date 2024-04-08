const getNotFoundPage = (req, res) => {
  res.render('NotFound');
};

module.exports = {
  getNotFoundPage,
};
