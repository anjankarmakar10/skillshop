import FormSkeleton from "@/components/FormSkeleton";

const loading = () => {
  return (
    <section>
      <header className="mb-6">
        <h1 className="font-bold text-2xl md:text-4xl">New Listing</h1>
      </header>
      <FormSkeleton />
    </section>
  );
};
export default loading;
