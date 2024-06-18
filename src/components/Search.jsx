import React, { useState } from "react"
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search"
import InputBase from "@mui/material/InputBase"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import CircularProgress from "@mui/material/CircularProgress"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSearch = async (event) => {
    setSearchTerm(event.target.value)
    if (event.target.value.length < 3) {
      setResults([])
      return
    }
    setLoading(true)
    setError("")
    try {
      const response = await axios.get(
        `/api/animalandveterinary/event.json?search=${event.target.value}`
      )
      setResults(response.data.results)
    } catch (error) {
      console.error("Error fetching data: ", error)
      setError(error.message || "Something went wrong while fetching data")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: '20px',
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexFlow: "column",
            borderRadius: "20px",
            backgroundColor: "var(--first-color)",
            boxShadow: '4px 4px rgba(0, 0, 0, 0.2)',
            width: "100%",
            "@media (min-width:600px)": {
              marginLeft: 1,
              width: "auto",
            },
          }}
        >
          <Box
            sx={{
              padding: "0 16px",
              height: "100%",
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Typography sx={{ margin: "auto" }}>
              Busca datos públcos sobre medicamentos, dispositivos y alimentos.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexFlow: "row",
              margin: "8px",
              padding: "0px 25px",
              borderRadius: "20px",
              borderStyle: "double",
              borderColor: "var(--fourth-color)",
            }}
          >
            <SearchIcon />
            <InputBase
              placeholder="Buscar…"
              value={searchTerm}
              onChange={handleSearch}
              sx={{
                color: "inherit",
                padding: "8px 8px 8px 0",
                paddingLeft: "calc(1em + 32px)",
                transition: "width 0.3s",
                width: "100%",
                "@media (min-width:960px)": {
                  width: "20ch",
                },
              }}
              inputProps={{ "aria-label": "buscar" }}
            />
          </Box>
        </Box>
      </Box>
      {loading ? (
        <Box display="flex" justifyContent="center" mt={2}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error" align="center" mt={2}>
          {error}
        </Typography>
      ) : (
        <List>
          {results.map((result, index) => (
            <ListItem key={index}>
              <ListItemText primary={result.original_receive_date} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  )
}

export default SearchComponent
