import { nanoid } from "nanoid";
import { getShort, getShortById, getUrl, newShortUrl } from "../repositories/urls.repository.js";

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

export async function getUrlById(req, res) {
    try {
        const { id } = req.params;

        const url = await getShortById(id);
        if (url.rowCount <= 0) return res.sendStatus(404);

        res.send(url.rows[0]);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function openUrl(req, res) {
    try {
        const { shortUrl } = req.params;

        const url = await getUrl(shortUrl);
        if (url.rowCount <= 0) return res.sendStatus(404);

        res.redirect(url.rows[0].url);
    } catch (err) {
        res.status(500).send(err.message);
    }
}