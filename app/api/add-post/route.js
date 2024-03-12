import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

async function creatPost() {
  await prisma.create.post({
    data: {
      title: "Test title",
      content: "This is a content for best title",
    },
  });
}

export async function POST(req) {
  const res = await req.json();
  const { title, content } = res;

  const result = await prisma.post.create({
    data: {
      title,
      content,
      published: true,
      author: {
        create: {
          name: "Jack",
        },
      },
    },
  });

  return NextResponse.json({ data: result });
}
