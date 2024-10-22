// Start coding here

function Button({type}) {
  return(
    <div>
        {type === 'primary'? (
            <button style={{background:'#074EE8',padding:'16px 32px',width:'12rem'}}>{type}</button>
        ):(
            <button style={{background:'#07A4E8',padding:'16px 32px',width:'12rem'}}>{type}</button>
        )}
    </div>
    
  )
}

export default Button