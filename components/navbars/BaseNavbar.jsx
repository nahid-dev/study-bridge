import Container from "@/components/Container";
import React from "react";
import MainLogo from "../MainLogo";
import { Button } from "../ui/button";
import Link from "next/link";

const BaseNavbar = () => {
  return (
    <div className="bg-gray-100">
      <Container>
        <div className="py-3 flex items-center justify-between">
          <div>
            <MainLogo />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button size="lg">Sign Up</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BaseNavbar;
