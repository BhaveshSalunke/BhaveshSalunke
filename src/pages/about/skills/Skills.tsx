import { FC } from "react";

import { Box } from "@chakra-ui/react";

import { configs } from "shared/content/Content";
import { Tags } from "shared/tags/Tags";
import { SectionTitle } from "../common/title/Title";

export const Skills: FC = () => {
    return (
        <>
            <br />
            {configs.about.skills.map((skill) => (
                <Box p="0" mb="4" key={`skills-${skill.title}`}>
                    <SectionTitle title={skill.title} />
                    <Tags id={`skills-tags-${skill.title}`} tags={skill.tools} />
                </Box>
            ))}
        </>
    );
};
