"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Experience, Type } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";

export interface FiltersQuery {
  type: Type;
  exprience: Experience;
}

const types: { label: string; value?: Type }[] = [
  { label: "Any" },
  { label: "Full Time", value: "FULL_TIME" },
  { label: "Part Time", value: "PART_TIME" },
  { label: "Internship", value: "INTERNSHIP" },
];

const expriences: { label: string; value?: Experience }[] = [
  { label: "Any" },
  { label: "Junior", value: "JUNIOR" },
  { label: "Mid Level", value: "MID_LEVEL" },
  { label: "Senior", value: "SENIOR" },
];

const Filters = () => {
  return (
    <form className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-8 md:my-12">
      {/* <div className="flex flex-col gap-2">
        <Label>Title</Label>
        <Input {...register("title")} type="text" />
      </div>

      <div className="flex flex-col gap-2">
        <Label>Location</Label>
        <Input {...register("location")} type="text" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Minimum Salary</Label>
        <Input {...register("salary", { valueAsNumber: true })} type="number" />
      </div> */}

      <FilterType />
      <FilterExprience />
    </form>
  );
};

const FilterType = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <div className="flex flex-col gap-2">
      <Label>Experience Level</Label>
      <Select
        onValueChange={(exprience) => {
          const query = exprience ? `?exprience=${exprience}` : "";
          router.push("/jobs" + query);
        }}
        defaultValue={searchParams.get("exprience") || "ALL"}
      >
        <SelectTrigger>
          <SelectValue placeholder="Mid-Level" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {expriences.map((exprience) => (
              <SelectItem
                key={exprience.label}
                value={exprience.value || "ALL"}
              >
                {exprience.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

const FilterExprience = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <div className="flex flex-col gap-2">
      <Label>Type</Label>

      <Select
        onValueChange={(type) => {
          const query = type ? `?type=${type}` : "";
          router.push("/jobs" + query);
        }}
        defaultValue={searchParams.get("type") || "ALL"}
      >
        <SelectTrigger>
          <SelectValue placeholder="FULL Time" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {types.map((type) => (
              <SelectItem key={type.label} value={type.value || "ALL"}>
                {type.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filters;
