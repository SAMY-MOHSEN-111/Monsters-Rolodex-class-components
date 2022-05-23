import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";
class CardList extends Component {
  render() {
    return (
      <div className="card-list">
        {this.props.monsters.map((monster) => {
          return <Card monster={monster} key={monster.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
