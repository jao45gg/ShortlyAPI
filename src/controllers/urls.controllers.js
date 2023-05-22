import { nanoid } from "nanoid";
import { getShort, getShortById, getUrl, getUrlAndUserById, newShortUrl, deleteShorten, updateCountLink } from "../repositories/urls.repository.js";
import { updateCountUser } from "../repositories/users.repository.js";

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

        await updateCountLink(url.rows[0].id);
        await updateCountUser(url.rows[0].userId);

        res.redirect(url.rows[0].url);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function deleteUrl(req, res) {
    try {
        let { id } = req.params;

        const url = await getShortById(id);
        if (url.rowCount <= 0) return res.sendStatus(404);

        const data = await getUrlAndUserById(id);
        if (data.rowCount <= 0) return res.sendStatus(401);

        await deleteShorten(id);

        res.sendStatus(204);
    } catch (err) {
        res.status(500).send(err.message);
    }
}