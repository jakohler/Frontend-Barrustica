import React from 'react';
import axios from 'axios';

const initialState = {
  name: '',
  style: '',
  image: '',
  description: ''
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
    const { name, style, image, description } = this.state
    if (!name || !style || !description || !image) return;

    const data = {
      name: this.state.name,
      style: this.state.style,
      description: this.state.description,
      image: this.state.image,
      idArtist: 0
    };

    try {
      const response = await axios.post('http://127.0.0.1:5132/Art/AddPiece', data);
      if (response.status === 200) {
        console.log('Item agregado exitosamente');
        this.clearForm();
      }
    } catch (error) {
      console.error('Error al agregar el artículo:', error);
    }
  }

  render() {
    const {
      name, style, description, image
    } = this.state
    return (
      <div>
        <h3 className="text-3xl">Add Piece</h3>
        <div className="flex flex-1 justify-center">
          <div className="w-full max-w-144">
            <form className="bg-white shadow-xs rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Item name
                </label>
                <input
                onChange={this.onChange}
                value={name} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Item name" name="name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="style">
                  Item style
                </label>
                <input
                onChange={this.onChange}
                value={style} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="style" type="text" placeholder="Item style" name="style" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  Item Description
                </label>
                <input
                onChange={this.onChange}
                value={description} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Item Description" name="description" />
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
                  Add Item
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