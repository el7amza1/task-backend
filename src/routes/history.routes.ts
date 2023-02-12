import { Router } from "express";
import History from "../Schema/history";
import User from "../Schema/user";

const historyRouter = Router();

//  get all History
historyRouter.get("/history", async (req, res) => {
  let history = await History.find({userId:req.headers.token});
  res.send({ data: history });
});

//  create new History
historyRouter.post("/history/new", async (req, res) => {
  try {
    const {
      valid,
      local_format,
      intl_format,
      location,
      country,
      carrier,
      line_ype,
      userId,
    } = req.body;

    // Check not to forget data
    if (
      !valid ||
      !local_format ||
      !intl_format ||
      !location ||
      !country ||
      !carrier ||
      !line_ype ||
      !userId
    )
      return res.status(404).send("missing data");

    // create History with user created id
    const history = History.create({
      valid,
      local_format,
      intl_format,
      location,
      country,
      carrier,
      line_ype,
      userId,
    });
    if (!history) return res.status(404).send("history not found");

    (await history).save();
    res.send({ history });
  } catch (error) {
    res.json({ msg: `error :${error}` });
  }
});

export default historyRouter;


