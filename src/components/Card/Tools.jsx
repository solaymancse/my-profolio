import { toolsData } from "../../Data";
import { Container, Icon, SkillContent, SkillDiv } from "./CardElements";

export const Tools = () => {
  return (
    <Container>
      <SkillDiv>
        {toolsData.map((item, index) => (
          <SkillContent key={index}>
            <Icon>
              {item.icon.map((icon,index)=>(
                <Icon key={index}>{icon}</Icon>
              ))}
            </Icon>
          </SkillContent>
        ))}
      </SkillDiv>
    </Container>
  );
};
