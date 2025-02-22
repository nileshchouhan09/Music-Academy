"use client"
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/Components/ui/3d-card";
import Link from "next/link";
import courseData from "@/data/music_courses.json"

function page() {
  return (
    <div className="minh-screen bg-black py-12 pt-36">

      <h1 className="text-lg md:text-5xl text-center font-sans font-bold mb-8 text-white ">All Courses ({courseData.courses.length})</h1>
        <div className="flex flex-wrap justify-center">

          {
            courseData.courses.map((i)=>(
              <CardContainer className="inter-var mx-5">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                 {i.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                 {i.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={i.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
               
                </div>
              </CardBody>
            </CardContainer>
            ))
          }

        </div>
    </div>
  )
}

export default page
