import React, { useEffect, useState } from 'react';
import { Layout } from '../components/common/Layout';
import { Character } from '../components/Character';
import { connect } from 'react-redux';
import { getCharactersAction } from '../store/characters/action';
import { Row, Col, Button} from 'react-bootstrap';
import { Spinner } from '../components/Spinner';
import { TitleSection } from '../components/common/TitleSection';

import { FaAngleDown } from "react-icons/fa";


const CharactersPage = props => {
    
    const { getCharacters, characters } = props;
    
    const [ loadmore, setLoadmore ] = useState(true);


    // COmponent did mount
    useEffect(()=> {
        getCharacters();
    },[])

    // component update
    useEffect(() => {

        if (characters.info) {
            const more = characters.info.next.length ? true : false
            setLoadmore(more)
        }

    })

    const handlerLoadMore = event => {
        event.preventDefault();

        if (characters.info) {
            getCharacters(characters.info.next);
            setLoadmore(true);
        } 
        
    }

    return (
       <Layout>
            <TitleSection title="List Characters" />
            <Row>
                {
                    characters.data && characters.data.map((character, key) => {
                        return (
                            <Col xs="3" className="mb-3" key={key}>
                                <Character {...character} />
                            </Col>
                        );
                    })
                }
                {
                    loadmore && 
                        <Col xs="12">
                        {
                            characters.loading ?
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


const mapStateToProps = GlobalState => GlobalState.characters


const mapDispatchToProps = dispatch => ({
    getCharacters: payload => dispatch(getCharactersAction(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage);

