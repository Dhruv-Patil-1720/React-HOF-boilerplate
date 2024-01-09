import React from "react";

export default class HigherOrderComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
        { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
        { id: '4', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
        { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
      ],
      filterUsingType: [],
      filterUsingFirstletter: [],
      filterdataUsingAge: [],
      total: 0
    };
  }

  componentDidMount() {
    // Move the filtering logic into componentDidMount
    let filterData = this.state.userData.filter((el) => el.user_type === "Designer");
    this.setState({ filterUsingType: filterData });

    let filterName = this.state.userData.filter((el) => el.name.startsWith("J"));
    this.setState({ filterUsingFirstletter: filterName });

    let filterDataUsingAge = this.state.userData.filter((el) => el.age > 28 && el.age <= 50);
    this.setState({ filterdataUsingAge: filterDataUsingAge });

    let total = this.state.userData
      .filter((el) => el.user_type === "Designer")
      .reduce((acc, el) => acc + el.years, 0);

    this.setState({ total: total });
  }
  render() {
    return (
      <>
      
        <h1>Display all items </h1>
        <div style={{border:"2px solid black", width:"600px",marginLeft:"25%"}}>
        {this.state.userData.map((el) => (
          <div key={el.id}  style={{ display:"flex",justifyContent:"center",gap:"50px", width:"600px", margin:"auto",color:"blue"}}>
            <p>id: {el.id}</p>
            <p>Name: {el.name}</p>
            <p>User_type: {el.user_type}</p>
          </div>
        ))}</div>
        
        <h1>Display based on User Type</h1>
        <div style={{border:"2px solid black", width:"600px",marginLeft:"25%"}}>
        {this.state.filterUsingType.map((el) => (
          
            <div key={el.id} style={{ display:"flex",justifyContent:"center",gap:"50px",width:"600px", margin:"auto",color:"blue"}}>
            <p>id: {el.id}</p>
            <p>Name: {el.name}</p>
            <p>User_type: {el.user_type}</p>
          </div>
           
          
          
        ))}</div>
        <h1>Filter all data starting with J</h1>
        <div style={{border:"2px solid black", width:"600px",marginLeft:"25%"}}>
        {this.state.filterUsingFirstletter.map((el) => (
          <div key={el.id} style={{ display:"flex",justifyContent:"center",gap:"50px",width:"600px", margin:"auto",color:"blue"}}>
            <p>id: {el.id}</p>
            <p>Name: {el.name}</p>
            <p>User_type: {el.user_type}</p>
          </div>
        ))}</div>
        <h1>Filter all data based on age greater 28 and less than or equal to 50 </h1>
        <div style={{border:"2px solid black", width:"600px",marginLeft:"25%"}}>
        {this.state.filterdataUsingAge.map((el) => (
          <div key={el.id} style={{ display:"flex",justifyContent:"center",gap:"50px", width:"600px", margin:"auto",color:"blue"}}>
            <p>id: {el.id}</p>
            <p>Name: {el.name}</p>
            <p>User_type: {el.user_type}</p>
          </div>
        ))}</div>
        <h1>Find the total years of Designer</h1>
        <p style={{border:"2px solid black", width:"600px",marginLeft:"25%"}}>{this.state.total} </p>
      </>
    );
  }
}
