import { Container, Section } from "components";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";

export const Contact: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Section
      className="mt-20 mb-16 md:mt-28"
      title={t("contact.title")}
      description={t("contact.description")}
    >
      <Container>
        <div className="mt-4">
          <a
            href="mailto:tahjib.alsakin@gmail.com"
            className="text-base font-medium md:text-xl hover:text-blue-900 text-black-900 dark:text-white-900 "
          >
            tahjib.alsakin@gmail.com
          </a>
        </div>
      </Container>
    </Section>
  );
};
