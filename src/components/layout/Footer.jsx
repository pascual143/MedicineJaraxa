import React from "react"
import { Box, Container, Grid, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box
      sx={{
        height: "auto",
        backgroundColor: "var(--fith-color)",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        position: "inherit",
        bottom:"0px"
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              Jaraxa
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | Pascual Vila`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
