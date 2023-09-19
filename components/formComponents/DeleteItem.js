import React from 'react';
import axios from 'axios';

const initialState = {
  type: '',
  image: ''
}

class AddInventory extends React.Component {
  state = initialState

  clearForm = () => {
    this.setState(() => (initialState))
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  addItem = async () => {
    const { type, image } = this.state
    if (!type || !image) return;
    
    try {
      const response = await axios.delete(`http://localhost:5132/Art/DeleteItem?image=${this.state.image}&type=${this.state.type}`);
      if (response.status === 200) {
        console.log('Item eliminado exitosamente');
        this.clearForm();
      }
    } catch (error) {
      console.error('Error al eliminar el artículo:', error);
    }
  }

  render() {
    const {
      type, image
    } = this.state
    return (
      <div>
        <h3 className="text-3xl">Delete Item</h3>
        <div className="flex flex-1 justify-center">
          <div className="w-full max-w-144">
            <form className="bg-white shadow-xs rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Item type (piece, taller, seminario)
                </label>
                <input
                onChange={this.onChange}
                value={type} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="type" type="text" placeholder="Item type" name="type" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="item image">
                  Item image
                </label>
                <input
                onChange={this.onChange}
                value={image} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="image" type="text" placeholder="Item image" name="image" />
              </div>
              <div className="flex items-center justify-between mt-4">
                <button onClick={this.addItem} className="bg-primary hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Delete Item
                </button>
                <a onClick={this.clearForm} className="inline-block align-baseline font-bold text-sm" href="#">
                  Clear Form
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddInventory