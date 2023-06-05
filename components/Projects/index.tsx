import { Section } from "components";
import { useTranslation } from "next-i18next";
import React, { FC, useMemo } from "react";

import { ProjectCard } from "./libs/ProjectCard";

export const Projects: FC = () => {
  const { t } = useTranslation("common");

  const projects = useMemo(
    () => [
      {
        title: "CMS APP",
        subtitle: t("projects.cms.subtitle"),
        description: t("projects.cms.description"),
        technologies: ["React", "NodeJS", "MongoDB", "Firebase"],
        externalLink: "https://cms-app-9ed7b.web.app",
        githubLink: "https://github.com/ta-sakin/cms-app",
        imageLink: `/images/cms.png`,
      },
      {
        title: "Reddit-timify",
        subtitle: t("projects.redditTimify.subtitle"),
        description: t("projects.redditTimify.description"),
        technologies: ["React", "Reddit API"],
        externalLink: "https://reddit-timify.vercel.app",
        githubLink: "https://github.com/ta-sakin/reddit-timify",
        imageLink: `/images/reddit-timify.png`,
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
