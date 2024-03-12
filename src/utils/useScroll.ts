import { useEffect, useState } from "react";

export const SkillPageId = "page-skill";
export const AboutPageId = "page-about";

export enum Page {
    About = "about",
}

const pageIds = [SkillPageId, AboutPageId];

export const useScroll = () => {
    const [page, setPage] = useState<string>("");

    const scrollHandler = () => {
        const documentTop = document.scrollingElement?.scrollTop!;
        const pages = pageIds.map((page) => document.getElementById(page));
        let newPage = "";

        pages.forEach((page) => {
            if (page) {
                const top = page.offsetTop;
                const height = page.clientHeight;

                if (top < documentTop && top + height > documentTop) {
                    newPage = page.id;
                }
            }
        });

        setPage(newPage);
    };

    useEffect(() => {
        setTimeout(() => {
            scrollHandler();
        }, 100);

        document.addEventListener("scroll", scrollHandler);

        return () => {
            document.removeEventListener("scroll", () => {});
        };
    }, []);

    return page;
};
