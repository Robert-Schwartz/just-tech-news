// import all models
const Post = require('./Post');
const User = require('./User');
const Vote = require('./Vote');
const Comment = require('./Comment');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
<<<<<<< HEAD
    foreignKey: 'user_id'
=======
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
>>>>>>> develop
});

User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
<<<<<<< HEAD
    foreignKey: 'user_id'
=======

    foreignKey: 'user_id',
    onDelete: 'SET NULL'
>>>>>>> develop
});

Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
<<<<<<< HEAD
    foreignKey: 'post_id'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
    foreignKey: 'post_id'
=======
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Vote.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
>>>>>>> develop
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
<<<<<<< HEAD
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
=======
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
>>>>>>> develop
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Vote, Comment };
