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

export default function Listify() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Box
                    fontSize={{ xs: "1.2rem", sm: "1.8rem", md: "2rem" }}
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
                    Add your secrets
                </Box>

                <Accordion style={{ background: "rgba(26,26,26)", color: "white", borderRadius: "20px" }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary style={{ color: "white" }} aria-controls="panel1d-content" id="panel1d-header">
                        <Typography style={{ color: "white", fontWeight: 500, fontSize: "1.1rem" }}>About Project</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ background: "rgba(20, 20, 20)", color: "white", borderRadius: " 0px 0px 20px 20px", fontSize: "1rem" }}>
                        <Typography textAlign={{ xs: "start", sm: "justify", md: "justify" }} style={{ marginBottom: 10 }}>
                         Developed an advanced, consumer-focused online platform enhancing secure management of sensitive information by implementing robust authentication mechanisms and a queue structure for organized and efficient data handling.
                        </Typography>
                        <Typography textAlign={{ xs: "start", sm: "justify", md: "justify" }} >
                        Sign in and share your secrets anonymously—your name will never be displayed!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                
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
                    <a style={{ display: 'flex', justifyContent: "center", alignItems: "center" }} href="https://listify-mieg.onrender.com/"><LinkIcon style={{ color: "20a4b6", fontSize: "2rem", marginRight: "1rem" }} /><u>Deployment Link</u></a>
                </Box>

                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    margin={"2rem 0rem 1rem 0rem"}
                >
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        gap={{ xs: "1rem", sm: "2rem", md: "3rem" }}
                        margin={"0rem 0.9rem"}
                        flexDirection={{ xs: "row", sm: "row", md: "row", lg: "row" }}>

                        <img
                            width={"50%"}
                            style={{ borderRadius: "12px", border: "1px solid rgb(26, 26, 26)" }}
                            src="./Listify1.png" alt="Listifyy" />
                        <img
                            width={"50%"}
                            style={{ borderRadius: "12px", border: "1px solid rgb(26, 26, 26)" }}
                            src="./Listify2.png" alt="Listifyy" />
                    </Box>
                </Box>

                
                
                <h1 style={{ fontWeight: 600, fontSize: "1.4rem", margin: "1rem 0rem" }}>Technologies Used</h1>
                <div className='technology'>
                    <div className="tech-details">
                        <img src="/express.png" alt="express" />
                        <h1>Express Js</h1>
                    </div>

                    <div className="tech-details">
                        <img src="/node.png" alt="node" />
                        <h1>node Js</h1>
                    </div>

                    <div className="tech-details">
                        <img src="/mongobd.png" alt="mongodb" />
                        <h1>mongoDB</h1>
                    </div>

                    <div className="tech-details">
                        <img src="/java-script.png" alt="java-scrip" />
                        <h1>JavaScript</h1>
                    </div>
                    
                    <div className="tech-details">
                        <img src="/css-3.png" alt="css" />
                        <h1>CSS</h1>
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

                {/* <h1 style={{ fontSize: "1.3rem", fontWeight: 600, margin: "1.5rem 0rem 1rem 0rem" }}>Demo Video</h1>
                <video width="100%" height="auto" controls style={{ marginBottom: "-0.5rem" }}>
                    <source src="./demo-yt.mp4" type="video/mp4" />
                </video> */}
            </div>
        </>
    );
}