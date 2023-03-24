import { Box } from "@chakra-ui/react";
import styled from '@emotion/styled';

export const BioSection = styled(Box)`
padding-left: 3.4em;
  text-indent: -3.4em;
  margin-bottom: 20px;
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
  border-bottom: 1px solid;
`

export const BioText = styled.div`
  text-indent: 0;
  padding-top: 0.3em;
`

export const BioSkill = styled.b`
color: #fc5252;
`

export const SkillsList = styled.ul`
padding-left: 2.4em;
`

export const TimerContainer = styled.div`
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const TimerItem = styled.div`
  display: flex;
  gap: 5px;
`;



export const TimerLabel = styled.span`
  font-size: 12px;
  margin-top: 5px;
`;
