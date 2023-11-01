"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { jobListingFormSchema } from "../validationsSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { type } from "os";
import ErrorMessage from "@/components/ErrorMessage";

type JobFormData = z.infer<typeof jobListingFormSchema>;

const JobForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<JobFormData>({ resolver: zodResolver(jobListingFormSchema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        <div className=" col-span-full md:col-span-1 flex flex-col gap-2">
          <Label>Title</Label>
          <Input {...register("title")} type="text" />
          <ErrorMessage>{errors.title?.message}</ErrorMessage>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Company Name</Label>
          <Input {...register("companyName")} type="text" />
          <ErrorMessage>{errors.companyName?.message}</ErrorMessage>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Location</Label>
          <Input {...register("location")} type="text" />
          <ErrorMessage>{errors.location?.message}</ErrorMessage>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Application URL</Label>
          <Input {...register("applyUrl")} type="text" />
          <ErrorMessage>{errors.applyUrl?.message}</ErrorMessage>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Type</Label>
          <Controller
            control={control}
            name="type"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Select
                defaultValue="FULL_TIME"
                value={value}
                onValueChange={onChange}
              >
                <SelectTrigger>
                  <SelectValue onBlur={onBlur} placeholder="FULL Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
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
              <Select
                defaultValue="MID_LEVEL"
                value={value}
                onValueChange={onChange}
              >
                <SelectTrigger>
                  <SelectValue onBlur={onBlur} placeholder="Mid-Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Junior">Junior</SelectItem>
                    <SelectItem value="MID_LEVEL">Mid-Level</SelectItem>
                    <SelectItem value="Senior">Senior</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Salary</Label>
          <Input
            {...register("salary", { valueAsNumber: true })}
            type="number"
          />
          <p className="text-sm text-muted-foreground">In USD</p>
          <ErrorMessage>{errors.salary?.message}</ErrorMessage>
        </div>

        <div className="md:col-span-2 col-span-full flex flex-col gap-2">
          <Label>Short Description</Label>
          <Textarea {...register("shortDescription")} rows={5} />
          <p className="text-sm text-muted-foreground">Max 200 characters</p>
          <ErrorMessage>{errors.shortDescription?.message}</ErrorMessage>
        </div>
        <div className="col-span-full flex flex-col gap-2">
          <Label>Full Description</Label>
          <Textarea {...register("description")} rows={8} />
          <p className="text-sm text-muted-foreground">
            Supports full Markdown
          </p>
          <ErrorMessage>{errors.description?.message}</ErrorMessage>
        </div>
      </div>
      <div className="flex gap-4 my-4 justify-end">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};
export default JobForm;
