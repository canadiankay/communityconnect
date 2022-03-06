import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const requests = [
  {
  name: "Jaden", 
  number: 4162551324,
  description: "Hey, i need help setting up my tv set"
  },
  {
  name: "Nadia", 
  number: 9052551324,
  description: "yeo, i need help setting up my macbook"
  },
  {
  name: "mimi", 
  number: 7052551324,
  description: "Hey, i need help setting up my ikea table"
  },
]



const Dashboard = () => {

  return (
    <TableContainer>
              <Table>
                <TableHead style={{ backgroundColor: "purple" }}>
                  <TableRow>
                    {[
                      "Help Requests",
                    ].map((head) => (
                      <TableCell
                        style={{
                          color: "black",
                          fontWeight: "700",
                        }}
                        key={head}
                        align={head === "E-Wallet Balance" ? "left" : "right"}
                      >
                        {head}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {requests
                    .map((row) => {
                      return (
                        <TableRow hover key={row.name}>
                          <TableCell
                            align="left"
                            component="th"
                            scope="row"
                            style={{
                              display: "flex",
                              gap: 15,
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <span
                                style={{
                                  textTransform: "uppercase",
                                  fontSize: 22,
                                }}
                              >
                                {row.name}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell align="right">
                              <span
                                style={{
                                  color: "red",
                                  textTransform: "uppercase",
                                  fontSize: 22,
                                  fontWeight: 500,
                                }}
                              >
                                {row.description}
                              </span>
  
                          </TableCell>
                          <TableCell
                            align="right"
                            style={{ textTransform: "uppercase", fontSize: 22 }}
                          >
                            {row.number}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
        </TableContainer>
    )
}

export default Dashboard