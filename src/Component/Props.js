function Props({ data }) {
  console.log(data);
  return (
    <div className="props-div">
      <div>
        <table id="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Color</th>
              <th>Value</th>
            </tr>
          </thead>
         
            {data.map((item) => {
                 <tbody>
              <tr>
                <td>{item.id}</td>
                <td>{item.color}</td>
                <td>{item.value}</td>
              </tr>;
              
          </tbody>
            })}
          <tr></tr>
        </table>
      </div>
    </div>
  );
}
export default Props;
