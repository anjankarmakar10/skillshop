import { z } from "zod";
z;
enum Type {
  FULL_TIME = "FULL_TIME",
  PART_TIME = "PART_TIME",
  INTERNSHIP = "INTERNSHIP",
}

enum Experience {
  JUNIOR = "JUNIOR",
  MID_LEVEL = "MID_LEVEL",
  SENIOR = "SENIOR",
}

const TypeArray = [Type.FULL_TIME, Type.INTERNSHIP, Type.PART_TIME] as const;
const ExprienceArray = [
  Experience.JUNIOR,
  Experience.MID_LEVEL,
  Experience.SENIOR,
] as const;

export const jobListingFormSchema = z.object({
  title: z.string().min(1, "Title is required."),
  companyName: z.string().min(1, "Company name is required."),
  location: z.string().min(1, "Location is required."),
  applyUrl: z.string().url().optional(),
  salary: z.number().int().positive().min(1, "Salary is required."),
  shortDescription: z
    .string()
    .max(200)
    .min(1, "Short description is required."),
  description: z.string().optional(),
});
