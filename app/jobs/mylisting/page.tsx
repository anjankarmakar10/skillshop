import JobCard from "@/components/JobCard";
import JobListingGrid from "@/components/JobListingGrid";
import { JobListingFullDialog } from "../JobListingFullDialog";
import DeleteJobButton from "@/components/DeleteJobButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

const MyListingPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) return null;

  const jobs = await prisma.jobPost.findMany({
    where: { userEmail: session?.user?.email },
  });

  return (
    <section>
      <header className="flex items-center justify-between">
        <h1 className="font-bold text-2xl md:text-4xl ">My Listing</h1>
        <Link href="/jobs/new">
          <Button size="sm" variant="outline">
            Create Listing
          </Button>
        </Link>
      </header>

      <JobListingGrid>
        {jobs?.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            footerBtns={
              <>
                <DeleteJobButton job={job} />
                <Link href={`/jobs/edit/${job.id}`}>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </Link>
                <JobListingFullDialog {...job} />
              </>
            }
          />
        ))}
      </JobListingGrid>
    </section>
  );
};
export default MyListingPage;
