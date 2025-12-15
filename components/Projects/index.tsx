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
        technologies: ["React", "Express"],
        externalLink: "",
        githubLink: "",
        imageLink: `/images/ai-fashion.png`,
      },
      {
        title: "TryOn",
        subtitle: t("projects.tryOn.subtitle"),
        description: t("projects.tryOn.description"),
        technologies: ["React", "Express"],
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
        technologies: ["Python", "Streamlit", "Faiss", "Langchain", "OpenAI API"],
        externalLink: "https://yt-chat.streamlit.app/",
        githubLink: "https://github.com/ta-sakin/yt-chat",
        imageLink: `/images/ytchat.png`,
      },
      {
        title: "Complaint Management System",
        subtitle: t("projects.cms.subtitle"),
        description: t("projects.cms.description"),
        technologies: ["React", "Express", "MongoDB", "Firebase", "Natural.js", "Cloudinary"],
        externalLink: "https://cms-app-9ed7b.web.app",
        githubLink: "https://github.com/ta-sakin/cms-app",
        imageLink: `/images/cms.png`,
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
      <div className="px-4 mx-auto mt-10 md:mt-20 md:px-8 max-w-screen-lg">
        {projects.map((project, i) => (
          <ProjectCard key={i} rightShift={i % 2 === 0} {...project} />
        ))}
      </div>
    </Section>
  );
};
