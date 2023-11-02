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

export const jobListingSchema = z.object({
  title: z.string().min(1, "Title is required."),
  companyName: z.string().min(1, "Company name is required."),
  location: z.string().min(1, "Location is required."),
  applyUrl: z.string().url().optional(),
  salary: z.number().int().positive(),
  shortDescription: z
    .string()
    .min(1, "Short description is required.")
    .max(200),
  description: z.string().optional(),
  experience: z.string().optional(),
  type: z.string().optional(),
  userEmail: z.string().optional(),
});

export const patchJobSchema = z.object({
  title: z.string().min(1, "Title is required."),
  companyName: z.string().min(1, "Company name is required."),
  location: z.string().min(1, "Location is required."),
  applyUrl: z.string().url().optional(),
  salary: z.number().int().positive(),
  shortDescription: z
    .string()
    .min(1, "Short description is required.")
    .max(200),
  description: z.string().optional(),
  experience: z.string().optional(),
  type: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});
