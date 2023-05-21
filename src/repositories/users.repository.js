import db from "../database/database.connection.js";

export async function checkToken(token) {
    return db.query(`SELECT * FROM "tokens" WHERE token=$1`, [token]);
}

export async function registerNewUser(user) {

    const { name, email, password } = user;

    return db.query(`INSERT INTO "users" (name, email, password) VALUES ($1, $2, $3)`, [name, email, password]);
}

export async function checkEmail(email) {
    return db.query(`SELECT * FROM "users" WHERE email=$1`, [email]);
}

export async function registerNewToken(session) {

    const { token, userId } = session;

    return db.query(`INSERT INTO "tokens" ("userId", token) VALUES ($1, $2)`, [userId, token]);
}

export async function getUserById(id) {
    return db.query(`SELECT * FROM "users" WHERE id=$1`, [id]);
}

export async function updateCountUser(id) {
    return db.query(`UPDATE "users" SET "visitCount"="visitCount"+1 WHERE id=$1`, [id]);
}