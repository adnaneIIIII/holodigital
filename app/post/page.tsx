import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PostesASC } from "../action";


export default async function page() {
  const post = await PostesASC();
  console.log(post);
  return (
    <>
      <div className="p-4">
        <div className="flex items-center justify-start">
          <Button asChild className="flex items-center gap-x-2 ">
            <Link href="./post/create" className="flex items-center">
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Add Post</span>
            </Link>
          </Button>
        </div>
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Blog</CardTitle>
            <CardDescription>View all your Post</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Image</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {post.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Image
                        src={item.image[0]}
                        width={100}
                        height={100}
                        alt="rounded-md object-cover h-16 w-16"
                      />
                    </TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.createdAt.toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">
                      {/* <div className="flex h-5 items-center space-x-4 text-sm justify-end">
                        <Delet productid={item.id} />
                        <Separator orientation="vertical" />
                        <Edite data={item} />
                      </div> */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      {/* <div className="pt-[36rem]">  </div> */}
    </>
  );
}
