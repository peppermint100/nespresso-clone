import { Grid } from "@material-ui/core";
import React from "react";
import ImageOverlayContainer from "../../components/Container/ImageOverlayContainer/ImageOverlayContainer";
import PageContainer from "../../components/Container/PageContainer/PageContainer";
import JumboDark from "./../../assets/jumbo_dark.png";
import JumboTextLogo from "./../../assets/jumbo-text-logo.svg";
import CoffeeTableCard from "./../../assets/coffee_table_card.png";
import VertuoCard from "./../../assets/vertuo_card.png";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const HomePage = () => {
    const classes = useStyles();

    return (
        <PageContainer>
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12}>
                    <ImageOverlayContainer
                        src={JumboDark}
                        width="100%"
                        height="500px"
                    >
                        <div className={classes.jumboContent}>
                            <div className={classes.jumboText}>
                                커피 한 잔으로 떠나는 세계 여행
                            </div>
                            <div className={classes.jumboTextLogo}>
                                <img
                                    src={JumboTextLogo}
                                    alt="world-exploration"
                                />
                            </div>
                        </div>
                    </ImageOverlayContainer>
                </Grid>
                <Grid item sm={12} md={6}>
                    <ImageOverlayContainer
                        src={VertuoCard}
                        width="100%"
                        height="350px"
                    >
                        <div>
                            <div className={classes.jumboContent}>
                                <div className={classes.vertuoText}>
                                    VERTUO 버츄오
                                </div>
                                <Link
                                    className={classes.vertuoLink}
                                    to="/machines"
                                >
                                    자세히 보기
                                </Link>
                            </div>
                        </div>
                    </ImageOverlayContainer>
                </Grid>
                <Grid item sm={12} md={6}>
                    <ImageOverlayContainer
                        src={CoffeeTableCard}
                        width="100%"
                        height="350px"
                    >
                        <div>
                            <div className={classes.jumboContent}>
                                <div className={classes.explorationText}>
                                    NEW 월드 익스플로레이션
                                </div>
                                <Link
                                    className={classes.explorationLink}
                                    to="/capsules"
                                >
                                    자세히 보기
                                </Link>
                            </div>
                        </div>
                    </ImageOverlayContainer>
                </Grid>
            </Grid>
        </PageContainer>
    );
};

export default HomePage;
