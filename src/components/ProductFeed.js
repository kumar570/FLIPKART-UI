
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { addToCartAPI, getAllProducts, loadCartProducts, removeFromCart } from "../api"
import "./Style.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import ReactPaginate from 'react-paginate';




export const ProductFeed = () => {
	const navigate = useNavigate();
	const [products,setProducts]=useState([]);

	const [totalRecords, setTotalRecords] = useState(0);
  const [pageNum, setPageNum] = useState(1);
	
	
	
	

	const loadProducts = async () => {
		try {
			const response = await getAllProducts();
			if (response.status == 200) {
				setProducts(response.data)
			}
			console.log(response, "sucess");
		} catch (error) {
			console.log(error, "error");
		}
	}

	useEffect(() => {
		loadProducts()
	}, [])
	

	
	
		const addToCart=async (product_id)=>{
			try{
				const response=await addToCartAPI(product_id)
				if(response.status==200){
					console.log(response.data);
				}
				
				
			}
			catch(error){
				console.log("error",error);
			}
			
		}


		const removeItems=async (product_id)=>{

			try{
				const response=await removeFromCart(product_id)
				if(response.status==200){
					console.log(response.data);
				}
			}catch(error){
				console.log(error,"===error");
			}
		}
		
		
		

		

	 


return (



	
         
		
			

			<div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap',padding:"50px",justifyContent:"space-between" }}>
				{
					products.map((product, index) => {
						const imageURL = product.images && product.images.length > 0 ? product.images[0] : '';

						return (
							<div className="card" style={{ width: "18rem", height: 500, margin: 10 }} >
								<img className="card-img-top"  src={imageURL} alt="Card image cap" style={{ height: 200 }} />
								<div className="card-body">
									<h5 className="card-title">{product.title}</h5>
									<p className="card-text">{(product.description || "").substring(0, 30)}</p>
									<p className="card-text price">Price - {product.price}</p>
								
									<button className="btn btn-primary"onClick={() => addToCart(product.id)} ><ShoppingCartIcon/>Add to Cart</button>
									<div style={{margin:"20px"}}>
									<button style={{backgroundColor:"#F51720"}}onClick={() => removeItems(product.id)} ><DeleteIcon/>Delete from Cart</button>
									</div>
								
								</div>
							</div>
						)
					})
				}









			</div>


			




		
	);


}
			