import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const MedicineCard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `https://api.fda.gov/drug/drugsfda.json?count=products.route.exact`
        );
        const responseJson = await response.json();
        // console.log("API Response:", responseJson); 
        setData(responseJson.results);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError(error.message || "Something went wrong while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Card sx={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)", borderRadius: "10px" }}>
      <CardContent>
        <TextField
          label="Buscador de Medicinas"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ marginBottom: "20px" }}
        />
        {loading ? (
          <Box display="flex" justifyContent="center" mt={2}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error" align="center" mt={2}>
            {error}
          </Typography>
        ) : (
          filteredData && filteredData.length > 0 ? (
            <Grid container spacing={4}>
              {filteredData.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Card sx={{ width: '100%', boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)" }}>
                    <CardContent>
                      <Typography variant="h6">{item.term}</Typography>
                      <Typography>Número: {item.count}</Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to={`/medications/${item.term}`}
                        sx={{ marginTop: "10px" }}
                      >
                        + Info
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography align="center">Sin resultados</Typography>
          )
        )}
      </CardContent>
    </Card>
  );
};

export default MedicineCard;
