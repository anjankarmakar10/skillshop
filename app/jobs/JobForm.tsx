"use client";
import ErrorMessage from "@/components/ErrorMessage";
import Spinner from "@/components/Spinner";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { jobListingSchema } from "../validationsSchemas";
import JobCard from "@/components/JobCard";

export type JobFormData = z.infer<typeof jobListingSchema>;

const DEFAULT_VALUES: JobFormData = {
  applyUrl: "",
  companyName: "",
  description: "",
  experience: "MID_LEVEL",
  location: "",
  salary: NaN,
  shortDescription: "",
  title: "",
  type: "FULL_TIME",
};

const JobForm = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<JobFormData>({
    resolver: zodResolver(jobListingSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const jobListingValues = watch();

  const [error, setError] = useState("");

  const [isSubmitting, setSubmitting] = useState(false);
  const [preview, setPreview] = useState(false);

  const router = useRouter();
  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      await axios.post("/api/jobs", data);
      router.push("/jobs");
      router.refresh();
    } catch (error) {
      console.log(error);
      setSubmitting(false);
      setError("An unexpected error occurred.");
    }
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        {error && (
          <Alert className="mb-4 bg-white" variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        )}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          <div className="col-span-full md:col-span-1 flex flex-col gap-2">
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
            <Input {...register("applyUrl")} type="url" />
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
                      <SelectItem value="JUNIOR">Junior</SelectItem>
                      <SelectItem value="MID_LEVEL">Mid-Level</SelectItem>
                      <SelectItem value="SENIOR">Senior</SelectItem>
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
          <Button
            disabled={isSubmitting}
            className="font-medium flex gap-1"
            type="submit"
          >
            {isSubmitting && <Spinner />}
            Submit Job
          </Button>

          <Button
            onClick={() => setPreview((p) => !p)}
            className="font-medium"
            type="button"
          >
            {preview ? "Hide" : " Preview"}
          </Button>
        </div>
      </form>
      <div>{preview && <JobCard job={jobListingValues} />}</div>
    </>
  );
};
export default JobForm;
