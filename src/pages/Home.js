import React, { Component } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import SqCard from "../comps/SqCard";
import NavbarComp from "../comps/Navbar";
import Footer from "../comps/Footer";
import Spacer from "../comps/Spacer";

const Page = styled.div`
position: relative;
min-height: 100vh;
// display:flex;
// flex-direction:column;
// align-items:center
`;

const Center = styled.div`
margin:10px;
margin-top:20px;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
`;

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            loading: true
        }
    }

    async GetAllProjects() {
        // return await setTimeout(async () => {
        const resp = await axios.get('https://josh-portfolio-backend.herokuapp.com/api/projects')

        // http://localhost:3306/api/projects
        // https://josh-portfolio-backend.herokuapp.com/api/projects

        const projects = resp.data.projects
        console.log("home projects", projects)
        this.setState({ projects, loading: false })
        // }, 750)
    }
    componentDidMount() {
        this.GetAllProjects()
    }

    render() {
        // const history = useHistory();
        const { projects } = this.state
        if (this.state.loading) {
            return (<>

                <Page>
                    <NavbarComp />
                    <div className="CardColumns">
                        <SqCard
                            title={<Skeleton height={300} />}
                            subtitle={<Skeleton height={30} count={4} />}
                        />
                        <SqCard
                            title={<Skeleton height={300} />}
                            subtitle={<Skeleton height={30} count={4} />}
                        />
                        <SqCard
                            title={<Skeleton height={300} />}
                            subtitle={<Skeleton height={30} count={4} />}
                        />
                        <SqCard
                            title={<Skeleton height={300} />}
                            subtitle={<Skeleton height={30} count={4} />}
                        />
                    </div>
                    <Spacer />
                    <Footer />
                </Page>

            </>)
        }
        return (
            <Page>
                <NavbarComp />
                {/* <Name /> */}
                {/* <Center><h3>Checkout some of my projects</h3></Center> */}
                <div className="CardColumns">
                    {projects.map((o, i) => <SqCard
                        key={i}
                        img_src={o.thumb_img}
                        title={o.title || <Skeleton />}
                        subtitle={o.description || <Skeleton />}
                        display="flex"
                        number={o.id}
                    />
                    )}
                </div>
                <Spacer />
                <Footer />
            </Page>
        )
    }
};