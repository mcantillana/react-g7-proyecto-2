import React, { useEffect, useState } from 'react';
import { Layout } from '../components/common/Layout';
import { Episode } from '../components/Episode';
import { connect } from 'react-redux';
import { getEpisodesAction } from '../store/episodes/action';
import { Row, Col, Button} from 'react-bootstrap';
import { Spinner } from '../components/Spinner';
import { TitleSection } from '../components/common/TitleSection';

import { FaAngleDown } from "react-icons/fa";



const EpisodesPage = props => {
    
    const { getEpisodes, episodes } = props;
    
    const [ loadmore, setLoadmore ] = useState(true);


    // COmponent did mount
    useEffect(()=> {
        getEpisodes();
    },[])

    // component update
    useEffect(() => {

        if (episodes.info) {
            const more = episodes.info.next.length ? true : false
            setLoadmore(more)
        }

    }, [loadmore])

    const handlerLoadMore = event => {
        event.preventDefault();

        if (episodes.info) {
            getEpisodes(episodes.info.next);
            setLoadmore(true);
        } 
        
    }
    console.log(props.users)

    return (
       <Layout>
            <TitleSection title="List Episodes" />
            <Row>
                {
                    episodes.data && episodes.data.map((episode, key) => {
                        return (
                            <Col xs="3" className="mb-3" key={key}>
                                <Episode {...episode} />
                            </Col>
                        );
                    })
                }
                {
                    loadmore && 
                        <Col xs="12">
                        {
                            episodes.loading ?
                                <Spinner className="text-center" />
                            :
                                <Button variant="outline-secondary" block onClick={handlerLoadMore}>
                                    <FaAngleDown /> Load More
                                </Button>
                        }
                        </Col>
                }
            </Row>
        </Layout>
    );
}


const mapStateToProps = state => state.episodes

const mapDispatchToProps = dispatch => ({
    getEpisodes: payload => dispatch(getEpisodesAction(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(EpisodesPage);

