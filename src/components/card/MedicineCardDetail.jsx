import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import {
  Card,
  Grid,
  TableHead,
  TableCell,
  TableRow,
  Table,
} from "@mui/material";
import { fetchDataDetails } from "../../utils/utils";

const MedicineCardDetail = () => {
  const { term } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDataDetails(term, setLoading, setError, setData);
  }, [term]);

  const renderDetails = (data) => {
    return Object.keys(data).map((key, index) => {
      const value = data[key];
      if (typeof value === "object" && value !== null) {
        return (
          <Table key={index} sx={{ mb: 2 }}>
            <TableHead variant="outlined">
              <TableRow>
                <TableCell
                  variant="subtitle1"
                  fontFamily="Helvetica"
                  sx={{
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
        );
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
      );
    });
  };

  const convertKeyToTitle = (key) => {
    const translations = {
      submissions: "Envíos",
      submission_type: "Tipo de envío",
      submission_number: "Número de envío",
      submission_status: "Estado del envío",
      submission_status_date: "Fecha de Estado de Envío",
      submission_class_code: "Código de Clase de Envío",
      submission_class_code_description: "Descripción Código Clase de Envío",
      id: "Identificador",
      url: "URL",
      date: "Fecha",
      type: "Tipo",
      label: "Etiqueta",
      review_priority: "Prioridad de Revisión",
      reference_standard: "Referencia Standard",
      dosage_form: "Forma de la Dosis",
      marketing_status: "Estado Marketing",
      te_code: "Código te",
      strength: "Fuerza",
      name: "Nombre",
      route: "Ruta",
      application_number: "Número de Aplicación",
      sponsor_name: "Nombre del Sponsor",
      brand_name: "Nombre de la Marca",
      generic_name: "Nombre Genérico",
      manufacturer_name: "Nombre del Fabricante",
      product_ndc: "Producto NDC",
      product_type: "Tipo de Producto",
      substance_name: "Nombre de la Sustancia",
      package_ndc: "Paquete NDC",
      product_number: "Número de Producto",
      reference_drug: "Referencia del Medicamento",
      active_ingredients: "Ingrediente Activo",
    };
    return translations[key] || key;
  };

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
                pl: "1rem",
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
  );
};

MedicineCardDetail.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default MedicineCardDetail;
