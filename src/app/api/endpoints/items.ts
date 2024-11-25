import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

const PostSchema = z.object({
  id: z.string(),
  name: z.string(),
  issuer: z.string(),
  totalValueTaxes: z.number(),
  netValue: z.number(),
});

export const contract = c.router({
  createPost: {
    method: "POST",
    path: "/posts",
    responses: {
      201: PostSchema,
    },
    body: z.object({
      name: z.string(),
      issuer: z.string(),
      totalValueTaxes: z.number(),
      netValue: z.number(),
    }),
    summary: "Create a post",
  },
  getPost: {
    method: "GET",
    path: `/posts/:id`,
    responses: {
      200: PostSchema.nullable(),
    },
    summary: "Get a post by id",
  },
});
