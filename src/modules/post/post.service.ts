import { Post } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";


const createPost = async (data: Omit<Post, 'id' | 'createdAt' | 'updatedAt' | 'authorId'>, userId: string) => {
    
    console.log("Creating post with data:", data, "for userId:", userId);
    const result = await prisma.post.create({
        data: {
            ...data,
            authorId: userId
        }
    })

    console.log(result);
    return result;
}

export const postService = {
    createPost
}