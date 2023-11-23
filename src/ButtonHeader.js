

const ButtonHeader = ({reqUrlContent, handleChange}) => {
  return (
    <header>
        <button onClick={()=>handleChange('users')}>Users</button>
        <button onClick={()=>handleChange('posts')}>Posts</button>
        <button onClick={()=>handleChange('comments')}>Comments</button>
    </header>
  )
}

ButtonHeader.defaultProps={title:"Default Title"}


export default ButtonHeader