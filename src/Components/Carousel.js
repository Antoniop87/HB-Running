import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = () => {
    return (
      <Carousel
        autoPlay={true} // para fazer o carrossel passar automaticamente
        infiniteLoop={true} // para que o carrossel sempre comece do início após a última imagem
        showArrows={false} // para remover as setas de navegação
        showStatus={false} // para remover o indicador de progresso
        showThumbs={false} // para remover as miniaturas das imagens
        interval={2000} // tempo de transição entre as imagens em milissegundos
        className="w-full" // para fazer as imagens ocuparem toda a largura da tela e a altura da tela
      >
        <div>
          <img src="./Imgs/imagem1.jpg" alt="Imagem 1" />
        </div>
        <div>
          <img src="./Imgs/imagem2.jpg" alt="Imagem 2" />
        </div>
        <div>
          <img src="./Imgs/imagem3.jpg" alt="Imagem 3" />
        </div>
        <div>
          <img src="./Imgs/imagem4.jpg" alt="Imagem 3" />
        </div>
        <div>
          <img src="./Imgs/imagem5.jpg" alt="Imagem 3" />
        </div>
      </Carousel>
    );
  };
  
  export default MyCarousel;