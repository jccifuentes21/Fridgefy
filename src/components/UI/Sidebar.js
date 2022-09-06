import classes from './Sidebar.module.css'

const Sidebar = (props) => {
  return (
    <div className={classes['recipes-sidebar']}>
        <div><h2>{props.title}</h2> </div>
        <div>
            {props.children}
        </div>      
 
    </div>
  )
}

export default Sidebar