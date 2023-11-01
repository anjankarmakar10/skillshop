import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/utils/formatters";
import { Banknote, CalendarDays, GraduationCap } from "lucide-react";
import { Badge } from "./ui/badge";
import { ReactNode } from "react";

interface Props {
  footerBtns?: ReactNode;
  className?: string;
  job: Job;
}

const JobCard = ({
  job: {
    title,
    companyName,
    location,
    shortDescription,
    type,
    salary,
    experience,
  },
  footerBtns,
  className,
}: Props) => {
  return (
    <Card className={cn("h-full flex flex-col", className)}>
      <CardHeader>
        <div className="flex gap-4 justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="flex flex-col">
              <span>{companyName}</span>
              <span>{location}</span>
            </CardDescription>
          </div>
        </div>
        <div className="flex gap-1 flex-wrap">
          <Badge
            variant="secondary"
            className="flex gap-1 whitespace-nowrap font-normal items-center"
          >
            <Banknote className="w-4 h-4 mb-[1px]" /> {formatCurrency(salary)}
          </Badge>
          <Badge
            variant="secondary"
            className="flex gap-1 whitespace-nowrap font-normal items-center "
          >
            <CalendarDays className="w-4 h-4 mb-[1px] " />{" "}
            {type?.replace("_", " ")}
          </Badge>
          <Badge
            variant="secondary"
            className="flex gap-1 whitespace-nowrap font-normal items-center "
          >
            <GraduationCap className="w-4 h-4 mb-[1px] " />{" "}
            {experience?.replace("_", " ")}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">{shortDescription}</CardContent>
      <CardFooter className="flex gap-2 items-stretch justify-end">
        {footerBtns}
      </CardFooter>
    </Card>
  );
};
export default JobCard;
