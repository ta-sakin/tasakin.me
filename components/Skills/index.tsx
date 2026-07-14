import { Container, Section } from "components";
import { useAnimation } from "framer-motion";
import { useTranslation } from "next-i18next";
import React, { FC, useEffect } from "react";
import { FaDocker, FaReact } from "react-icons/fa";
import {
  SiDjango,
  SiGraphql,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";

import { AWSIcon, MongoIcon, PostgresIcon, TsIcon } from "./libs/Icons";
import { Skill } from "./libs/Skill";

const skills = [
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: <TsIcon />,
  },
  {
    name: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: <SiJavascript color="#f7df1e" />,
  },
  {
    name: "Python",
    href: "https://www.python.org/",
    icon: <SiPython color="#3776AB" />,
  },
  {
    name: "React",
    href: "https://reactjs.org/",
    icon: <FaReact color="#00D8FF" />,
  },
  {
    name: "React Native",
    href: "https://reactnative.dev/",
    icon: <FaReact color="#00D8FF" />,
  },
  {
    name: "Next.js",
    href: "https://nextjs.org/",
    icon: <SiNextdotjs color="#000000" className="dark:!fill-white" />,
  },
  {
    name: "Node.js",
    href: "https://nodejs.org/",
    icon: <SiNodedotjs color="#539E43" />,
  },
  {
    name: "Django",
    href: "https://www.djangoproject.com/",
    icon: <SiDjango color="#092E20" className="dark:!fill-white" />,
  },
  {
    name: "PostgreSQL",
    href: "https://www.postgresql.org/",
    icon: <PostgresIcon />,
  },
  {
    name: "MongoDB",
    href: "https://www.mongodb.com/",
    icon: <MongoIcon />,
  },
  {
    name: "GraphQL",
    href: "https://graphql.org/",
    icon: <SiGraphql color="#E535AB" />,
  },
  {
    name: "AWS",
    href: "https://aws.amazon.com/",
    icon: <AWSIcon />,
  },
  {
    name: "Docker",
    href: "https://www.docker.com/",
    icon: <FaDocker color="#2496ED" />,
  },
];

export const Skills: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const { t } = useTranslation("common");

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: (i + 2) * 0.1 },
      }));
    }
  }, [controls, inView]);

  return (
    <Section
      className="md:mt-20 mt-14"
      title={t("skills.title")}
      description={t("skills.description")}
    >
      <Container>
        <div
          className="max-w-3xl mt-8 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6"
          ref={ref}
        >
          {skills.map((skill, i) => (
            <Skill {...skill} key={i} custom={i} controls={controls} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
