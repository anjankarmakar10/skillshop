import JobCardSkleton from "@/components/JobCardSkleton";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <section>
      <header className="flex items-center justify-between">
        <h1 className="font-bold text-2xl md:text-4xl ">Job Listing</h1>

        <Skeleton className="h-9 w-[120px]" />
      </header>
      <div className="my-4 grid gap-4 grid-cols-[repeat(auto-fill,minmax(min(400px,100%),1fr))]">
        {Array(8)
          .fill("0")
          .map((_, index) => (
            <JobCardSkleton key={index} />
          ))}
      </div>
    </section>
  );
};
export default loading;
