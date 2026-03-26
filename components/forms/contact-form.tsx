"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { siteConfig } from "@/config/site";
import { type ContactInput, contactSchema } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      phone: "",
      category: "",
      message: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Unable to submit form");

      setStatus("Your inquiry has been received. Our team will follow up shortly.");
      form.reset();
    } catch {
      setStatus("Something went wrong while sending your inquiry. Please try again.");
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
          <Input {...form.register("organization")} placeholder="School, university, company" />
        </Field>
        <Field label="Phone number">
          <Input {...form.register("phone")} placeholder="+92" />
        </Field>
      </div>

      <Field label="Inquiry category" error={form.formState.errors.category?.message}>
        <Select {...form.register("category")}>
          <option value="">Choose a category</option>
          {siteConfig.inquiryCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
      </Field>

      <Field label="Tell us about your goals" error={form.formState.errors.message?.message}>
        <Textarea
          {...form.register("message")}
          placeholder="Share the audience, timeline, and kind of experience you want to build."
        />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">
          By submitting, you agree to our privacy-conscious inquiry handling.
        </p>
        <Button type="submit" variant="secondary" size="lg" disabled={submitting}>
          {submitting ? "Sending..." : "Submit inquiry"}
        </Button>
      </div>

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
