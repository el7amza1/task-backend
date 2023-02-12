import { Router } from "express";
import User from "../Schema/user";

const userRouter = Router();

//  get all users
userRouter.get("/users", async (req, res) => {
  let user = await User.find();
  res.send({ data: user });
});

// get user 
userRouter.get(`/user`, async (req, res) => {
  try {
    // const { userName, password } = req.body;
    // if (!userName || !password) return res.status(404).send("missing data");
    // let user = await User.findOne({
    //   userName: req.body.userName,
    //   password: req.body.password,
    // });
    let user = await User.find()
    res.send({ data: user });
  } catch (error) {}
});

//  create new user
userRouter.post("/user/new", async (req, res) => {
  try {
    const { userName, password } = req.body;

      // Check not to forget data
    if (!userName || !password) return res.status(404).send("missing data");

    // for test DB
    // const user = new User({
    //   id : "1",
    //   userName:"hamza1",
    //   password:"1231"
    // })
    // user.save().then( (re)=>{
    //   console.log(re);

    // })
    const user = User.create({
      userName,
      password,
    });
    if (!user) return res.status(404).send("user not found");

    (await user).save();
    res.send({ user });
  } catch (error) {
    res.json({ msg: `error :${error}` });
  }
});

export default userRouter;
