import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="container">
            <Link className="btn btn-primary btn-sm" to="/">
            Voltar para página inicial
            </Link>
                <h1 className="text-primary py-3">Dashboard de vendas</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Todas as vendas</h5>
                        <DonutChart />
                    </div>

                    <div className="py-3">
                        <h2 className="text-primary">Todas as vendas</h2>
                    </div>


                </div>
                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
