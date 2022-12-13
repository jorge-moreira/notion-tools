import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

const NotionClient = new Client({
    auth: process.env.NOTION_TOKEN,
});

export { NotionClient }