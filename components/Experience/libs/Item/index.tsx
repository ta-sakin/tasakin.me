import clsx from "clsx";
import { motion } from "framer-motion";
import React, { FC } from "react";

import { Props } from "./props";

export const Item: FC<Props> = ({
  title,
  place,
  date,
  last,
  first,
  controls,
  custom,
  description,
  className,
}: Props) => {
  return (
    <motion.div
      className={clsx(
        "relative flex items-center",
        !first && "mt-14",
        className
      )}
      initial="initial"
      variants={{
        initial: {
          opacity: 0,
        },
      }}
      animate={controls}
      custom={custom}
    >
      {!last && (
        <div
          className="absolute h-20 top-14 w-0.5 dark:bg-white-300 bg-white-700"
          style={{ left: "0.2rem" }}
        />
      )}
      <div className="w-2 h-2 bg-gray-700 rounded-full dark:bg-white-700 shrink-0" />
      <div className="ml-8 dark:text-white-700 text-black-700">
        <p className="text-base font-medium">{title}</p>
        <p className="text-base">{place}</p>
        <p className="text-sm mt-0.5 dark:text-white-500">{date}</p>
        {description && description.length > 0 && (
          <ul className="mt-2 space-y-1">
            {description.map((item, i) => (
              <li
                key={i}
                className="text-sm dark:text-white-500 text-black-700 leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};
