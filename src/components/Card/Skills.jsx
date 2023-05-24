import { skillsData } from "../../Data";
import { Container, SkillDiv,SkillContent,Icon } from "./CardElements";

export const Skills = () => {
  return (
    <Container>
      <SkillDiv>
        {skillsData.map((item, index) => (
          <SkillContent key={index}>
            <p>{item.title}</p>
            <Icon>

            {item.icon.map((icon, index) => (
              <div key={index}>{icon}</div>
              ))}
            </Icon>
          </SkillContent>
        ))}
      </SkillDiv>
    </Container>
  );
};
