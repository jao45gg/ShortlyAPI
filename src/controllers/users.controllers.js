import bcrypt from "bcrypt";
import { nanoid } from "nanoid";
import { checkEmail, registerNewToken, registerNewUser } from "../repositories/users.repository.js";

export async function signUp(req, res) {
    try {
        const { name, email, password, confirmPassword } = req.body;
        if (password !== confirmPassword) return res.sendStatus(422);

        const isEmailValid = await checkEmail(email);
        if (isEmailValid.rowCount > 0) return res.sendStatus(409);

        const user = {
            name,
            email,
            password: bcrypt.hashSync(password, 10)
        }

        await registerNewUser(user);

        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function signIn(req, res) {
    try {
        const { email, password } = req.body;

        const user = await checkEmail(email);
        if (user.rowCount <= 0) return res.sendStatus(401);
        const correctPassword = bcrypt.compareSync(password, user.rows[0].password);
        if (!correctPassword) return res.sendStatus(401);

        const session = {
            token: nanoid(),
            userId: user.rows[0].id
        }
        await registerNewToken(session);

        res.send({ token: session.token });
    } catch (err) {
        res.status(500).send(err.message);
    }
}