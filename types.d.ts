type Job = {
  id?: string;
  title: string;
  companyName: string;
  location: string;
  applyUrl?: string | undefined;
  salary: number;
  shortDescription: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  type?: string | undefined;
  experience?: string | undefined;
};

type Favorite = {
  id?: string;
  jobId: string;
  userEmail?: string;
};
