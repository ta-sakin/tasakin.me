import { Container, Section } from "components";
import { useAnimation } from "framer-motion";
import { useTranslation } from "next-i18next";
import React, { FC, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import {
  SiGraphql,
  SiHasura,
  SiMicrosoftazure,
  SiNodedotjs,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";

import { MongoIcon, PostgresIcon, TsIcon } from "./libs/Icons";
import { Skill } from "./libs/Skill";

const skills = [
  {
    name: "Typescript",
    href: "https://www.typescriptlang.org/",
    icon: <TsIcon />,
  },
  {
    name: "React",
    href: "https://reactjs.org/",
    icon: <FaReact color="#00D8FF" />,
  },
  {
    name: "Node.js",
    href: "https://nodejs.org/",
    icon: <SiNodedotjs color="#539E43" />,
  },
  {
    name: "MongoDB",
    href: "https://www.mongodb.com/",
    icon: <MongoIcon />,
  },
  {
    name: "Postgres",
    href: "https://www.postgresql.org/",
    icon: <PostgresIcon />,
  },
  {
    name: "GraphQL",
    href: "https://graphql.org/",
    icon: <SiGraphql color="#E535AB" />,
  },
  {
    name: "Hasura",
    href: "https://hasura.io/",
    icon: <SiHasura color="#1EB4D4" />,
  },
  {
    name: "Azure",
    href: "https://portal.azure.com/",
    icon: <SiMicrosoftazure color="#007fff" />,
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
        transition: { delay: (i + 2) * 0.2 },
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
          className="max-w-lg mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6"
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
