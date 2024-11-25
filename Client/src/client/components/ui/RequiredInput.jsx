import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input02() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-02">
        Event Name <span className="text-destructive">*</span>
      </Label>
      <Input id="input-02" placeholder="Enter the name of your event" type="name" required />
    </div>
  );
}
