import dotenv from "dotenv"
dotenv.config()

import express, { Application, Router } from "express"
import rateLimit from "express-rate-limit"
import * as helmet from "helmet"
import * as http from "http"
import { searchRoute, crawlerRoute, detailRoute } from "./api"

const mount = async (app: Application) => {
  const route = Router();

  route.use('/search', searchRoute)
  route.use('/detail', detailRoute)
  route.use('/crawler', crawlerRoute)

  app.use(express.json())
  app.use(route)

  //! Security
  app.use(helmet.dnsPrefetchControl())
  app.use(helmet.expectCt())
  app.use(helmet.frameguard())
  app.use(helmet.hidePoweredBy())
  app.use(helmet.hsts())
  app.use(helmet.ieNoOpen())
  app.use(helmet.noSniff())
  app.use(helmet.permittedCrossDomainPolicies())
  app.use(helmet.referrerPolicy())
  app.use(helmet.xssFilter())

  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 1000, // limit each IP to 100 requests per windowMs
    })
  )

  app.set("trust proxy", 1)

  const httpServer = http.createServer(app)

  httpServer.listen(process.env.PORT)

  console.log(`[app] : http://localhost:${process.env.PORT}`)
};

mount(express())