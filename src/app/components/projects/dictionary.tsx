import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import Box from '@mui/material/Box';
import LinkIcon from '@mui/icons-material/Link';

import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Dictionary() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Box
                    fontSize={{ xs: "1.5rem", sm: "1.8rem", md: "2rem" }}
                    style={{
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderBottom: "1px solid rgb(26, 26, 26)",
                        padding: "0rem 1rem 1rem 0rem",
                        margin: "0rem 0rem 2rem 0rem",
                        marginTop: "1rem"
                    }}
                >
                    Dictionary App
                </Box>

                <Accordion style={{ background: "rgba(26,26,26)", color: "white", borderRadius: "20px" }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary style={{ color: "white" }} aria-controls="panel1d-content" id="panel1d-header">
                        <Typography style={{ color: "white", fontWeight: 500, fontSize: "1.1rem" }}>About Project</Typography>
                    </AccordionSummary>
                    <AccordionDetails

                        style={{ background: "rgba(20, 20, 20)", color: "white", borderRadius: " 0px 0px 20px 20px", fontSize: "1rem" }}>
                        <Typography
                            textAlign={{ xs: "start", sm: "justify", md: "justify" }} >
                            Designed and implemented a visually appealing front-end dictionary website with API integration for seamless word
                            searches and access to comprehensive lexical data, enhancing user vocabulary and language comprehension.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    margin={"2rem 0rem 1rem 0rem"}
                >
                    <Box
                        display={"flex"}
                        justifyContent={"center"}
                        gap={{ xs: "0.5rem", sm: "1rem", md: "1rem" }}
                        margin={"0rem 0.9rem"}
                        flexDirection={{ xs: "row", sm: "row", md: "row", lg: "row" }}>

                        <img
                            width={"50%"}
                            style={{ borderRadius: "12px", border: "1px solid rgb(26, 26, 26)" }}
                            src="./dictionary-1.png" alt="dictionary" />

                        <img
                            width={"50%"}
                            style={{ borderRadius: "12px", border: "1px solid rgb(26, 26, 26)" }}
                            src="./dictionary.png" alt="dictionary" />
                    </Box>
                </Box>

                <Box
                    display={"flex"}
                    justifyContent={"start"}
                    alignItems={"center"}
                    margin={"1rem 0rem"}
                    style={{ gap: "1rem" }}
                    fontSize={{ xs: "0.8rem", sm: "1.1rem", md: "1.2rem" }}
                    width={"100%"}
                    height={"50px"}
                    padding={"0rem 1rem"}
                    borderRadius={"20px"}
                    fontWeight={"300"}
                    sx={{ background: "rgba(26,26,26)" }}
                >
                    <a style={{ display: 'flex', justifyContent: "center", alignItems: "center" }} href="https://pankajsarawag.github.io/Dictionary/"><LinkIcon style={{ color: "20a4b6", fontSize: "2rem", marginRight: "1rem" }} /><u>pankajsarawag.github.io/Dictionary</u></a>
                </Box>
                <h1 style={{ fontWeight: 600, fontSize: "1.4rem", margin: "1rem 0rem" }}>Technologies Used</h1>
                <div className='technology'>
                    <div className="tech-details">
                        <img src="/html.png" alt="html" />
                        <h1>HTML</h1>
                    </div>

                    <div className="tech-details">
                        <img src="/css-3.png" alt="css" />
                        <h1>CSS</h1>
                    </div>

                    <div className="tech-details">
                        <img src="/java-script.png" alt="java-scrip" />
                        <h1>JavaScript</h1>
                    </div>

                    <div className="tech-details">
                        <img src="/api.png" alt="API" />
                        <h1>API</h1>
                    </div>

                    <div className="tech-details">
                        <img src="/git.png" alt="git" />
                        <h1>Git Bash</h1>
                    </div>

                    <div className="tech-details">
                        <img src="/github.png" alt="github" />
                        <h1>Github</h1>
                    </div>
                </div>

            </div>
        </>
    );
}