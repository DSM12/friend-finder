// Should include 2 routes: A GET Route to "/survey" which should display the survey page.
app.get("/survey", function(req, res) {
    res.render("sur", { sur: survey });
  });


// & A default, catch-all route that leads to "home.html" which displays the home page.