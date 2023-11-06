import JobCard from "@/components/JobCard";
import { Button } from "@/components/ui/button";
import prisma from "@/prisma/client";
import Link from "next/link";
import { JobListingFullDialog } from "./JobListingFullDialog";
import JobListingGrid from "@/components/JobListingGrid";
import Filters from "../Filters";

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
      <Filters />
      <JobListingGrid>
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            footerBtns={
              <>
                <JobListingFullDialog {...job} />
              </>
            }
          />
        ))}
      </JobListingGrid>
    </section>
  );
};
export default JobsListPage;
