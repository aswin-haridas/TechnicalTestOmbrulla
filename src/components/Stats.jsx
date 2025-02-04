import React from "react";
import styled from "styled-components";

const Stats = () => {
  const cards = [
    {
      value: "31418",
      desc: "Generator's fuel Consumption (litre)",
      color: "#1E90FF",
    },
    {
      value: "43170",
      desc: "Compressor's Energy Consumption (KWh)",
      color: "#DC143C",
    },
    {
      value: "84828.6",
      desc: "Generator's Carbon Consumption (KG)",
      color: "#20B2AA",
    },
    {
      value: "20289.9",
      desc: "Compressor's Carbon emmision (KG)",
      color: "#FFA500",
    },
  ];

  return (
    <Wrapper>
      {cards.map((card, index) => (
        <Card key={index} color={card.color}>
          <CardTitle color={card.color}>{card.value}</CardTitle>
          <CardDesc>{card.desc}</CardDesc>
        </Card>
      ))}
    </Wrapper>
  );
};

export default Stats;

const Wrapper = styled.div`
  border: 1px solid rgb(134, 134, 134);
  border-radius: 15px;
  display: flex;
  padding: 15px;
  margin: 20px;
  background-color: rgb(255, 255, 255);
`;

const Card = styled.div`
  border: 2px solid ${({ color }) => color};
  border-radius: 10px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`;
const CardTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: ${({ color }) => color};
`;
const CardDesc = styled.div`
  text-align: center;
  font-size: 14px;
`;
