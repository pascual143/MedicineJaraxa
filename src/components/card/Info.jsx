import { Box, Typography, Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from "react";

const Info = () => {
    return (
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" , height: "500px"}}>
            <Typography>Aplicacion de prueba para Jaraxa hecha por Pascual Vila</Typography>
            <Box sx={{display: "flex", gap: 2, mt: 2}}>
                <Link href="https://github.com/pascual143" target="_blank" rel="noopener" sx={{display: "flex", alignItems: "center"}}>
                    <GitHubIcon sx={{mr: 1}} />
                    GitHub
                </Link>
                <Link href="https://www.linkedin.com/in/pascual-vila-web-developer/" target="_blank" rel="noopener" sx={{display: "flex", alignItems: "center"}}>
                    <LinkedInIcon sx={{mr: 1}} />
                    LinkedIn
                </Link>
            </Box>
        </Box>
    )
}

export default Info;
