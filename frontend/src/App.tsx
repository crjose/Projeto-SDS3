import DataTable from 'components/DataTable';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import React from 'react';


function App() {
  return (
    <>
      <NavBar />
      <div className="Container">
        <h1 className="text-primary" > Olá Mundo!</h1>
        
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;