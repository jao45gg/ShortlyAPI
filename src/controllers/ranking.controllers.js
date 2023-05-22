import { getRanking } from "../repositories/users.repository.js"

export async function getRank(req, res) {
    try {
        const rank = await getRanking();
        res.send(rank.rows);
    } catch (err) {
        res.status(500).send(err.messsage);
    }
}