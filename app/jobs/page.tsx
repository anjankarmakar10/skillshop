import JobCard from "@/components/JobCard";
import { Button } from "@/components/ui/button";
import prisma from "@/prisma/client";
import Link from "next/link";
import { JobListingFullDialog } from "./JobListingFullDialog";
import JobListingGrid from "@/components/JobListingGrid";
import Filters, { FiltersQuery } from "../Filters";
import { Experience, Type } from "@prisma/client";

interface Props {
  searchParams: FiltersQuery;
}

const JobsListPage = async ({ searchParams }: Props) => {
  console.log(searchParams);

  const types = Object.values(Type);

  const type = types.includes(searchParams.type)
    ? searchParams.type
    : undefined;

  const expriences = Object.values(Experience);

  const exprience = expriences.includes(searchParams.exprience)
    ? searchParams.exprience
    : undefined;

  const jobs: Job[] = await prisma.jobPost.findMany({
    where: {
      experience: exprience,
      type: type,
    },
  });

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
