import { Section } from "components";
import { useWindowSize } from "lib";
import { useTranslation } from "next-i18next";
import React, { FC, useCallback, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { ProjectCard } from "./libs/ProjectCard";

export const Projects: FC = () => {
  const { t } = useTranslation("common");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { width } = useWindowSize();

  const projects = useMemo(
    () => [
      {
        title: "TryOnAI Chatbot",
        subtitle: t("projects.tryOnAI.subtitle"),
        description: t("projects.tryOnAI.description"),
        technologies: ["React", "Express", "Cloudflare R2"],
        externalLink: "",
        githubLink: "",
        imageLink: `/images/ai-fashion.png`,
      },
      {
        title: "TryOn",
        subtitle: t("projects.tryOn.subtitle"),
        description: t("projects.tryOn.description"),
        technologies: ["React", "Express", "AI"],
        externalLink: "",
        githubLink: "",
        imageLink: `/images/tryon-extension.png`,
      },
      {
        title: "SnipClip",
        subtitle: t("projects.snipClip.subtitle"),
        description: t("projects.snipClip.description"),
        technologies: ["Python", "Pyannote", "Next.js"],
        externalLink: "",
        githubLink: "",
        imageLink: `/images/snipclip.png`,
      },
      {
        title: "YT-Chat",
        subtitle: t("projects.ytchat.subtitle"),
        description: t("projects.ytchat.description"),
        technologies: [
          "Python",
          "Streamlit",
          "Faiss",
          "Langchain",
          "OpenAI API",
        ],
        externalLink: "https://yt-chat.streamlit.app/",
        githubLink: "https://github.com/ta-sakin/yt-chat",
        imageLink: `/images/ytchat.png`,
      },
    ],
    [t]
  );

  const getCardWidth = () => {
    if (!width) return "85vw";
    if (width < 768) return "88vw";
    if (width < 1024) return "70vw";
    return "58vw";
  };

  const getSidePad = () => {
    if (!width) return "6vw";
    if (width < 768) return "6vw";
    return "10vw";
  };

  const scrollTo = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.children[index] as HTMLElement;
    if (!card) return;
    const scrollLeft =
      card.offsetLeft -
      container.offsetLeft -
      (container.offsetWidth - card.offsetWidth) / 2;
    container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    setActive(index);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const next =
      direction === "left"
        ? Math.max(0, active - 1)
        : Math.min(projects.length - 1, active + 1);
    scrollTo(next);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const center = container.scrollLeft + container.offsetWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    Array.from(container.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const cardCenter = el.offsetLeft + el.offsetWidth / 2;
      const dist = Math.abs(center - cardCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActive(closest);
  };

  return (
    <Section
      className="mt-20 mb-16 md:mt-28"
      title={t("projects.title")}
      description={t("projects.description")}
    >
      <div className="relative mt-10 md:mt-16">
        {active > 0 && (
          <button
            onClick={() => scroll("left")}
            className="absolute z-10 items-center justify-center hidden w-10 h-10 rounded-full md:flex left-2 top-1/2 -translate-y-1/2 dark:bg-gray-900 bg-pink dark:text-white-900 text-black-900 hover:opacity-80 transition-opacity"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>
        )}
        {active < projects.length - 1 && (
          <button
            onClick={() => scroll("right")}
            className="absolute z-10 items-center justify-center hidden w-10 h-10 rounded-full md:flex right-2 top-1/2 -translate-y-1/2 dark:bg-gray-900 bg-pink dark:text-white-900 text-black-900 hover:opacity-80 transition-opacity"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
        )}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{
            display: "flex",
            gap: "1rem",
            paddingLeft: getSidePad(),
            paddingRight: getSidePad(),
            paddingBottom: "1rem",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className="snap-center"
              style={{
                flexShrink: 0,
                width: getCardWidth(),
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className="rounded-full transition-all"
              style={{
                width: i === active ? "1.5rem" : "0.5rem",
                height: "0.5rem",
                backgroundColor: i === active ? undefined : undefined,
              }}
            >
              <div
                className="w-full h-full rounded-full"
                style={{
                  backgroundColor:
                    i === active
                      ? "var(--dot-active, #7899FB)"
                      : "var(--dot-inactive, #8E8E8E)",
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
};
