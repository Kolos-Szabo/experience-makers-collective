import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { contact } from "@/data/site";
import { ContactInline } from "@/components/site/ContactInline";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "date";
  required?: boolean;
  placeholder?: string;
  help?: string;
  full?: boolean;
};

export function SimpleForm({
  fields,
  submitLabel,
  formName,
}: {
  fields: Field[];
  submitLabel: string;
  formName: string;
}) {
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) {
      toast.error("Este necesar acordul privind prelucrarea datelor.");
      return;
    }
    setSent(true);
    toast.success("Îți mulțumim! Formularul a fost completat.", {
      description: `Trimiterea automată nu este încă activată. Deocamdată ne poți scrie direct la ${contact.email} sau ne poți suna la ${contact.phoneDisplay}.`,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="surface-card p-6 md:p-8" aria-label={formName}>
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name} className={f.full || f.type === "textarea" ? "sm:col-span-2" : ""}>
            <Label htmlFor={`${formName}-${f.name}`} className="mb-2 block text-sm font-medium">
              {f.label}
              {f.required && (
                <span className="text-primary" aria-hidden="true">
                  {" "}
                  *
                </span>
              )}
            </Label>
            {f.type === "textarea" ? (
              <Textarea
                id={`${formName}-${f.name}`}
                name={f.name}
                required={f.required}
                rows={5}
                placeholder={f.placeholder}
              />
            ) : (
              <Input
                id={`${formName}-${f.name}`}
                name={f.name}
                type={f.type ?? "text"}
                required={f.required}
                placeholder={f.placeholder}
              />
            )}
            {f.help && <p className="mt-1.5 text-xs text-muted-foreground">{f.help}</p>}
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-md bg-muted p-4">
        <Checkbox
          id={`${formName}-consent`}
          checked={consent}
          onCheckedChange={(v) => setConsent(v === true)}
        />
        <Label
          htmlFor={`${formName}-consent`}
          className="text-sm font-normal leading-relaxed text-foreground/85"
        >
          Sunt de acord cu prelucrarea datelor mele personale în scopul acestei solicitări, conform
          politicii de confidențialitate.
        </Label>
      </div>

      <Button type="submit" variant="cta" size="lg" className="mt-6 w-full sm:w-auto">
        {submitLabel}
      </Button>
      <p className="mt-4 text-xs text-muted-foreground" role="status">
        {sent
          ? "Formular completat. Conectarea la sistemul de trimitere urmează să fie configurată."
          : "Câmpurile marcate cu * sunt obligatorii."}
      </p>
      <div className="mt-6 border-t border-border pt-4">
        <p className="text-sm text-muted-foreground">Preferi să ne scrii direct?</p>
        <ContactInline className="-ml-3 mt-1" />
      </div>
    </form>
  );
}
