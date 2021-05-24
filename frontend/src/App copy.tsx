import BarCharts from 'components/BarCharts';
import DonutChart from 'components/DonutChart';
import DataTable from 'components/DataTable';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import React from 'react';


function App() {
  return (
    <>
      <NavBar />
      <div className="Container">
        <h1 className="text-primary py-3" >Dashboard de Vendas</h1>

        <div className="row px-3">
          <div className="col sm-6" >
            <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
            <BarCharts />
          </div>

          <div className="col sm-6" >
            <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
            <DonutChart />
          </div>
        </div>
        

            <div className = "py-3">
              <h2 className = "text-primary">Todas Vendas</h2>
            </div>

        < DataTable />

      </div>

      <Footer />
    </>
  );
}

export default App;