import classes from './MyFridge.module.css'

const MyFridge = () => {
  return (
    <div className={classes['recipes-sidebar']}>
        <div><h2>My storage</h2> </div>
        <div>
          <ul>
            <li><p>Banana</p> <button><img src="./images/close.png"/></button></li>
            <li><p>Beef</p> <button><img src="./images/close.png"/></button></li>
            <li><p>Fish</p> <button><img src="./images/close.png"/></button></li>
            <li><p>Salsage</p> <button><img src="./images/close.png"/></button></li>
            <li><p>Onions</p> <button><img src="./images/close.png"/></button></li>
            <li><p>Tomato</p> <button><img src="./images/close.png"/></button></li>
            <li><p>Potato</p> <button><img src="./images/close.png"/></button></li>
            <li><p>Muzzarella</p> <button><img src="./images/close.png"/></button></li>
          </ul>
        </div>      
 
    </div>
  )
}

export default MyFridge