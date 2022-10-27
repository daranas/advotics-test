import './style.scss';

const Products = () => {
  return (
    [...Array(4)].map((arr, i) => (
        <article>
          <img src="https://placehold.jp/60x60.png" alt="product"/>
          <div>
            <h3>Nama Produk {i + 1}</h3>
            <h5>Rp. XXX XXX <span>200</span></h5>
          </div>
        </article>
      )
    )
    
  )
}

export default Products;