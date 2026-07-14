import clsx from "clsx";
import { MediaIcon } from "components";
import { motion } from "framer-motion";
import React, { FC } from "react";
import { FaGithub } from "react-icons/fa";

import { OutIcon } from "../OutIcon";
import { Props } from "./props";

export const ProjectCard: FC<Props> = ({
  title,
  subtitle,
  description,
  externalLink,
  githubLink,
  technologies,
  imageLink,
  className,
}) => {
  return (
    <motion.div
      className={clsx(
        "relative rounded-xl overflow-hidden dark:bg-gray-900 bg-whiteTheme h-full flex flex-col",
        className
      )}
      style={{
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div className="relative h-56 md:h-72 lg:h-80 overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={imageLink}
          alt={title}
        />
      </div>
      <div className="px-6 py-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold md:text-xl dark:text-white-900 text-black-900">
          {title}
        </h3>
        <p className="mt-1 text-sm font-medium dark:text-white-500 text-black-700">
          {subtitle}
        </p>
        <p className="mt-3 text-sm leading-relaxed dark:text-white-700 text-black-700 flex-1">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium rounded-md dark:bg-white-300 bg-pink dark:text-white-900 text-black-700"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 mt-4">
          {githubLink && (
            <MediaIcon
              icon={<FaGithub className="w-5 h-5" />}
              href={githubLink}
            />
          )}
          {externalLink && (
            <MediaIcon
              icon={<OutIcon className="w-5 h-5 stroke-current" />}
              href={externalLink}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};
