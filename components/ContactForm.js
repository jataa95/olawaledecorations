"use client";

import { useState } from "react";
import { site } from "@/data/site";

// Builds a WhatsApp or email message from the form. Until a number or email is
// set in data/site.js the form explains how to reach the team instead.
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const canSend = Boolean(site.whatsapp || site.email);

  function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Hello Olawale Decorations,\n\nName: ${f.get("name")}\nPhone: ${f.get("phone")}\nLocation: ${f.get("location")}\nService: ${f.get("service")}\n\n${f.get("message")}`;
    if (site.whatsapp) {
      window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(body)}`, "_blank", "noopener");
    } else if (site.email) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Quote request")}&body=${encodeURIComponent(body)}`;
    }
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl bg-white p-6 shadow-xl shadow-brand-blue/5 sm:grid-cols-2 sm:p-8">
      <Field label="Your name" name="name" required />
      <Field label="Phone number" name="phone" type="tel" required />
      <Field label="Project location" name="location" placeholder="e.g. Abeokuta" />
      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        Service
        <select name="service" className="input">
          <option>POP & false ceiling</option>
          <option>Lighting</option>
          <option>Mirror & glass wall</option>
          <option>Chandelier</option>
          <option>Full interior</option>
          <option>Exterior</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink sm:col-span-2">
        Tell us about the space
        <textarea name="message" rows={4} className="input resize-none" placeholder="Room type, size, the look you want…" />
      </label>
      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-red w-full sm:w-auto" disabled={!canSend}>
          Send request
        </button>
        {!canSend && (
          <p className="mt-3 text-sm text-ink/60">
            Online requests open soon. For now, message us on{" "}
            <a href={site.socials.tiktok} className="font-medium text-brand-red underline" target="_blank" rel="noreferrer">
              TikTok @olawale_konceptz
            </a>
            .
          </p>
        )}
        {sent && <p className="mt-3 text-sm text-brand-blue">Thanks — we’ll get back to you shortly.</p>}
      </div>
    </form>
  );
}

function Field({ label, ...props }) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
      {label}
      <input className="input" {...props} />
    </label>
  );
}
