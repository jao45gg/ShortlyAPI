import { nanoid } from "nanoid";
import { getShort, newShortUrl } from "../repositories/urls.repository.js";

export async function shorten(req, res) {
    try {
        const { url } = req.body;
        const shortUrl = nanoid();

        await newShortUrl(shortUrl, url, res.locals.session.userId);

        const short = await getShort(shortUrl);
        res.status(201).send(short.rows[0]);
    } catch (err) {
        res.status(500).send(err.message);
    }
}