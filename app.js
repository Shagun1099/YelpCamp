var express          = require("express"),
    app              = express(),
    bodyParser       = require("body-parser"),
    mongoose         = require("mongoose"),
    Character        = require("./models/characters"),
    Comment          = require("./models/comment"),
	methodOverride   = require("method-override"),
	flash            = require("connect-flash"),
    seedDB           = require("./seeds"),
    passport         =require("passport"),
	LocalStrategy    =require("passport-local"),
	User             =require("./models/user"),
    middleware       = require("./middleware")
	
mongoose.connect('mongodb+srv://Shagun:7018825820@cluster0.d4ywp.mongodb.net/character?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));
    
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(flash());
app.use(express.static(__dirname + "/public"));
seedDB();

app.use(require("express-session")({
    secret: "Once again stiles wins to be the Hottest!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.get('/',function(req,res){
			res.render("landing");
});

app.get('/characters',function(req,res){
	Character.find({},function(err,allCharacters){
		if(err){
			console.log(err);
		}else{
	res.render("index",{characters : allCharacters});
		}
	});
});

app.post('/characters', middleware.isLoggedIn,function(req,res){
	var name=req.body.name;
	var image=req.body.image;
	var description =req.body.description;
	var author = {
        id: req.user._id,
        username: req.user.username
    }

	var newCharacter={name:name,image:image,description:description,author:author};
	Character.create(newCharacter,function(err,newlyCreatedChar){
		if(err){
			req.flash("error", err.message);
			console.log(err);
		}else{
			res.redirect('/characters');
		}
	});
});

app.get('/characters/new', middleware.isLoggedIn,function(req,res){
	res.render('new');
});

app.get('/characters/:id',function(req,res){
     Character.findById(req.params.id).populate("comments").exec(function(err,foundCharacter){
		if(err){
			console.log(err);
		}else{
			console.log(foundCharacter);
			res.render('show', {character:foundCharacter});
		}
	});
});

// EDIT CHARACTER ROUTE
app.get("/characters/:id/edit", middleware.isLoggedIn, function(req, res){
    Character.findById(req.params.id, function(err, foundCharacter){
        res.render("editCharacter", {character: foundCharacter});
    });
});

// UPDATE CHARACTER ROUTE
app.put("/characters/:id",middleware.isLoggedIn, function(req, res){
    // find and update the correct character
    Character.findByIdAndUpdate(req.params.id, req.body.character, function(err, updatedCharacter){
       if(err){
		   req.flash("error", err.message);
           res.redirect("/characters");
       } else {
           //redirect somewhere(show page)
		   req.flash("success", "Character successfully edited");
           res.redirect("/characters/" + req.params.id);
       }
    });
});

// DESTROY CHARACTER ROUTE
app.delete("/characters/:id",middleware.isLoggedIn, function(req, res){
   Character.findByIdAndRemove(req.params.id, function(err){
      if(err){
		  req.flash("error", err.message);
          res.redirect("/characters");
      } else {
		  req.flash("success", "Character successfully edited");
          res.redirect("/characters");
      }
   });
});


app.get("/characters/:id/comments/new",middleware.isLoggedIn, function(req, res){
    // find character by id
    Character.findById(req.params.id, function(err, character){
        if(err){
			req.flash("error", err.message);
            console.log(err);
        } else {
             res.render("newComment", {character: character});
        }
    })
});

app.post("/characters/:id/comments",middleware.isLoggedIn,function(req, res){
   //lookup characters using ID
   Character.findById(req.params.id, function(err, character){
       if(err){
           console.log(err);
		   req.flash("error", "Something went wrong");
           res.redirect("/characters");
       } else {
        Comment.create(req.body.comment, function(err, comment){
           if(err){
               console.log(err);
			   req.flash("error", "Something went wrong");
           } else {
                //add username and id to comment
               comment.author.id = req.user._id;
               comment.author.username = req.user.username;
               //save comment
               comment.save();
               character.comments.push(comment);
               character.save();
			   req.flash("success", "Successfully added comment");
               res.redirect('/characters/' + character._id);
           }
        });
       }
   });
   //create new comment
   //connect new comment to campground
   //redirect campground show page
});

// COMMENT EDIT ROUTE
app.get("/characters/:id/comments/:comment_id/edit", middleware.isLoggedIn, function(req, res){
   Comment.findById(req.params.comment_id, function(err, foundComment){
      if(err){
		  req.flash("error", err.message);
          res.redirect("back");
      } else {
        res.render("editComment", {character_id: req.params.id, comment: foundComment});
      }
   });
});

// COMMENT UPDATE
app.put("/characters/:id/comments/:comment_id", middleware.isLoggedIn, function(req, res){
   Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
      if(err){
		  req.flash("error", err.message);
          res.redirect("back");
		  console.log(err);
      } else {
          res.redirect("/characters/" + req.params.id );
      }
   });
});

// COMMENT DESTROY ROUTE
app.delete("/characters/:id/comments/:comment_id",middleware.isLoggedIn, function(req, res){
    //findByIdAndRemove
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
       if(err){
		   req.flash("error", err.message);
           res.redirect("back");
       } else {
		   req.flash("success", "Comment deleted");
           res.redirect("/characters/" + req.params.id);
       }
    });
});

app.get("/register", function(req, res){
   res.render("register"); 
});
//handle sign up logic
app.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
			req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
			req.flash("success", "Successfully signed In");
           res.redirect("/characters"); 
        });
    });
});

// show login form
app.get("/login", function(req, res){
   res.render("login"); 
});
// handling login logic
app.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/characters",
        failureRedirect: "/login"
    }), function(req, res){
});

// logic route
app.get("/logout", function(req, res){
   req.logout();
	req.flash("success", "Successfully Logged Out");
   res.redirect("/characters");
});



app.listen(process.env.PORT || 3000, process.env.IP, function() { 
  console.log('Server listening on port 3000'); 
  console.log('YelpCamp app is running');
});