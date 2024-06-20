import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"
import CircularProgress from "@mui/material/CircularProgress"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import { Card, Grid } from "@mui/material"

const MedicineCardDetail = () => {
  const { term } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError("")
      try {
        const url = `https://api.fda.gov/drug/drugsfda.json?search=products.route.exact:"${term}"`
        const response = await fetch(url)
        const responseJson = await response.json()
        if (responseJson.results && responseJson.results.length > 0) {
          setData(responseJson.results[0])
        } else {
          setData(null)
        }
      } catch (error) {
        console.error("Error fetching data: ", error)
        setError(error.message || "Something went wrong while fetching data")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [term])

  // Mostrar todos los resultados del medicamento

  const renderDetails = (data) => {
    return Object.keys(data).map((key, index) => {
      const value = data[key]
      if (typeof value === "object" && value !== null) {
        return (
          <Box key={index} sx={{ mb: 2 }}>
            <Card variant="outlined">
              <Box sx={{ p: 2, px: "5rem" }}>
                <Typography
                  variant="subtitle1"
                  fontFamily="Helvetica"
                  sx={{
                    mx: "5rem",
                    px: "5rem",
                    fontWeight: "bold",
                    borderRadius: "100px",
                    backgroundColor: "var(--fith-color)",
                    fontSize: "1.3em",
                  }}
                >
                  {convertKeyToTitle(key)}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ ml: 2 }}>{renderDetails(value)}</Box>
              </Box>
            </Card>
          </Box>
        )
      }
      return (
        <Box key={index} sx={{ mb: 2, mx: "5rem" }}>
          <Card>
            <Box sx={{ p: 2 }}>
              <Typography sx={{fontFamily:"Roboto"}}>
                <strong>{convertKeyToTitle(key)}:</strong> {value}
              </Typography>
            </Box>
          </Card>
        </Box>
      )
    })
  }

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
        return "nombre"
      case "route":
        return "ruta"
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
        return "Producto ndc"
      case "product_type":
        return "Tipo de Producto"
      case "substance_name":
        return "Nombre de la Sustancia"
      case "package_ndc":
        return "Paquete ndc"
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
            <Typography variant="h5" fontFamily="Roboto" sx={{ marginBottom: 2 }}>
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

MedicineCardDetail.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.string,
}

export default MedicineCardDetail
