"use client";
import APIKit from "@/common/helpers/APIKit";
import { formatDuration } from "@/common/helpers/UtilKit";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Clock } from "lucide-react";
import { inject, observer } from "mobx-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyCourses = ({ meStore }) => {
  const { me } = meStore;
  const { data, isLoading } = useQuery({
    queryKey: ["my-courses"],
    queryFn: () => APIKit.student.getMyCourses().then(({ data }) => data),
  });

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div className="my-10">
      <Container>
        <div className="flex flex-col gap-5">
          {data?.map((item) => (
            <div
              key={item?.uid}
              className="flex items-center justify-between p-3 border rounded-md bg-gray-100 max-w-3xl"
            >
              <div>
                <div className="flex items-center justify-start gap-3">
                  <Image
                    src={item?.course?.image_url}
                    alt="Product Image"
                    width={360}
                    height={360}
                    className="size-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-medium">
                      {item?.course?.title}
                    </h4>
                    <p>{item?.course?.coursedetail?.description}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <Clock />
                      <span>
                        {item?.course?.duration
                          ? formatDuration(
                              item?.course?.total_duration || "00:00:00"
                            )
                          : "0h"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Button size="lg" asChild>
                  <Link href={`/dashboard/my-courses/${item?.course?.uid}`}>
                    Continue Course
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default inject("meStore")(observer(MyCourses));
