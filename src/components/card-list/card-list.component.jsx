import { Component } from "react";
import { Row, Col } from "reactstrap";

import Card from "./card.component.jsx";
import "./card-list.styles.css";

class CardList extends Component {
    render() {
        const { monsters } = this.props;

        return (
            <Row noGutters>
                {monsters.map((monster) => {
                    return (
                        <Col className="p-1" xs="12" sm="12" md="4" lg="3" xl="3" xxl="3">
                            <Card monster={monster} />{" "}
                        </Col>
                    );
                })}
            </Row>
        );
    }
}

export default CardList;
