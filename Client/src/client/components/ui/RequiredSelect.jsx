import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Select36() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-36">Where will your event take place?</Label>
      <Select defaultValue="s1">
        <SelectTrigger id="select-36" className="[&_[data-desc]]:hidden">
          <SelectValue placeholder="Choose a plan" />
        </SelectTrigger>
        <SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2">
          <SelectItem value="s1">
            Venue
            <span className="mt-1 block text-xs text-muted-foreground" data-desc>
              Host event at a physical location and manage check-ins at the door.
            </span>
          </SelectItem>
          <SelectItem value="s2">
            Online
            <span className="mt-1 block text-xs text-muted-foreground" data-desc>
              Host event through Zoom, Meet or any other virtual platform, and easily share the joining instructions only with ticket buyers.
            </span>
          </SelectItem>
          <SelectItem value="s3">
            Recorded Video
            <span className="mt-1 block text-xs text-muted-foreground" data-desc>
              Host pre-recorded event content and let people get instant access after they purchase the ticket. Works best for workshops.
            </span>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

