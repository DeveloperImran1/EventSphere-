'use client';
import React, { useState } from 'react'; // Import React and useState
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Peter Adams",
    avatar: "https://i.ibb.co.com/hyZL9gH/pexels-linkedin-2182970.jpg",
    content:
      "Christmas is a wonderful time of the year and your team just made it even better! Me and my family left the entertainment center with the best impressions and memories.",
  },
  {
    name: "Sarah Johnson",
    avatar: "https://i.ibb.co.com/zQDLxpK/pexels-olly-842811.jpg",
    content:
      "I was blown away by the quality of service. The staff went above and beyond to ensure we had a fantastic time. Highly recommended!",
  },
  {
    name: "Mike Thompson",
    avatar: "https://i.ibb.co.com/0M0cZSm/pexels-chloekalaartist-1043473.jpg",
    content:
      "An unforgettable experience! The attention to detail and the friendly atmosphere made our visit truly special. We'll definitely be coming back.",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with the middle testimonial

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className='md:m-40  p-2 md:flex items-center gap-16  ' >




      <div className='md:p-6  md:w-1/2 ' >
        <Card >
          <CardContent className="p-10">
            <h2 className="text-3xl font-extrabold font-serif mb-6 ">What People Say</h2>
            <div className="relative">
              <div className="flex items-start space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                
                </Avatar>
                <div className="flex-1  ">
                  <p className="text-lg  mb-4">{testimonials[currentIndex].content}</p>
                  <p className="font-semibold">{testimonials[currentIndex].name}</p>
                </div>
              </div>
              <div className="flex justify-center items-center  mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-red-500" : "bg-gray-300"
                      }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                className="absolute  -translate-y-1/2 left-0 -ml-4 rounded-full bg-red-400 text-white hover:bg-red-600 hover:text-white border-none shadow-md"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute   -translate-y-1/2 right-0 -mr-4 rounded-full bg-red-400 text-white hover:bg-red-600 hover:text-white border-none shadow-md"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='md:w-1/2  grid grid-cols-2 gap-8   '  >
        <img src="https://i.ibb.co/pdKXjSQ/concertgoers-watching-majestic-concert-many-spotlight-people-see-music-show-crowd-ambience-1235831-9.jpg"
          alt="Christmas Event 1"  className='rounded-xl    '

        />

        <img src="https://i.ibb.co.com/JKqLxzx/pexels-pixabay-433452.jpg"
          alt="Christmas Event 2"  className='rounded-xl'
        />
        <img src="https://i.ibb.co.com/HhgGKX8/pexels-asadphoto-169198.jpg"
          alt="Christmas Event 3"  className='rounded-xl'
        />

        <img src="https://i.ibb.co.com/bHqhHrR/pexels-teddy-2263436.jpg"
          alt="Christmas Event 4"  className='rounded-xl'
        />

      </div>


    </div>
  );
}