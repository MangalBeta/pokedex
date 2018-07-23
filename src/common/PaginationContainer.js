import React from 'react';
import { Col, Button,ButtonToolbar } from 'react-bootstrap/lib/';

const PaginationContainer = ({ totalPages, btnSize, activePage, onSelect, previos, next }) => {
    
    return (
        <Col sm={12} >
            {totalPages > 1 ?
                <div>
                    <ButtonToolbar>

                    {previos  ?  <Button onClick={onSelect} 
                        bsStyle={'primary'}>{'Previous'}</Button> : null}
                     &nbsp; &nbsp;
                     <Button onClick={onSelect} 
                        bsStyle={'primary'}>
                        {'Next'}
                    </Button>
                    </ButtonToolbar>

                </div>
                : null}
        </Col>
    )
}

export default PaginationContainer;