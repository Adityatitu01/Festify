import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import BoldIUnder from "./BIU"


export default function Textarea02() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-02">
        Event Description <span className="text-destructive">*</span>
      </Label>
      {/* <BoldIUnder className="absolute left-0"/> */}
      <Textarea id="textarea-02" placeholder="Write your event details here..." required />
    </div>
  );
}
