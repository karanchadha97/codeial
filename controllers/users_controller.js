module.exports.profile = function(req,res){
    return res.end('<h1>User Profile</h1>');
}
module.exports.create = function(req,res){
    return res.end('<h1>User Created</h1>');
}