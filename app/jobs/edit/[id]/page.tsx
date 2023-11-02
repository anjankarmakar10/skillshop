import prisma from "@/prisma/client";
import JobForm from "../../JobForm";

interface Props {
  params: { id: string };
}

const JobEditPage = async ({ params: { id } }: Props) => {
  const job = await prisma.jobPost.findUnique({
    where: { id },
  });

  if (!job) return null;

  return (
    <section>
      <header className="mb-6">
        <h1 className="font-bold text-2xl md:text-4xl">Edit Listing</h1>
      </header>
      <JobForm job={job} />
    </section>
  );
};
export default JobEditPage;
