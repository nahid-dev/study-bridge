import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyCourses = () => {
  return (
    <div className="my-10">
      <Container>
        <div>
          <div className="flex items-center justify-between p-3 border rounded-md bg-gray-100 max-w-3xl">
            <div>
              <div className="flex items-center justify-start gap-3">
                <Image
                  src="/images/products/product-1.jpg"
                  alt="Product Image"
                  width={360}
                  height={360}
                  className="size-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-medium">
                    Language Learning Tutorial
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <Clock />
                    <span>1h 30min</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Button size="lg" asChild>
                <Link href={`/dashboard/my-courses/${1}`}>Continue Course</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyCourses;
