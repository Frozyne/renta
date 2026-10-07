import { config } from "dotenv";

config({
    path: `.env.${process.env.NODE_ENV || 'development'}.local`, 
    quiet: true
})

export const {PORT, NODE_ENV, CLIENT_URL, MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_URI} = process.env