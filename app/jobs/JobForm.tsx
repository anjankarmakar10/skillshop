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
const JobForm = () => {
  return (
    <form>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        <div className=" col-span-full md:col-span-1 flex flex-col gap-2">
          <Label htmlFor="email ">Title</Label>
          <Input type="text" id="text" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Company Name</Label>
          <Input type="text" id="email" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Location</Label>
          <Input type="text" id="email" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Application URL</Label>
          <Input type="text" id="email" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Type</Label>
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
          <Label htmlFor="email">Experience Level</Label>
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
          <Label htmlFor="email">Salary</Label>
          <Input type="number" id="email" />
          <p className="text-sm text-muted-foreground">In USD</p>
        </div>

        <div className="md:col-span-2 col-span-full flex flex-col gap-2">
          <Label htmlFor="message-2">Short Description</Label>
          <Textarea id="message-2" rows={5} />
          <p className="text-sm text-muted-foreground">Max 200 characters</p>
        </div>
        <div className="col-span-full flex flex-col gap-2">
          <Label htmlFor="message-2">Full Description</Label>
          <Textarea rows={8} id="message-2" />
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
