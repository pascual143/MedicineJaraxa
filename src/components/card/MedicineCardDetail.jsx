import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card } from "@mui/material";

const MedicineCardDetail = () => {
  const { term } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const url = `https://api.fda.gov/drug/drugsfda.json?search=products.route.exact:"${encodeURIComponent(
          term
        )}"`;
        const response = await fetch(url);
        const responseJson = await response.json();
        if (responseJson.results && responseJson.results.length > 0) {
          setData(responseJson.results[0]);
        } else {
          setData(null);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError(
          error.message || "Something went wrong while fetching data"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [term]);

  const renderDetails = (data) => {
    return Object.keys(data).map((key, index) => {
      const value = data[key];
      if (typeof value === "object" && value !== null) {
        return (
          <Box key={index} sx={{ marginBottom: 1, borderWidth: "2px" }}>
            <hr />
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {key}
            </Typography>
            <Box sx={{ marginLeft: 2 }}>
              {renderDetails(value)}
            </Box>
          </Box>
        );
      }
      return (
        <Box key={index} sx={{ marginBottom: 1, borderWidth: "2px" }}>
          <Typography variant="body1">
            <strong>{key}:</strong> {value}
          </Typography>
        </Box>
      );
    });
  };

  return (
    <Box>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
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
        <>
        <Card sx={{ borderWidth: "2px" }}>

          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Detalles para {term}
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          {renderDetails(data)}
        </Card>
        </>
      )}
    </Box>
  );
};

export default MedicineCardDetail;
