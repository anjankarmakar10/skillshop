import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Skeleton } from "./ui/skeleton";

const FormSkeleton = () => {
  return (
    <form>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="col-span-full md:col-span-1 flex flex-col gap-2">
          <Label>Title</Label>
          <Skeleton className="w-full h-10 rounded-md" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Company Name</Label>
          <Skeleton className="w-full h-10 rounded-md" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Location</Label>
          <Skeleton className="w-full h-10 rounded-md" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Application URL</Label>
          <Skeleton className="w-full h-10 rounded-md" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Type</Label>
          <Skeleton className="w-full h-10 rounded-md" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Experience Level</Label>
          <Skeleton className="w-full h-10 rounded-md" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Salary</Label>
          <Skeleton className="w-full h-10 rounded-md" />
          <p className="text-sm text-muted-foreground">In USD</p>
        </div>
        <div className="md:col-span-2 col-span-full flex flex-col gap-2">
          <Label>Short Description</Label>
          <Skeleton className="w-full h-[118px] rounded-md" />
          <p className="text-sm text-muted-foreground">Max 200 characters</p>
        </div>
        <div className="col-span-full flex flex-col gap-2">
          <Label>Full Description</Label>
          <Skeleton className="w-full h-[174px] rounded-md" />
          <p className="text-sm text-muted-foreground">
            Supports full Markdown
          </p>
        </div>
      </div>
      <div className="flex gap-4 my-4 justify-end">
        <Button className="font-medium flex gap-1" type="submit">
          Submit Job
        </Button>

        <Button className="font-medium" type="button">
          Preview
        </Button>
      </div>
    </form>
  );
};
export default FormSkeleton;
