import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const JobCardSkleton = () => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex gap-4 justify-between">
          <div>
            <CardTitle>
              <Skeleton className="h-6 w-[200px] " />
            </CardTitle>
            <CardDescription className="flex flex-col gap-1 mt-1">
              <Skeleton className="h-4 w-[40px] " />
              <Skeleton className="h-4 w-[50px] " />
            </CardDescription>
          </div>
        </div>
        <div className="flex gap-1 flex-wrap">
          <Skeleton className="h-6 w-[90px] rounded-full" />
          <Skeleton className="h-6 w-[90px] rounded-full" />
          <Skeleton className="h-6 w-[90px] rounded-full" />
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <Skeleton className="h-6 w-[350px] " />
      </CardContent>
      <CardFooter className="flex gap-2 items-stretch justify-end">
        <Skeleton className="h-10 w-[100px] rounded-md" />
      </CardFooter>
    </Card>
  );
};
export default JobCardSkleton;
