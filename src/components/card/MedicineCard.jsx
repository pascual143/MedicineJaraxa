import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import CircularProgress from "@mui/material/CircularProgress"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import Pagination from "@mui/material/Pagination"
import { fetchDataCard } from "../../utils/utils"

const MedicineCard = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [page, setPage] = useState(1)
  const [resultsPerPage] = useState(8)

  // Fetch url en utils.js
  useEffect((url) => {
    fetchDataCard(url, setLoading, setError, setData)
  }, [])

  // Buscador
  const filteredData = data.filter((item) =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
    setPage(1)
  }

  // calcular el numero de paginas
  const pageCount = Math.ceil(filteredData.length / resultsPerPage)

  // Obener resultados de la pagina anterior
  const paginatedData = filteredData.slice(
    (page - 1) * resultsPerPage,
    page * resultsPerPage
  )

  const handlePageChange = (event, value) => {
    setPage(value)
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        padding: "2rem",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
        Buscador de Medicinas
      </Typography>
      <TextField
        label="Buscar..."
        variant="outlined"
        sx={{
          marginBottom: "2rem",
          width: "100%",
          maxWidth: "600px",
          "&:hover": {
            background: "var(--fith-color)",
          },
        }}
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Card sx={{ width: "100%", maxWidth: "1200px", margin: "20px" }}>
        <CardContent sx={{ margin: "40px" }}>
          {loading ? (
            <Box display="flex" justifyContent="center" mt={2}>
              <CircularProgress />
            </Box>
          ) : error ? (
            <Typography color="error" align="center" mt={2}>
              {error}
            </Typography>
          ) : paginatedData && paginatedData.length > 0 ? (
            <>
              <Grid container spacing={2}>
                {paginatedData.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Card
                      sx={{
                        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                        borderRadius: "8px",
                        padding: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "80%",
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6">{item.term}</Typography>
                        <Typography>Número: {item.count}</Typography>
                      </CardContent>
                      <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to={`/medications/${item.term}`}
                        sx={{ marginTop: "10px" }}
                      >
                        + Info
                      </Button>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Box display="flex" justifyContent="center" mt={3}>
                <Pagination
                  count={pageCount}
                  page={page}
                  onChange={handlePageChange}
                  sx={{ margin: "2rem" }}
                />
              </Box>
            </>
          ) : (
            <Typography align="center">Sin resultados</Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  )
}

//Proptypes
MedicineCard.propTypes = {
  fetchDataCard: PropTypes.func.isRequired,
}

export default MedicineCard
