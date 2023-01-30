

export default  function Props({ data, color, DeleteFunc }) {
  console.log(data);
  return (
    <div className= "props-div">
  
      {data.map((item) => (
        
        
          <div className= "item-div">
            <h3 id="color">{color}</h3>
          <h2>ID: {item.id} </h2>
          <h2>color: {item.color }</h2>
          <h2>Value: {item.value}</h2> 
          <button onClick={() => DeleteFunc(item.id)} > Delete</button>
        </div>
      ))}
    </div>
  );
}
 
