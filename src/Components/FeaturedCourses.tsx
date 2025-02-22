'use client'
import Link from "next/link";

import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (c: Course) => c.isFeatured
  );
  return (
    <div className="py-12 bg-gray-800">
      <div>
        <div className="text-center">
          <h2 className="text-base text-xl text-teal-500 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn with the best
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course, key: number) => (
            <div key={key} className="flex justify-center">

              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {course.title}
        </p>

        <p className="text-sm mb-4 text-neutral-600 dark:text-neutral-400">
          {course.description}
        </p>

        <span className="bg-zinc-700   rounded-full text-base px-2 py-0  text-white">
           {course.price}
          </span>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-x-neutral-600 text-neutral-700 bg-white hover:bg-gray-200 transition duration-200"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
