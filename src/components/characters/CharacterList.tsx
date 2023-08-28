import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

//Redux
import { charactersSelector } from "@/store/characters/selectors";
import { useAppSelector } from "@/store/hooks";
import { TablePagination } from "@mui/material";

const CharacterList = () => {
  //Redux
  const characters = useAppSelector(charactersSelector);

  const [page, setPage] = useState(0);
  const [charactersPerPage, setCharactersPerPage] = useState(10);

  //Functions
  function handleChangePage(event: unknown, newPage: number) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>) {
    setCharactersPerPage(+event.target.value);
    setPage(0);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-5">
        Rick and Morty Characters
      </h1>
      <div className="flex justify-center">
        <div className="max-w-[700px]">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Species</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {characters
                  .slice(
                    page * charactersPerPage,
                    page * charactersPerPage + charactersPerPage
                  )
                  .map((character) => (
                    <TableRow key={character.id}>
                      <TableCell>{character.id}</TableCell>
                      <TableCell>{character.name}</TableCell>
                      <TableCell>{character.status}</TableCell>
                      <TableCell>{character.species}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[2, 5, 10, 20]}
            component="div"
            count={characters.length}
            rowsPerPage={charactersPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
    </div>
  );
};
export default CharacterList;
