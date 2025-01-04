import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="py-5">
      <SectionHeader
        title="Speaking English Course"
        helperText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quisquam, facilis reprehenderit omnis iste reiciendis."
        customClassName="items-start"
      />
      <div className="mt-8">
        <Container>
          <div className="mx-auto max-w-3xl bg-gray-100 shadow">
            {/* question & time*/}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h4 className="text-xl font-semibold">
                This is the quiz question
              </h4>
              <p>Time left: 10:00</p>
            </div>
            {/* options */}
            <div className="p-4">
              <ul>
                <li className="p-2 border-b border-gray-200 text-lg font-medium flex items-center justify-start gap-3">
                  <input className="size-5" type="radio" />
                  <span>Option 1</span>
                </li>
                <li className="p-2 border-b border-gray-200 text-lg font-medium flex items-center justify-start gap-3">
                  <input className="size-5" type="radio" />
                  <span>Option 2</span>
                </li>
                <li className="p-2 border-b border-gray-200 text-lg font-medium flex items-center justify-start gap-3">
                  <input className="size-5" type="radio" />
                  <span>Option 3</span>
                </li>
                <li className="p-2 border-b border-gray-200 text-lg font-medium flex items-center justify-start gap-3">
                  <input className="size-5" type="radio" />
                  <span>Option 4</span>
                </li>
              </ul>
            </div>
            {/* submit button */}
            <div className="p-4 text-right">
              <Button className="bg-primary text-white p-2 rounded-md">
                Next Question
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default DashboardPage;
