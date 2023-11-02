import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatCurrency } from "@/utils/formatters";
import {
  Banknote,
  CalendarDays,
  ExternalLink,
  GraduationCap,
} from "lucide-react";

export function JobListingFullDialog({
  title,
  companyName,
  location,
  salary,
  type,
  experience,
  applyUrl,
  description,
}: Job) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">View More</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100vh-2rem)] flex flex-col max-w-3xl w-[calc(100vw-2rem)]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="flex flex-col">
            <div>{companyName}</div>
            <div>{location}</div>
          </DialogDescription>
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
        </DialogHeader>
        <div>
          <Button size="sm" asChild>
            <a href={applyUrl} target="_blank">
              Apply On Company Site
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>

        <ReactMarkdown className="prose dark:prose-invert prose-slate max-w-full overflow-y-auto pr-6">
          {description}
        </ReactMarkdown>
      </DialogContent>
    </Dialog>
  );
}
