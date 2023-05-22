import db from "../database/database.connection.js";

export async function newShortUrl(shortUrl, url, id) {
    return db.query(`INSERT INTO "links" ("shortUrl", url, "userId") VALUES ($1, $2, $3)`, [shortUrl, url, id]);
}

export async function getShort(shortUrl) {
    return db.query(`SELECT id, "shortUrl" FROM "links" WHERE "shortUrl"=$1`, [shortUrl]);
}

export async function getUrl(shortUrl) {
    return db.query(`SELECT * FROM "links" WHERE "shortUrl"=$1`, [shortUrl]);
}

export async function getShortById(id) {
    return db.query(`SELECT id, "shortUrl", url FROM "links" WHERE id=$1`, [id]);
}

export async function deleteShorten(id) {
    return db.query(`DELETE FROM "links" WHERE id=$1`, [id]);
}

export async function getShortenedUrl(userId) {
    return db.query(`SELECT id, "shortUrl", url, "visitCount" FROM "links" WHERE "userId"=$1`, [userId]);
}

export async function updateCountLink(id) {
    return db.query(`UPDATE "links" SET "visitCount"="visitCount"+1 WHERE id=$1`, [id]);
}