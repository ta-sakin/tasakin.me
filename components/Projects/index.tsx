import { Section } from "components";
import { useTranslation } from "next-i18next";
import React, { FC, useMemo } from "react";

import { ProjectCard } from "./libs/ProjectCard";

export const Projects: FC = () => {
  const { t } = useTranslation("common");

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

  return (
    <Section
      className="mt-20 mb-16 md:mt-28"
      title={t("projects.title")}
      description={t("projects.description")}
    >
      <div className="px-4 mx-auto mt-10 md:mt-16 md:px-8 max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </Section>
  );
};
