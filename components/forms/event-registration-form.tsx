"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import {
  type EventRegistrationInput,
  eventRegistrationSchema,
} from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export function EventRegistrationForm({ eventSlug }: { eventSlug: string }) {
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<EventRegistrationInput>({
    resolver: zodResolver(eventRegistrationSchema),
    defaultValues: {
      eventSlug,
      name: "",
      email: "",
      organization: "",
      phone: "",
      seats: 1,
      interestArea: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/events/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Unable to register");

      setStatus("Registration interest received. We will share next steps shortly.");
      form.reset({ ...form.getValues(), name: "", email: "", organization: "", phone: "", seats: 1, interestArea: "" });
    } catch {
      setStatus("Something went wrong. Please try again or contact our team directly.");
    } finally {
      setSubmitting(false);
    }
  });

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" error={form.formState.errors.name?.message}>
          <Input {...form.register("name")} placeholder="Your name" />
        </Field>
        <Field label="Email address" error={form.formState.errors.email?.message}>
          <Input {...form.register("email")} type="email" placeholder="name@company.com" />
        </Field>
        <Field label="Organisation">
          <Input {...form.register("organization")} placeholder="Institution or company" />
        </Field>
        <Field label="Phone number">
          <Input {...form.register("phone")} placeholder="+92" />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Seats" error={form.formState.errors.seats?.message}>
          <Input
            {...form.register("seats", { valueAsNumber: true })}
            type="number"
            min={1}
            max={10}
          />
        </Field>
        <Field label="Primary interest area">
          <Select {...form.register("interestArea")}>
            <option value="">Choose one</option>
            <option value="Attending">Attending</option>
            <option value="Group registration">Group registration</option>
            <option value="Partnership">Partnership</option>
            <option value="Sponsorship">Sponsorship</option>
          </Select>
        </Field>
      </div>

      <Button type="submit" variant="secondary" size="lg" disabled={submitting}>
        {submitting ? "Submitting..." : "Register interest"}
      </Button>

      {status ? <p className="text-sm text-brand-navy">{status}</p> : null}
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-semibold text-brand-charcoal">{label}</span>
      {children}
      {error ? <span className="text-xs text-brand-burgundy">{error}</span> : null}
    </label>
  );
}
