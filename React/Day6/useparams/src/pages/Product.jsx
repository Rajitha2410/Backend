

const product = () => {

const Products = {Id:101,Name:"iphone",Price:"1,00,000",
    Brand:"Apple",Category:"Mobile"}


  return (
    <>
    <div className="bg-yellow-400 p-10 text-center">
        <h2>Id: {Products.Id}/</h2>
        <h2>Name: {Products.Name}</h2>
        <h2>Price: {Products.Price}</h2>
        <h2>Brand: {Products.Brand}</h2>
        <h2>Category: {Products.Category}</h2>
    </div>
    </>
    
  )
}

export default product