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

    console.log(foundUser.password, resultJson.password);

    if (foundUser) {
      if (foundUser.password === resultJson.password) {
        res.json({
          ok: true,
          error: null,
          id: foundUser.id
        });
      } else {
        res.json({
          ok: false,
          error: "Password is wrong!",
          id: null
        });
      }
    } else {
      res.json({
        ok: false,
        error: "User does not exist.",
        id: null
      });
    }
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
