import { prisma } from "./lib/prisma";
import app from "./app";


async function main() {

    try {
        await prisma.$connect();
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    } catch (error) {
        prisma.$disconnect();
        console.error("Error connecting to the database", error);
        process.exit(1);
    }

}

main();