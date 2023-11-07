import JobCardSkleton from "@/components/JobCardSkleton";
import JobListingGrid from "@/components/JobListingGrid";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <section>
      <header className="flex items-center justify-between">
        <h1 className="font-bold text-2xl md:text-4xl ">My Listing</h1>

        <Skeleton className="h-9 w-[120px]" />
      </header>
      <JobListingGrid>
        {Array(8)
          .fill("0")
          .map((_, index) => (
            <JobCardSkleton key={index} />
          ))}
      </JobListingGrid>
    </section>
  );
};
export default loading;
