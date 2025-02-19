import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import api from "./axios/axios";

function App() {
  const [evento, setEvento] = useState([]);

  async function getEventos() {
    await api.getEvento().then(
      (response) => {
        console.log(response.data.events);
        setEvento(response.data.events);
      },
      (error) => {
        console.log("Erro", error);
      }
    );
  }

  const listEvento = evento.map((event) => {
    return (
      <TableRow key={event.idEvento}>
        <TableCell align="center">{event.nome}</TableCell>
        <TableCell align="center">{event.descricao}</TableCell>
        <TableCell align="center">{event.data_hora}</TableCell>
        <TableCell align="center">{event.local}</TableCell>
      </TableRow>
    );
  });

  useEffect(() => {
    getEventos();
  }, []);

  return (
    <div>
      <h5>Lista de usuarios</h5>
      <TableContainer component={Paper} style={{ margin: "2px" }}>
        <Table size="small">
          <TableHead style={{ backgroundColor: "blue", borderStyle: "solid" }}>
            <TableRow align="center">
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">descriçao</TableCell>
              <TableCell align="center">datahora</TableCell>
              <TableCell align="center">local</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{listEvento}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
