"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useForm } from "react-hook-form";

const Filters = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm();

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-8 md:my-12">
      <div className="flex flex-col gap-2">
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
      </div>
      <div className="flex flex-col gap-2">
        <Label>Type</Label>
        <Controller
          control={control}
          name="type"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Select value={value} onValueChange={onChange}>
              <SelectTrigger>
                <SelectValue onBlur={onBlur} placeholder="FULL Time" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="ALL">Any</SelectItem>
                  <SelectItem value="FULL_TIME">Full Time</SelectItem>
                  <SelectItem value="PART_TIME">Part Time</SelectItem>
                  <SelectItem value="INTERNSHIP">Internship</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Experience Level</Label>

        <Controller
          control={control}
          name="experience"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Select value={value} onValueChange={onChange}>
              <SelectTrigger>
                <SelectValue onBlur={onBlur} placeholder="Mid-Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="ALL">Any</SelectItem>
                  <SelectItem value="JUNIOR">Junior</SelectItem>
                  <SelectItem value="MID_LEVEL">Mid-Level</SelectItem>
                  <SelectItem value="SENIOR">Senior</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>
    </div>
  );
};
export default Filters;
