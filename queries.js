const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


async function AddUser(username, Score) {
    const user = await prisma.scores.create({
        data: {
            username, Score
        }

    })
}

async function Get() {
    const users = await prisma.scores.findMany()
    return users;
}

module.exports = {
    Get, AddUser
}