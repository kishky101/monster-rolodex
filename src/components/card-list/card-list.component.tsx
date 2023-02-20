import CardContainer from "../card-container/card-container.component";
import './card-list.styles.css'
import { Monsters } from "../../App";

type CardListProps = {
    monsters: Monsters[];
}

const CardList = ({monsters}: CardListProps) => 
     (
    <div className="card-list">
        { monsters.map(monster => {
                return (
                    <CardContainer monster = {monster} key = {monster.id} />
                )
            })
        }
    </div>
    )

 
export default CardList;