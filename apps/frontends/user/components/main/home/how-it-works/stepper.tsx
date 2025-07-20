import { HOW_IT_WORKS } from "@/constants";
import { motion } from "framer-motion";
import React, { Fragment } from "react";

function Stepper({ activeStep }: { activeStep: number }) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center">
        {HOW_IT_WORKS.map((_, index) => (
          <Fragment key={index}>
            <div
              className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-semibold text-white ${
                activeStep >= index ? "bg-primary" : "bg-primary/50"
              } transition-all duration-300`}
            >
              {index + 1}
            </div>
            {index < HOW_IT_WORKS.length - 1 && (
              <motion.div
                className="h-1 w-28 mx-6 rounded-full"
                animate={{
                  backgroundColor:
                    activeStep > index
                      ? "rgb(34 197 94)"
                      : "rgba(34, 197, 94, 0.5)",
                }}
              />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Stepper;
