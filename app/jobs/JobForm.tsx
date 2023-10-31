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
import { z } from "zod";

const JobForm = () => {
  return (
    <form>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        <div className=" col-span-full md:col-span-1 flex flex-col gap-2">
          <Label>Title</Label>
          <Input type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Company Name</Label>
          <Input type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Location</Label>
          <Input type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Application URL</Label>
          <Input type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Type</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Full Time" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Full Time</SelectItem>
                <SelectItem value="banana">Part Time</SelectItem>
                <SelectItem value="blueberry">Internship</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Experience Level</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Mid-Lavel" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Junior</SelectItem>
                <SelectItem value="banana">Mid-Lavel</SelectItem>
                <SelectItem value="blueberry">Senior</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Salary</Label>
          <Input type="number" />
          <p className="text-sm text-muted-foreground">In USD</p>
        </div>

        <div className="md:col-span-2 col-span-full flex flex-col gap-2">
          <Label>Short Description</Label>
          <Textarea rows={5} />
          <p className="text-sm text-muted-foreground">Max 200 characters</p>
        </div>
        <div className="col-span-full flex flex-col gap-2">
          <Label>Full Description</Label>
          <Textarea rows={8} />
          <p className="text-sm text-muted-foreground">
            Supports full Markdown
          </p>
        </div>
      </div>
      <div className="flex gap-4 my-4 justify-end">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};
export default JobForm;
