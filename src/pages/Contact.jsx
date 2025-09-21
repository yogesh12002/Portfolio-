import { useState } from "react";
import Nav from "../components/Nav";

export default function Contact() {
  const [status, setStatus] = useState(null);      // { type: "ok" | "err", msg: string }
  const [pending, setPending] = useState(false);   // submit in progress

  async function onSubmit(e) {
    e.preventDefault();
    setStatus(null);
    setPending(true);

    const data = Object.fromEntries(new FormData(e.target).entries());

try {
  const form = new FormData(e.target); // collects name, email, subject, message

  const res = await fetch("https://script.google.com/macros/s/AKfycbx_-0G9H8yACLu5pt73923c45C4kx6c7sZNUjCv377-tFcIZwWDS9MMwY_wsgpcddT0/exec", {
    method: "POST",
    headers: { Accept: "application/json" }, // DO NOT set Content-Type; browser sets multipart/form-data
    body: form
  });

  const out = await res.json().catch(() => ({}));
  if (!res.ok || out.ok !== true) throw new Error(out.error || "Request failed");

  setStatus({ type: "ok", msg: "Sent! Thanks for reaching out." });
  e.target.reset();
} catch (err) {
  setStatus({ type: "err", msg: "Failed to send. Please try again." });
} finally {
  setPending(false);
}
  }

  return (
    <>
      <Nav />

      <main className="container" style={{ maxWidth: 720 }}>
        <header style={{ marginBottom: 16 }}>
          <h2>Contact</h2>
          <p className="muted">
            Have a project in mind or a question about analytics, dashboards, or APIs? Let’s connect.
          </p>
        </header>

        {/* Two‑column responsive form using theme classes */}
        <form className="form card contact-grid" onSubmit={onSubmit} noValidate>
          <div className="field">
            <label className="label" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              placeholder="Jane Doe"
              autoComplete="name"
              required
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="jane@example.com"
              autoComplete="email"
              inputMode="email"
              required
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              placeholder="Project collaboration, dashboard help…"
              maxLength={120}
              required
            />
          </div>

          <div className="field field-span-2">
            <label className="label" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Share a brief summary, goals, timeline, and any links."
              minLength={10}
              required
            />
          </div>

          <div className="actions field-span-2">
            <button className="btn" type="submit" disabled={pending}>
              {pending ? "Sending…" : "Send"}
            </button>
            {status && (
              <span
                className="status"
                style={{ marginLeft: 12, color: status.type === "ok" ? "#22c55e" : "#f97316" }}
              >
                {status.msg}
              </span>
            )}
          </div>
        </form>

        <section className="card" style={{ marginTop: 16 }}>
          <h3 style={{ marginTop: 0, marginBottom: 8 }}>Prefer email?</h3>
          <p className="muted" style={{ margin: 0 }}>
            Write at <a href="mailto:yogesh@example.com">yogesh@example.com</a> and expect a reply within 24–48 hours.
          </p>
        </section>
      </main>
    </>
  );
}
