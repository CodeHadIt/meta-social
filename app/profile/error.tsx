"use client";
import NotFoundCard from "@/components/cards/not-found";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-4 p-10">
      <NotFoundCard purpose="error" dataType="user" />
      <Button asChild>
        <Link href="/">Return to Homepage</Link>
      </Button>
    </section>
  );
};

export default Error;
