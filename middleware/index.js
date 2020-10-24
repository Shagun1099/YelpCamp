var Character = require("../models/characters");
var Comment = require("../models/comment");

// all the middleare goes here
var middlewareObj = {};

middlewareObj.checkCharacterOwnership = function(req, res, next) {
 if(req.isAuthenticated()){
        Character.findById(req.params.id, function(err, foundCharacter){
           if(err){
               res.redirect("back");
           }  else {
               // does user own the campground?
            if(foundCharacter.author.id==req.user._id) {
                next();
            } else {
                res.redirect("back");
            }
           }
        });
    } else {
        res.redirect("back");
    }
}

middlewareObj.checkCommentOwnership = function(req, res, next) {
 if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
           if(err){
               res.redirect("back");
			   console.log(err);
           }  else {
               // does user own the comment?
            if(foundComment.author.id==req.user._id) {
                next();
            } else {
                res.redirect("back");
				console.log(err);
            }
           }
        });
    } else {
        res.redirect("back");
		console.log(err);
    }
}

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
	req.flash("error","You need to be Login first to do that!!!!!!");
    res.redirect("/login");
}

module.exports = middlewareObj;