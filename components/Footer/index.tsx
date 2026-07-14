import { Container } from "components";
import React, { FC } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer: FC = () => {
  return (
    <Container>
      <div className="flex flex-col items-center py-10 gap-4 dark:text-white-700 text-black-700">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ta-sakin"
            target="_blank"
            className="hover:opacity-80 transition-opacity"
            rel="noreferrer"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ta-sakin/"
            target="_blank"
            className="hover:opacity-80 transition-opacity"
            rel="noreferrer"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </Container>
  );
};
