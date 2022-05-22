import express from 'express'
import messageController from './controllers/message'
import enqueteController from './controllers/enquete'
import {createConnection} from 'typeorm'

import Enquete from './models/Enquete'//この行を追加

const app: express.Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/messages", messageController)
app.use("/api/enquetes", enqueteController)//この行を追加
app.use("/", express.static(__dirname + "/public"))

!async function initialize(){
    await createConnection({
        type: "postgres",
        url: process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/postgres",
        synchronize: true,
        entities: [
            Enquete,
        ],
        extra: {
            ssl: (!!process.env.DATABASE_SSL) ? {
                rejectUnauthorized: false,
            } : false,
        }
    });
    // 3000番ポートでAPIサーバ起動
    app.listen(3000, () => {
        console.log('ポート3000番で起動しましたよ！')
    })
}()//この行を追加