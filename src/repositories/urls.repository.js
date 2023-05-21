import db from "../database/database.connection.js";

export async function newShortUrl(shortUrl, url, id) {
    return db.query(`INSERT INTO "links" ("shortUrl", url, "userId") VALUES ($1, $2, $3)`, [shortUrl, url, id]);
}

export async function getShort(shortUrl) {
    return db.query(`SELECT id, "shortUrl" FROM "links" WHERE "shortUrl"=$1`, [shortUrl]);
}