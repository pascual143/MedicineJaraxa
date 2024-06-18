import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Card, Container, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",  // Ajustar altura de la pantalla completa
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        Bienvenido a App de búsqueda de medicamentos
      </Typography>
      <Box sx={{ width: "33%",  }}>
        <Link to="/medications">
          <Button fullWidth>
            <Card sx={{ padding: "10px", borderRadius: "20px",boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)" }}>
              <Typography variant="h5" sx={{ margin: "7px" }}>
                Busca Medicinas
              </Typography>
            </Card>
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
