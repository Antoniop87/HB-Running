import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { useEffect } from "react";
import MyCarousel from "../Components/Carousel";

function Home() {

    useEffect(() => {
        document.title = 'HB Running';
    }, []);

    return (
        <body>
            <Header />
            <div className="flex justify-center items-center">
                <MyCarousel/>
            </div>
            <div class="flex flex-col sm:flex-row sm:mt-20 mt-20 p-4">
                <div class="w-full sm:w-1/2 bg-blue-800 p-24">
                    <h1 className=" text-xl text-white font-semibold">Corrida</h1>
                    <p className=" text-blue-200">Assessoria Esportiva HB Running</p>
                </div>
                <div class="w-full sm:w-1/2 bg-blue-700 p-24">
                    <h1 className=" text-xl text-white font-semibold">Funcional</h1>
                    <p className=" text-blue-200">Assessoria Esportiva HB Running</p>
                </div>
                <div class="w-full sm:w-1/2 bg-blue-600 p-24">
                    <h1 className=" text-xl text-white font-semibold">Musculação</h1>
                    <p className=" text-blue-200">Assessoria Esportiva HB Running</p>
                </div>
                <div class="w-full sm:w-1/2 bg-blue-500 p-24">
                    <h1 className=" text-xl text-white font-semibold">TAF</h1>
                    <p className=" text-blue-200">Assessoria Esportiva HB Running</p>
                </div>
            </div>
            <div>
                <h1 className=" text-xl text-center m-2 sm:text-3xl">Conheca mais sobre nós</h1>
            </div>
            <div className="flex flex-col mt-40 sm:mt-10 lg:flex-row items-center justify-center h-screen">
                <div class="m-4 lg:ml-4">
                    <img className="" src="./Imgs/bannernovo.jpeg" width="400px" alt="Imagem" />
                </div>
                <div class="w-full lg:w-1/2 p-4 text-center lg:text-left">
                    <h1 class="text-2xl font-bold mb-4">Quem é a HB Running?</h1>
                    <p class="text-lg">A HB Running nasceu para atender alunos e atletas na prática de corrida, Funcional, TAF e etc. Hoje é uma das maiores e mais completas Assessoria Esportiva do mercado, que proporciona a prática esportiva em diversas modalidades e formatos.</p>
                    <h1 class="text-2xl font-bold mt-5">Quem a HB Running atende?</h1>
                    <p class="text-lg mt-5 ">HB Running tem como objetivo promover a prática esportiva com metodologia, qualidade e resultado. Conta com um time de especialistas pronto para atender desde alunos iniciantes até atletas de alta performance.</p>
                </div>
            </div>
            <div className=" flex flex-col bg-blue-600 p-28 mt-36 sm:mt-5">
                <h1 className="text-center text-4xl text-white font-semibold">+ de 1000 alunos</h1>
                <p className="text-center text-white">Oferecemos uma Assessoria Esportiva com treinamentos presencial e online de corrida, musculação, funcional e TAF. Ficou interessado? Entre em contato e agende a sua aula experimental totalmente gratis.</p>
                <Link to="/Contato" className=" mt-16 text-center p-4 bg-yellow-300 text-white hover:bg-yellow-400">Contato</Link>
            </div>
        </body>
    )
}

export default Home;