"use client";
import prisma from "@/prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";

const MyListingPage = () => {
  const { status, data: session } = useSession();

  const { data } = useQuery({
    queryKey: ["mylisting"],
    queryFn: () => axios.get("/api/jobs/mylisting").then((res) => res.data),
  });

  console.log(data);

  return <div>MyListingPage</div>;
};
export default MyListingPage;
