import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Future of IPTV: 4K Streaming and Beyond",
    excerpt:
      "Discover how 4K streaming technology is revolutionizing the IPTV industry and what it means for viewers worldwide.",
    image: "/placeholder.svg?height=240&width=400",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "Technology",
  },
  {
    id: 2,
    title: "Top 10 IPTV Features Every User Should Know",
    excerpt:
      "Explore the essential features that make IPTV services stand out from traditional cable and satellite TV options.",
    image: "/placeholder.svg?height=240&width=400",
    date: "Dec 12, 2024",
    readTime: "7 min read",
    category: "Guide",
  },
  {
    id: 3,
    title: "Setting Up Your Perfect IPTV Home Theater",
    excerpt:
      "Learn how to optimize your home entertainment setup for the best IPTV viewing experience with our comprehensive guide.",
    image: "/placeholder.svg?height=240&width=400",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    category: "Setup",
  },
  {
    id: 4,
    title: "IPTV vs Traditional Cable: A Complete Comparison",
    excerpt:
      "Compare the benefits, costs, and features of IPTV services against traditional cable TV to make an informed decision.",
    image: "/placeholder.svg?height=240&width=400",
    date: "Dec 8, 2024",
    readTime: "8 min read",
    category: "Comparison",
  },
  {
    id: 5,
    title: "Troubleshooting Common IPTV Issues",
    excerpt:
      "Quick solutions to the most common IPTV problems including buffering, connection issues, and quality problems.",
    image: "/placeholder.svg?height=240&width=400",
    date: "Dec 5, 2024",
    readTime: "4 min read",
    category: "Support",
  },
  {
    id: 6,
    title: "The Best IPTV Apps for Smart TVs in 2024",
    excerpt:
      "Discover the top-rated IPTV applications that work seamlessly with your smart TV for an enhanced viewing experience.",
    image: "/placeholder.svg?height=240&width=400",
    date: "Dec 3, 2024",
    readTime: "6 min read",
    category: "Apps",
  },
];

type BlogItem = {
  id: string;
  title: string;
  content: string;
  category: string;
  image: string;
  createdAt: Date;
};

export default function BlogPost({ pos }: { pos: BlogItem[] }) {
  return (
    <section className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest Blog Posts
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Stay updated with the latest IPTV trends, guides, and industry
            insights
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(pos) && pos.length > 0 ? (
            pos.map((post) => (
              <Card
                key={post.id}
                className=" border-gray-700 overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={240}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.createdAt.toDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.createdAt.toDateString()}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                  <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post?.content || "" }}
              />
                  </p>

                  <Button
                    variant="ghost"
                    className="text-orange-400 hover:text-white hover:bg-orange-500 transition-all duration-300  h-auto  font-semibold group/btn asChild"
                  >
                    <Link
                      className="flex items-center"
                      href={`/blog/${post?.id}`}
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center">
              No blog posts found.
            </p>
          )}
        </div>

        {/* View All Button */}
       
      </div>
    </section>
  );
}
