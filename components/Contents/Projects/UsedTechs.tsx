import Typography, {
  TypographyTypes,
} from "components/StyledComponents/Typography/Typography";
import React from "react";
import Image from "next/image";

import styles from "components/Contents/Projects/UsedTechs.module.scss";
import { Tech, techReact } from "types/Tech";

interface IUsedTechs {
  techs: Array<Tech>;
}
const UsedTechs = ({ techs }: IUsedTechs) => {
  return (
    <article className={styles.used_techs}>
      <Typography
        value="Used"
        type={TypographyTypes.h4}
        bold
        className={styles.title}
      />
      <ul className={styles.techs}>
        {techs.map((usedTech) => (
          <TechItem key={usedTech.id} tech={usedTech} />
        ))}
      </ul>
    </article>
  );
};

/**
 * Used tech list item component
 */
interface IListTemplate {
  tech: Tech;
}
const TechItem = ({ tech }: IListTemplate) => (
  <li key={tech.id} className={styles.tech}>
    <Image
      src={tech.imgUrl}
      alt={tech.name}
      layout="responsive"
      width="44px"
      height="44px"
      quality="100"
    />
    <Typography type={TypographyTypes.h4} value={tech.name} />
  </li>
);

export default UsedTechs;
