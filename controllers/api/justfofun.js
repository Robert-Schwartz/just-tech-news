// ========= /api/users/:id

/*
Async practice:

1. add async before (req,res)
2.


*/

router.get('/:id', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            // selecting what I want to see
            attributes: { exclude: ['password'] },
            where: {
                id: req.params.id
            },
            include: [
                // joining Post to User table, then Comment to Users, the Post to Votes
                {
                    model: Post,
                    attributes: ['id', 'title', 'post_url', 'created_at']
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'created_at'],
                    include: {
                        model: Post,
                        attributes: ['title']
                    }
                },
                {
                    model: Post,
                    attributes: ['title'],
                    through: Vote,
                    as: 'voted_posts'
                    // as is creating a new alias
                }
            ]
        })
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});