"use server";
import { parseWithZod } from "@conform-to/zod";
import { prisma } from "../lib/db";
import { contact, Postschema, Purchase } from "../lib/ZodSchema";
import { notFound, redirect } from "next/navigation";

export async function ContactUs(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: contact,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await prisma.contact.create({
    data: {
      firstname: submission.value.firstname,
      lastname: submission.value.lastname,
      email: submission.value.email,
      phone: submission.value.phone,
      message: submission.value.message,
    },
  });

  return redirect("/");
}

export async function createorder(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: Purchase,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  try {
    await prisma.purchase.create({
      data: {
        firstname: submission.value.firstname,
        lastname: submission.value.lastname,
        email: submission.value.email,
        phone: submission.value.phone,
        productname: submission.value.productname,
        price: submission.value.price,
        country: submission.value.country,
      },
    });
  } catch (error) {
    console.log("error", error);
  }
}

export async function CreatePost(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: Postschema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  try {
    await prisma.post.create({
      data: {
        title: submission.value.title,
        content: submission.value.content,
        category: submission.value.category,
        image: submission.value.image,
      },
    });
  } catch (error) {
    console.log("error", error);
  }
}

export async function PostesASC() {
  const existingProducts = await prisma.post.findMany({
    orderBy: { id: "asc" }, // Replace "id" with the correct field name
  });

  return existingProducts; // Return the fetched products
}



export async function getPostbyid(productId: string) {
  try {
    const data = await prisma.post.findUnique({
      where: {
        id: productId,
      },
      select: {
        image: true,
        title: true,
        content: true,
        category: true,
        
      },
    });

    if (!data) {
      return notFound(); // Ensure `notFound` is imported from "next/navigation"
    }

    return data;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return null; // Handle errors gracefully
  }
}
