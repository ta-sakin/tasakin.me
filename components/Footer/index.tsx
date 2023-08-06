import { Container } from "components";
import React, { FC } from "react";
import { FaGithub } from "react-icons/fa";

export const Footer: FC = () => {
  return (
    <Container>
      <p className="flex justify-center gap-2 py-8 text-sm font-light dark:text-white-700 text-black-700">
        <a
          href="https://github.com/ta-sakin/tasakin.me"
          target="_blank"
          className="flex items-center justify-center hover:opacity-80 transition-opacity gap-1"
          rel="noreferrer"
        >
          <FaGithub className="w-5 h-5" />
        </a>
      </p>
    </Container>
  );
};
