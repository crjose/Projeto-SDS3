import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { isAssertionExpression } from 'typescript';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels: string[];
    series: number[];
}




const DonutChart = () => {

    useEffect(() => {
        // modo + elegante
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
            .then(response => {
                //TRATANDO OS DADOS DA API 
                const data = response.data as SaleSum[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => x.sum);

                setChartData({ labels: myLabels, series: mySeries });

            });
    }, [])

    //Forma certa
    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    //forma errada linha abaixo ao declarar variável let ou outra qualquer nesse contexto
    //let chartData : ChartData ={labels : [] , series : []};

    // Forma ERRADAmodo simples
    //axios.get(BASE_URL + '/sales/amount-by-seller')

    // modo + elegante
    //axios.get(`${BASE_URL}/sales/amount-by-seller`)
    //    .then( response => {
    //        TRATANDO OS DADOS DA API 
    //        const data = response.data as SaleSum[];
    //       const myLabels = data.map(x => x.sellerName);
    //       const mySeries = data.map(x => x.sum);

    //       setChartData ({ labels :myLabels , series : mySeries });
    //       console.log(chartData);
    //   });

    //dados estáticos abaixo mockData
    //const mockData = {
    //    series: [477138, 499928, 444867, 220426, 473088],
    //    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    //}

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart

            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />

    );
}

export default DonutChart;

