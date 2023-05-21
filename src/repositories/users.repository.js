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