import { Container, Section } from "components";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { MediaIcon } from "../MediaIcon";

export const Contact: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Section
      className="mt-20 mb-16 md:mt-28"
      title={t("contact.title")}
      description={t("contact.description")}
    >
      <Container>
        <div className="mt-6 flex flex-col gap-4">
          <a
            href="mailto:tahjib.alsakin@gmail.com"
            className="text-base font-medium md:text-xl hover:text-blue-900 text-black-900 dark:text-white-900 transition-colors"
          >
            tahjib.alsakin@gmail.com
          </a>
          <div className="flex items-center gap-4 mt-2">
            <MediaIcon
              icon={<FaGithub className="w-6 h-6 md:w-7 md:h-7" />}
              href="https://github.com/ta-sakin"
              className="mr-2"
            />
            <MediaIcon
              icon={<FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />}
              href="https://www.linkedin.com/in/ta-sakin/"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
