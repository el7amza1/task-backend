import express ,{urlencoded,json} from "express"
import { config } from "dotenv"
import cors from "cors"
import morgan from "morgan"
import helmet from "helmet"
import { Connection } from "./db/connection"
import userRouter from "./routes/user.routes"
import historyRouter from "./routes/history.routes"


const app = express();

config()

app.use(cors())

app.use(morgan("dev"))

app.use(helmet())

app.use(json())

app.use(urlencoded({extended:false}))

app.use('/api', userRouter)
app.use("/api",historyRouter)

app.use('*',(req,res)=>{
    res.status(404).json({error:'Api is not found!'})
})

const port=process.env.PORT||8000

app.listen(port,()=>{
    Connection(port)
})
