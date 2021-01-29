import React from 'react'
import PropTypes from 'prop-types';

function Food({name,picture,rating}){
    return (
      <div>
        <h3>I like {name}</h3>
        <h4>Rating {rating}/5</h4>
        <img src={picture} alt=""/>
      </div>
    );
}




const foodILike = [
  {
  'id': 1,
  'name': 'pizza',
  'image': 'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/ciasto_na_pizze_00.jpg',
  'rating': '4.5'
  },
  {
  'id': 2,
  'name': 'pasta',
  'image': 'https://www.saltandlavender.com/wp-content/uploads/2020/04/tomato-goat-cheese-pasta-recipe-1-500x500.jpg',
  'rating': '4.2'
  },
  {
  'id': 3,
  'name': 'risotto',
  'image': 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Parmesan-Risotto_EXPS_HPLBZ18_33569_B05_18_5b.jpg',
  'rating': '4.0'
  }
]
Food.propTypes={
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />

}




function App() {
  return (
    <div className="App">
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;

