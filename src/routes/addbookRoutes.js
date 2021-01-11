const express= require('express');

const addbookRouter = express.Router();

function router(nav)
{

addbookRouter.get('/',function(req,res)

{
    res.render("addbook",
    {
        nav
    }); 
});

addbookRouter.get('/add',function(req,res)
{
    res.send("hello I'm added");
})

return addbookRouter;

}
module.exports=router;