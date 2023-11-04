import { PropsWithChildren } from "react";

const JobListingGrid = ({ children }: PropsWithChildren) => {
  return (
    <section className="my-4 grid gap-4 grid-cols-[repeat(auto-fill,minmax(min(400px,100%),1fr))]">
      {children}
    </section>
  );
};
export default JobListingGrid;
