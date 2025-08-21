import React from "react";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-20">
      <div className="container">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold">
            <span className="bg-gradient-to-r from-accent via-accent/70 to-white bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          {subtitle && <p className="text-white/70 mt-2">{subtitle}</p>}
        </div>
        <div className="bg-edge border border-white/10 rounded-2xl p-6 md:p-8 shadow-soft">
          {children}
        </div>
      </div>
    </section>
  );
}
