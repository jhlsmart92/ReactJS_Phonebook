// import React, {Component} from 'react';
// import PhoneForm from './components/PhoneForm';
// import './App.css';
// import PhoneInfoList from './components/PhoneInfoList';

// class App extends Component {
  
//   id = 0;

//   state = {
//     information: [
//     {
//       id: 0,
//       name: '홍길동',
//       phone: '010-0000-0000'
//     },
//     {
//       id: 1,
//       name: '홍길일',
//       phone: '010-0000-0000'
//     },
//     {
//       id: 2,
//       name: '홍길이',
//       phone: '010-0000-0000'
//     }
//   ],
    
//   }

//   handleCreate = (data) =>{
//     const{ information } = this.state;
//     this.setState({
//       information: information.concat(Object.assign({}, data, {
//         id: this.id++
//       }))
//     });
//   }

//   handleUpdate = (id, data) => {
//     const {information} = this.state;
//     this.state.setState({
//       information: information.map(
//         info => {
//           if(info.id === id) {
//             return {
//               id,
//               ...data,
//             };
//           }
//           return info;
//         }
//       )
//     });
//   }

//   handleRemove = (id) => {
//     const {information} = this.state;
//     this.setState({
//       information: information.filter(info => info.id !== id)
//     });
//   }

//   render() {
//     return (
//       <div>
//         <PhoneForm onCreate = {this.handleCreate}/>
//         <PhoneInfoList data = {this.state.information} 
//                       onRemove = {this.handleRemove}
//                       onUpdate = {this.handleUpdate}
//                       />
//       </div>
//     );

//   }

// }

// export default App;

import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  id = 0;

  state = {
    information: []
  };

  handleCreate = data => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++
      })
    });
  };

  handleRemove = id => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  };

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(info => {
        if (info.id === id) {
          return {
            id,
            ...data
          };
        }
        return info;
      })
    });
  };

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList
          data={this.state.information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
