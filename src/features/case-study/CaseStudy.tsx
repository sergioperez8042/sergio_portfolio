"use client";

import { useTranslation } from "@/lib/i18n/LangProvider";

export function CaseStudy() {
  const { t } = useTranslation();
  const cs = t.caseStudy;

  return (
    <section
      id="case-study"
      className="hash-anchor relative py-24 lg:py-36"
      style={{
        background:
          "linear-gradient(180deg, var(--color-black-200) 0%, var(--color-primary) 100%)",
        borderTop: "1px solid var(--color-line)",
        borderBottom: "1px solid var(--color-line)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-16">
        {/* Head */}
        <div className="max-w-[760px] mb-14 reveal">
          <span className="eyebrow">{cs.eyebrow}</span>
          <h2 className="h2 mt-4 mb-4 text-white-100">{cs.title}</h2>
          <p className="text-[17px] leading-[1.7] text-secondary">{cs.lede}</p>
        </div>

        {/* Results */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 p-7 rounded-3xl reveal"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid var(--color-line)",
          }}
        >
          {cs.results.map((r) => (
            <div key={r.lbl}>
              <div
                className="font-extrabold tracking-tight accent-gradient-text"
                style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
              >
                {r.num}
              </div>
              <div className="text-[12px] tracking-wider text-secondary mt-1">
                {r.lbl}
              </div>
            </div>
          ))}
        </div>

        {/* Narrative steps */}
        {cs.steps.map((s, i) => (
          <div
            key={s.step}
            className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-14 py-9 reveal"
            style={{
              borderTop: i === 0 ? "1px solid var(--color-line)" : undefined,
              borderBottom: "1px solid var(--color-line)",
            }}
          >
            <div className="font-mono text-[14px] tracking-[0.18em] text-secondary uppercase">
              {s.step}
            </div>
            <div>
              <h3 className="text-[26px] font-extrabold tracking-tight mb-4 text-white-100">
                {s.title}
              </h3>
              {s.paras.map((p, pi) => (
                <p
                  key={pi}
                  className="text-[16px] leading-[1.75] text-white-100/85 max-w-[65ch] mb-3"
                >
                  {p}
                </p>
              ))}
              {s.list ? (
                <ul className="list-none p-0 m-0 mt-3 flex flex-col gap-2">
                  {s.list.map((li) => (
                    <li
                      key={li}
                      className="pl-6 relative text-white-100/85 text-[15px] leading-[1.6]"
                    >
                      <span
                        className="absolute left-0 top-[10px] w-3 h-px"
                        style={{ background: "var(--color-accent)" }}
                        aria-hidden="true"
                      />
                      {li}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
