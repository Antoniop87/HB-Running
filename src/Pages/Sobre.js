import Header from "../Components/Header";
import { useEffect } from "react";

function Sobre(){

    useEffect(() => {
        document.title = 'HB Running';
    }, []);

    return(
        <body>
            <Header/>
        <div>
            <div className="flex flex-col mt-40 sm:mt-10 lg:flex-row items-center justify-center h-screen">
                <div class="m-4 lg:ml-4">
                    <img className="" src="./Imgs/Banner2.jpeg" width="400px" alt="Imagem" />
                </div>
                <div class="w-full lg:w-1/2 p-4 text-center lg:text-left">
                    <h1 class="text-2xl font-bold mb-4">Quem é a HB Running?</h1>
                    <p class="text-lg">A HB Running nasceu para atender alunos e atletas na prática de corrida, Funcional, TAF e etc. Hoje é uma das maiores e mais completas Assessoria Esportiva do mercado, que proporciona a prática esportiva em diversas modalidades e formatos.</p>
                    <h1 class="text-2xl font-bold mt-5">Quem a HB Running atende?</h1>
                    <p class="text-lg mt-5 ">HB Running tem como objetivo promover a prática esportiva com metodologia, qualidade e resultado. Conta com um time de especialistas pronto para atender desde alunos iniciantes até atletas de alta performance.</p>
                </div>
            </div>
        </div>
        </body>
        
    )
}

export default Sobre;