import JobCard from "@/components/JobCard";
import { Button } from "@/components/ui/button";
import prisma from "@/prisma/client";
import Link from "next/link";
import { JobListingFullDialog } from "./JobListingFullDialog";
import DeleteJobButton from "@/components/DeleteJobButton";

const JobsListPage = async () => {
  const jobs: Job[] = await prisma.jobPost.findMany({});

  return (
    <section>
      <header className="flex items-center justify-between">
        <h1 className="font-bold text-2xl md:text-4xl ">Job Listing</h1>

        <Link href="/jobs/new">
          <Button size="sm" variant="outline">
            Create Listing
          </Button>
        </Link>
      </header>
      <div className="my-4 grid gap-4 grid-cols-[repeat(auto-fill,minmax(min(400px,100%),1fr))]">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            footerBtns={
              <>
                <DeleteJobButton job={job} />
                <Link href={`/jobs/edit/${job.id}`}>
                  <Button variant="outline">Edit</Button>
                </Link>
                <JobListingFullDialog {...job} />
              </>
            }
          />
        ))}
      </div>
    </section>
  );
};
export default JobsListPage;
