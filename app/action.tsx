"use server";
import { parseWithZod } from "@conform-to/zod";
import { prisma } from "../lib/db";
import { contact, Purchase } from "../lib/ZodSchema";
import { redirect } from "next/navigation";

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
