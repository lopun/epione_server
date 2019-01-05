module.exports = function(app, User) {
  app.get("/", function(req, res) {
    res.render("index.html");
  });

  app.get("/login", function(req, res) {
    res.render("login.html");
  });

  app.post("/login", async (req, res) => {
    console.log(req.body);
    let resultJson = req.body;

    let foundUser = await User.findOne({ email: resultJson.email });

    if (foundUser) {
      if ((foundUser.password = resultJson.password)) {
        res.json({
          ok: true,
          id: foundUser.id
        });
      }
      return;
    }
    res.json({
      ok: false,
      id: null
    });
  });

  app.post("/signup", async (req, res) => {
    let resultJson = req.body;

    let foundUser = await User.findOne({ email: resultJson.email });

    if (foundUser) {
      res.json({
        ok: false,
        error: "You should log in instead."
      });
    } else {
      await User.save({
        email: resultJson.email,
        name: resultJson.name,
        password: resultJson.password,
        occupation: resultJson.occupation
      });

      res.json({
        ok: true,
        error: null
      });
    }
  });
};
