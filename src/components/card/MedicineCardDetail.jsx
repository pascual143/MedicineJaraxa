import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"
import CircularProgress from "@mui/material/CircularProgress"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import {
  Card,
  Grid,
  TableHead,
  TableCell,
  TableRow,
  Table,
} from "@mui/material"
import { fetchDataDetails } from "../../utils/utils"

const MedicineCardDetail = () => {
  const { term } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // Fetch en utils.js
  useEffect(() => {
    fetchDataDetails(term, setLoading, setError, setData)
  }, [term])

  // Iterar todos los resultados
  const renderDetails = (data) => {
    return Object.keys(data).map((key, index) => {
      const value = data[key]
      if (typeof value === "object" && value !== null) {
        return (
          <Table stickyHeader key={index} sx={{ mb: 2 }}>
            <TableHead variant="outlined">
              <TableRow sx={{ p: 2, px: "5rem" }}>
                <TableCell
                  variant="subtitle1"
                  fontFamily="Helvetica"
                  sx={{
                    mx: "0.3rem",
                    px: "0.3rem",
                    fontWeight: "bold",
                    borderRadius: "20px",
                    backgroundColor: "var(--fith-color)",
                    fontSize: "1.3em",
                  }}
                >
                  {convertKeyToTitle(key)}
                </TableCell>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ ml: 2, mt: 1 }}>{renderDetails(value)}</Box>
              </TableRow>
            </TableHead>
          </Table>
        )
      }
      return (
        <Box key={index} sx={{ mb: 2, mx: "5rem" }}>
          <Card>
            <Box sx={{ p: 2 }}>
              <Typography sx={{ fontFamily: "Roboto" }}>
                <strong>{convertKeyToTitle(key)}:</strong> {value}
              </Typography>
            </Box>
          </Card>
        </Box>
      )
    })
  }

  // Traduccion
  const convertKeyToTitle = (key) => {
    switch (key) {
      case "submissions":
        return "Envíos"
      case "submission_type":
        return "Tipo de envío"
      case "submission_number":
        return "Número de envío"
      case "submission_status":
        return "Estado del envío"
      case "submission_status_date":
        return "Fecha de Estado de Envío"
      case "submission_class_code":
        return "Código de Clase de Envío"
      case "submission_class_code_description":
        return "Descripción Código Clase de Envío"
      case "id":
        return "Identificador"
      case "url":
        return "URL"
      case "date":
        return "Fecha"
      case "type":
        return "Tipo"
      case "label":
        return "Etiqueta"
      case "review_priority":
        return "Prioridad de Revisión"
      case "reference_standard":
        return "Referencia Standard"
      case "dosage_form":
        return "Forma de la Dosis"
      case "marketing_status":
        return "Estado Marketing"
      case "te_code":
        return "Código te"
      case "strength":
        return "Fuerza"
      case "name":
        return "Nombre"
      case "route":
        return "Ruta"
      case "application_number":
        return "Número de Aplicación"
      case "sponsor_name":
        return "Nombre del Sponsor"
      case "brand_name":
        return "Nombre de la Marca"
      case "generic_name":
        return "Nombre Genérico"
      case "manufacturer_name":
        return "Nombre del Fabricante"
      case "product_ndc":
        return "Producto NDC"
      case "product_type":
        return "Tipo de Producto"
      case "substance_name":
        return "Nombre de la Sustancia"
      case "package_ndc":
        return "Paquete NDC"
      case "product_number":
        return "Número de Producto"
      case "reference_drug":
        return "Referencia del Medicamento"
      case "active_ingredients":
        return "Ingrediente Activo"
      default:
        return key
    }
  }

  return (
    <Box>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="200px"
        >
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error" align="center" mt={2}>
          {error}
        </Typography>
      ) : !data ? (
        <Typography variant="body1" align="center">
          No hay información disponible para este medicamento.
        </Typography>
      ) : (
        <Card sx={{ borderWidth: "2px", mb: 2 }}>
          <Box
            sx={{
              m: "auto",
              p: 2,
              width: "80%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h5"
              fontFamily="Roboto"
              sx={{
                marginBottom: 2,
                py: 1,
                pl: "5rem",
                borderRadius: "100px",
                backgroundColor: "var(--fith-color)",
              }}
            >
              Detalles para {term}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {renderDetails(data)}
              </Grid>
            </Grid>
          </Box>
        </Card>
      )}
    </Box>
  )
}

//Proptypes
MedicineCardDetail.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.string,
}

export default MedicineCardDetail
