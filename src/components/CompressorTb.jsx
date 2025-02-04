import React from "react";
import styled from "styled-components";

const data = [
  {
    name: "Compressor FCF ABD...",
    health_status: "70",
    co2e: 5.6,
    tr: 123,
  },
  {
    name: "Compressor CPF JB-01",
    health_status: "50",
    co2e: 123,
    tr: 123,
  },
  {
    name: "Compressor GPI 01",
    health_status: "60",
    co2e: 123,
    tr: 123,
  },
  {
    name: "Compressor GFI 4",
    health_status: "70",
    co2e: 123,
    tr: 123,
  },
  {
    name: "Compressor AGF 5",
    health_status: "80",
    co2e: 123,
    tr: 123,
  },
];
const CompressorTb = () => {
  return (
    <>
      <TableContainer>
        <Table>
          <Thead>
            <tr>
              <Th>Asset Name</Th>
              <Th>Health status</Th>
              <Th>Co2e</Th>
              <Th>
                <Tree>Tr</Tree>
              </Th>
            </tr>
          </Thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <Td>{item.name}</Td>
                <Td>
                  <Healthbar width={item.health_status} />
                </Td>
                <Td>{item.co2e}</Td>
                <Td>{item.tr}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CompressorTb;

const TableContainer = styled.div`
  width: 100%;
  background-color: rgb(255, 255, 255);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
`;

const Thead = styled.thead`
  background-color: hsl(216, 46.7%, 88.2%);
`;

const Th = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 2px solid #ddd;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const Healthbar = styled.div`
  width: 100%;
  height: 30px;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ width }) => width}%;
    height: 100%;
    border-radius: 5px;

    background-color: #79acff;
  }
`;

const Tree = styled.span`
  font-weight: 600;
  color: green;
`;
