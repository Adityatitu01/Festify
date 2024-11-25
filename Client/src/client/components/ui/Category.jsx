import { Checkbox } from "@/components/ui/checkbox";

const items = [
  { id: "checkbox-c1", value: "c1", label: "Business", defaultChecked: true },
  { id: "checkbox-c2", value: "c2", label: "Music", },
  { id: "checkbox-c3", value: "c3", label: "Comedy" },
  { id: "checkbox-c4", value: "c4", label: "Parties", },
  { id: "checkbox-c5", value: "c5", label: "Dance", },
  { id: "checkbox-c6", value: "c6", label: "Dating" },
  { id: "checkbox-c7", value: "c7", label: "Workshop" },
  { id: "checkbox-c8", value: "c8", label: "Food & Drinks" },
  { id: "checkbox-c9", value: "c9", label: "Sports" },
  { id: "checkbox-10", value: "c10", label: "Fine Arts" },
];

export default function Checkbox18() {
  return (
    <fieldset className="space-y-4">
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <label
            key={item.id}
            className="relative flex px-4 py-2 cursor-pointer flex-col items-center justify-center gap-3 rounded-full border border-input text-center shadow-sm shadow-black/5 ring-offset-background transition-colors has-[[data-disabled]]:cursor-not-allowed has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary has-[[data-state=checked]]:text-primary-foreground has-[[data-disabled]]:opacity-50 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/70 has-[:focus-visible]:ring-offset-2"
          >
            <Checkbox
              id={item.id}
              value={item.value}
              className="sr-only after:absolute after:inset-0"
              defaultChecked={item.defaultChecked}
              disabled={item.disabled}
            />
            <span aria-hidden="true" className="text-sm md:text-lg font-medium">
              {item.label}
            </span>
            <span className="sr-only">{item.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
