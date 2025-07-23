"use client";
// import { useEffect, useRef } from "react";
// import { annotate, annotationGroup } from "rough-notation";
// import { RoughAnnotationConfig, RoughAnnotationGroup } from "rough-notation/lib/model";

import config from "~/config";
import { useMediaQuery } from "~/hooks";
import { cn } from "~/lib/utils";
import { typo } from "./ui/typograpghy";
import Image from "next/image";
import livethecode from "~/assets/images/live-the-code.webp";
// import { annotationsConfig } from "~/constants/anime";

const AboutSection = () => {
  const isSmallDevice = useMediaQuery("(max-width: 500px)");
  // const annotationRefs = annotationsConfig.map(() =>
  //   useRef<HTMLSpanElement | HTMLAnchorElement>(null)
  // );

  // useEffect(() => {
  //   const annotations = annotationsConfig
  //     .map((config, index) => {
  //       const element = annotationRefs[index]?.current;
  //       if (!element) return null;

  //       const { ref, ...options } = config;
  //       return annotate(element, options as RoughAnnotationConfig);
  //     })
  //     .filter((annotation): annotation is NonNullable<typeof annotation> => annotation !== null);

  //   if (annotations.length === 0) return;

  //   const annotationGroupInstance: RoughAnnotationGroup = annotationGroup(annotations);

  //   if (!isSmallDevice) {
  //     annotationGroupInstance.show();
  //   }

  //   return () => annotationGroupInstance.hide();
  // }, [annotationRefs, isSmallDevice]);

  return (
    <section className="grid gap-8 sm:gap-4 md:grid-cols-3" aria-label="About">
      <div className="order-2 space-y-3 sm:order-1 md:col-span-2">
        <h1 className="font-ubuntu text-lg font-semibold sm:text-xl">
          Paranjay Khachar <span className="text-italic font-normal text-white">Software Developer</span>
        </h1>

        <p className={typo({ variant: "paragraph", font: "sans" })}>
          <span className="text-white">
            About Me <br />
          </span>
          Hello! I'm a software developer passionate about creating innovative solutions and exploring new technologies.
          I enjoy building projects that make a difference and love collaborating with fellow developers.
        </p>

        <p className={typo({ variant: "paragraph", font: "sans" })}>
          <span className="text-white">
            What I do? <br />
          </span>
          I'm experienced in full-stack development, working with modern frameworks and technologies.
          When not coding, I enjoy learning about emerging tech trends and contributing to open-source projects.
        </p>

        <p className={typo({ variant: "paragraph", font: "sans" })}>
          <span className="text-white">
            Let's connect! <br />
          </span>
          I'm always open to interesting conversations about technology, potential collaborations, or just a friendly chat.
          Feel free to reach out if you'd like to work together or share ideas.
        </p>

        <p className={typo({ variant: "paragraph", font: "sans" })}></p>

        <p className={cn(typo({ variant: "paragraph", font: "sans" }), "sm:!mt-4")}>
          I'm <span className="text-white">open to work</span>, freelance, or collaborate.{" "}
          <a
            href={`mailto:${config.social.email}`}
            aria-label="Hire Me"
            className="el-focus-styles text-ring"
          >
            Contact Me.
          </a>
        </p>
      </div>

      <div className="relative order-1 block aspect-square sm:order-2 sm:hidden md:block">
        <div className="absolute inset-0 -z-10 size-full rounded-md bg-[#00adb5]"></div>
        <div className="size-full -rotate-3 transform rounded-md shadow-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-6xl mb-2">👨‍💻</div>
            <div className="text-sm font-medium">Add Your Photo</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
