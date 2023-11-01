import { Button } from "@/components/ui/button";
import Link from "next/link";

const JobsListPage = () => {
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
    </section>
  );
};
export default JobsListPage;
