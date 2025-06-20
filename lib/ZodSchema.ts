import { z } from "zod";

export const Purchase = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  productname: z.string(),
  price: z.number(),

  country: z.enum([
    "United_States",
    "Canada",
    "United_Kingdom",
    "Australia",
    "Philippines",
    "Other",
  ]),
});

export const contact = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string(),
  phone: z.string(),
  message: z.string(),
});

export const Postschema = z.object({
  title: z.string().min(1, "title  is required"),
  content: z.string().min(1, "content is required"),
  image: z.string().min(1, "image number is required"),
  category: z.string().min(1, "category name is required"),
});
