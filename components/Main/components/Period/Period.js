import styled from "styled-components";
import { useCalendarState } from "context/calendar";
import format from "date-fns/format";

const Heading = styled.h2`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.gray[900]};
  font-weight: 600;
`;

const Period = () => {
  const { selectedPeriod = "" } = useCalendarState();

  return <Heading>{format(selectedPeriod, "MMMM, yyyy")}</Heading>;
};

export default Period;
