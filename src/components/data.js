import erizos from '../components/imagenes/erizos.jpg'
import pailaMarina from '../components/imagenes/paila-marina.jpg'
import machaParmesana from '../components/imagenes/machas.parmesana.jpg'
import chupeJaiba from '../components/imagenes/chupe.jaiba.jpg'
import locos from '../components/imagenes/locos.mayo.jpg'
import camaronesPilpil from '../components/imagenes/camarones_al_pilpil.png'
import mixMariscos from '../components/imagenes/mix_de_mariscos.png'
import atun from '../components/imagenes/atun.png'
import pailaPilpil from '../components/imagenes/paila_al_pilpil.png'
import tiramisu from '../components/imagenes/tiramisu.png'
import panna_cotta from '../components/imagenes/panna_cotta.png'
import panquequePlatano from '../components/imagenes/panqueque_de_platano.png'

const menu = [
    {
      id: 1,
      title: 'Erizos',
      category: 'Entradas Frías',
      price: "$15.000",
      img: erizos,
      desc: `Erizos bañados en su salsa, convinada con perejil y especias `,
    },
    {
      id: 2,
      title: 'Locos',
      category: 'Entradas Frías',
      price: "$16.000",
      img: locos,
      desc: `Locos Frescos con diferentes salsas `,
    },
    {
      id: 3,
      title: 'Mix de Mariscos',
      category: 'Entradas Frías',
      price: "$13.500",
      img: mixMariscos,
      desc: `5 mariscos marinados con salsa de hierbas, mayonesa de la casa y pebre  `,
    },
    {
      id: 4,
      title: 'Chupe de Jaiba',
      category: 'Plato de Fondo',
      price: "$14.000",
      img: chupeJaiba,
      desc: `Chupe de jaiba con queso parmesano `,
    },
    {
      id: 5,
      title: 'Atún con Papas',
      category: 'Plato de Fondo',
      price: "$15.000",
      img: atun,
      desc: `Atún cocinado en su punto con papas fritas `,
    },
    {
      id: 6,
      title: 'Camarones al Pil Pil',
      category: 'Plato de Fondo',
      price: "$13.000",
      img: camaronesPilpil,
      desc: `Camarones al pil pil con crema y cacho de cabra`,
    },
    {
      id: 7,
      title: 'Machas a la Parmesana',
      category: 'Plato de Fondo',
      price: "$15.000",
      img: machaParmesana,
      desc: `Machas con queso parmesano cocidas en vino blanco`,
    },
    {
      id: 8,
      title: 'Mix de Mariscos al Pil Pil',
      category: 'Plato de Fondo',
      price: "$14.000",
      img: pailaPilpil,
      desc: `Mix de sabores marinos al pil pil`,
    },
    {
      id: 9,
      title: 'Paila Marina',
      category: 'Plato de Fondo',
      price: "$13.000",
      img: pailaMarina,
      desc: `Paila Marina con frutos del mar y pescado`,
    },

    {
        id: 10,
        title: 'Tiramisu',
        category: 'Postre',
        price: "$4.500",
        img: tiramisu,
        desc: `Postre Tiramisu acompañado con helado`,
      },

      {
        id: 11,
        title: 'Panqueque de Platano',
        category: 'Postre',
        price: "$4.500",
        img: panquequePlatano,
        desc: `Panqueque de platanos dorados`,
      },

      {
        id: 12,
        title: 'Panna Cotta',
        category: 'Postre',
        price: "$4.500",
        img: panna_cotta,
        desc: `Panna cotta de chocolate`,
      },
  ];
  export default menu;