import classes from './MyFridge.module.css'

const Cart = () => {
  return (
    <div className={classes['recipes-sidebar']}>
        <div><h2>Cart</h2> </div>
        <div>
          <ul>
            <li><p>Banana</p> <button><img src="./images/close.png"/></button></li>
            <li><p>Apple</p> <button><img src="./images/close.png"/></button></li>
            <li><p>Fish</p> <button><img src="./images/close.png"/></button></li>
            <li><p>Potato</p> <button><img src="./images/close.png"/></button></li>
            <li><p>Rice</p> <button><img src="./images/close.png"/></button></li>
            <li><p>Chicken</p> <button><img src="./images/close.png"/></button></li>
            <li><p>Pao de Queijo</p> <button><img src="./images/close.png"/></button></li>
            <li><p>Coxinha</p> <button><img src="./images/close.png"/></button></li>
          </ul>
        </div>      
 
    </div>
  )
}

export default Cart