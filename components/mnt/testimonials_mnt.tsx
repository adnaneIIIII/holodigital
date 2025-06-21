"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    avatar: "/test1.jpeg",
    quote:
      "Thank you for sending me the subscription details so quickly. I have entered all details in IPTV Smarters and I must say how very quick the channels are opening. Only looked at a few so far.",
    name: "Sarah Johnson",
    role: "USA",
    rating: 5,
  },
  {
    id: 2,
    avatar: "/test3.jpeg",
    quote:
      "I took a 12-month subscription. Been excellent. Would recommend. 👍",
    name: "Michael Chen",
    role: "USA",
    rating: 5,
  },
  {
    id: 3,
    avatar: "/test2.jpeg",
    quote:
      "I took out a 6-month subscription yesterday. Been excellent so far. Very fast and faultless streams. Loads of VOD content as well.",
    name: "Jessica Martinez",
    role: "Canada",
    rating: 5,
  },
];

// const testimonials = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     role: "Product Manager",
//     company: "TechCorp",
//     content:
//       "This product has completely transformed how we work. The team collaboration features are outstanding and have improved our productivity by 300%.",
//     avatar: "/placeholder.svg?height=40&width=40",
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     role: "CEO",
//     company: "StartupXYZ",
//     content:
//       "Incredible value for money. The customer support is responsive and the features keep getting better with each update.",
//     avatar: "/placeholder.svg?height=40&width=40",
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: "Emily Rodriguez",
//     role: "Designer",
//     company: "Creative Studio",
//     content:
//       "The user interface is intuitive and beautiful. It's rare to find a tool that's both powerful and easy to use.",
//     avatar: "/placeholder.svg?height=40&width=40",
//     rating: 5,
//   },
//   {
//     id: 4,
//     name: "David Thompson",
//     role: "Developer",
//     company: "DevTeam Inc",
//     content: "Great API documentation and seamless integration. This has saved us countless hours of development time.",
//     avatar: "/placeholder.svg?height=40&width=40",
//     rating: 5,
//   },
//   {
//     id: 5,
//     name: "Lisa Wang",
//     role: "Marketing Director",
//     company: "GrowthCo",
//     content:
//       "The analytics and reporting features are top-notch. We can now make data-driven decisions with confidence.",
//     avatar: "/placeholder.svg?height=40&width=40",
//     rating: 5,
//   },
//   {
//     id: 6,
//     name: "James Wilson",
//     role: "CTO",
//     company: "InnovateLab",
//     content: "Scalable, reliable, and secure. Everything we needed for our enterprise-level requirements.",
//     avatar: "/placeholder.svg?height=40&width=40",
//     rating: 5,
//   },
// ]

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <Card className="w-full max-w-md mx-auto mb-6  shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage
              src={testimonial.avatar || "/placeholder.svg"}
              alt={testimonial.name}
            />
            <AvatarFallback>
              {testimonial.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold  0">{testimonial.name}</h4>
          </div>
        </div>
        <div className="flex mb-3">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className=" leading-relaxed">{testimonial.quote}</p>
      </CardContent>
    </Card>
  );
}

export default function Component() {
  return (
    <div className=" py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what real customers have to
            say about their experience.
          </p>
        </div>
      
        <div className="relative h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <div className="animate-scroll-up">
              {/* First set of testimonials */}
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={`first-${testimonial.id}`}
                  testimonial={testimonial}
                />
              ))}
              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={`second-${testimonial.id}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>

          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/90 to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/90 to-transparent pointer-events-none z-10" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-scroll-up {
          animation: scroll-up 30s linear infinite;
        }

        .animate-scroll-up:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
