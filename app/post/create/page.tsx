"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";
import { SubmiteBotton } from "@/components/submitebutton";

import { ChevronLeft, XIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";

import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

import { UploadDropzone } from "@/lib/uploadthing";
import { Postschema } from "@/lib/ZodSchema";
import { CreatePost } from "@/app/action";
import { useFormState } from "react-dom";
import Tiptap from "@/components/RichTextEditor/Tiptap";

export default function Create() {
  const [content, setContent] = useState<string>("");

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    const data = {
      id: uuidv4(),
      content: newContent,
    };
    console.log("Content Updated:", data);
  };


  const [images, setImages] = useState<string[]>([]);

  const [lastResult, action] = useFormState(CreatePost, undefined);
  const [from, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: Postschema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  const handleDelete = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };



  // const handleContentChange = (e: any) => {
  //   e.preventDefault();
  //   const data = {
  //     id: uuidv4(),
  //     content: Content,
  //   };
  //   console.log(data);
  // };
  return (
    ///////////////////////////////////
    <div className="p-4">
      <div className="flex items-center gap-4 ">
        <Button variant={"outline"} size={"icon"} asChild>
          <Link href={"/admin/products"}>
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-semi-bold tracking-tighter">New Product</h1>
      </div>
      <form className="" id={from.id} onSubmit={from.onSubmit} action={action}>
        <div className="md:flex gap-4 justify-center">
          <div className="md:w-[60%]">
            <Card className="mt-5 mb-4">
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
                <CardDescription>Enter your Product details</CardDescription>
              </CardHeader>
            </Card>
            <Card className="mt-5 mb-4">
              <CardContent className="pt-4">
                <div className="flex flex-col gap-6">
                  <div className=" md:flex-col">
                    <Label>Product Name</Label>
                    <Input
                      key={fields.title.key}
                      name={fields.title.name}
                      defaultValue={fields.title.initialValue}
                      type="text"
                      className="w-full mt-3"
                      placeholder="Product Name"
                    />
                    <p className="text-red-500">{fields.title.errors}</p>
                  </div>
                  <div className=" flex-col gap-3 ">
                    <Label>Description</Label>
                    <Textarea
                       value={content} // Controlled input
                      onChange={(e) => {
                        const newContent = e.target.value; // Get the input's value
                        setContent(newContent); // Update local state
                        fields.content.value = newContent; // Sync with the form's field
                      }}
                      key={fields.content.key}
                      name={fields.content.name}
                      placeholder="Product Description"
                      className=""
                    />
                    <p className="text-red-500">{fields.content.errors}</p>
                  </div>
                  <div className="">
                    <Tiptap
                      content={content}
                      onChange={handleContentChange}
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <Label>Image</Label>
                    <input
                      type="hidden"
                      value={images}
                      key={fields.image.key}
                      name={fields.image.name}
                      defaultValue={fields.image.initialValue as any}
                    />
                    {images.length > 0 ? (
                      <div className="flex gap-5">
                        {images.map((image, index) => (
                          <div
                            key={index}
                            className="relative w-[100px] h-[100px]"
                          >
                            <Image
                              height={100}
                              width={100}
                              src={image}
                              alt={"product image"}
                              className="w-full h-full object-cover rounded-lg border"
                            />
                            <button
                              onClick={() => handleDelete(index)}
                              type="button"
                              className="absolute -top-1 -right-1 p-1 rounded-lg bg-red-500 text-white"
                            >
                              <XIcon className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <UploadDropzone
                        endpoint="imageUploader"
                        className=""
                        onClientUploadComplete={(res) => {
                          setImages(res.map((r) => r.url));
                        }}
                        onUploadError={(error: Error) => {
                          alert("Something went wrong");
                        }}
                      />
                    )}
                    <p className="text-red-500">{fields.image.errors}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-5 md:w-[25%]">
            <Card className="mb-2">
              <CardContent className="pt-4">
                <div className="flex flex-col gap-3">
                  <Label>Category</Label>
                  <Input
                    type="text"
                    className="w-full mt-3"
                    placeholder="Product Name"
                    key={fields.category.key}
                    name={fields.category.name}
                    defaultValue={fields.category.initialValue}
                  />
                  <p className="text-red-500">{fields.category.errors}</p>
                </div>

                <div className="flex justify-start gap-3 mt-4">
                  <SubmiteBotton text="Create Product" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
