import React from 'react'
import AddPiece from './formComponents/AddPiece'
import AddTaller from './formComponents/AddTaller'
import AddSeminario from './formComponents/AddSeminario'
import DeleteItem from './formComponents/DeleteItem'

class Inventory extends React.Component {
  state = {
    viewState: 'delete'
  }
  toggleViewState(viewState) {
    this.setState(() => ({ viewState }))
  }
  render() {
     return (
       <div>
          <div className="flex my-6">
            <p role="button" className="mr-4 cursor-pointer hover:text-primary" onClick={() => this.toggleViewState('delete')}>Delete Item</p>
            <p role="button" className="mr-4 cursor-pointer hover:text-primary" onClick={() => this.toggleViewState('addPiece')}>Add Piece</p>
            <p role="button" className="mr-4 cursor-pointer hover:text-primary" onClick={() => this.toggleViewState('addTaller')}>Add Taller</p>
            <p role="button" className="cursor-pointer hover:text-primary" onClick={() => this.toggleViewState('addSeminario')}>Add Seminario</p>
          </div>
          {
            this.state.viewState === 'delete' ? (
              <DeleteItem />
            ) : this.state.viewState === 'addPiece' ? (
              <AddPiece />
            ) : this.state.viewState === 'addTaller' ? (
              <AddTaller /> 
            ) :  (
              <AddSeminario />
            )
          }
          <button onClick={this.props.signOut} className="mt-4 bg-primary hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign Out
          </button>
       </div>
     )
  }
}

export default Inventory