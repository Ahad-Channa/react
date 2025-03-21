
  import 'bootstrap/dist/css/bootstrap.min.css';

const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Strawberry"];
function List(){

return(
    <>
        <ul className="list-group">
            {fruits.map((fruit) => (
                <li className="list-group-item" key={fruit}>{fruit}</li>
            ))}
        </ul>
    </>
);

}

export default List;