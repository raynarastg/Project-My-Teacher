import { Box } from '@mui/material';
import type { NextPage } from 'next';
import { Professor } from '../src/@types/professor';
import Lista from '../src/components/Lista/Lista';


const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: 'Raynara',
      foto: 'https://avatars.githubusercontent.com/u/102389952?v=4',
      descricao: 'rindo atoa',
      valor_hora: 300,
    },
    {
      id: 1,
      nome: 'Daniel',
      foto: 'https://avatars.githubusercontent.com/u/51061212?v=4',
      descricao: 'coração de mãe',
      valor_hora: 300,
    },
    {
      id: 1,
      nome: 'Marcela',
      foto: 'https://avatars.githubusercontent.com/u/94760136?v=4',
      descricao: 'ama os anos 2000 e this is us',
      valor_hora: 300,
    },
    {
      id: 1,
      nome: 'Laura',
      foto: 'https://avatars.githubusercontent.com/u/102552568?v=4',
      descricao: 'a louca do baseado em fatos reais',
      valor_hora: 300,
  },
]

  return (
    <Box sx={{ backgroundColor: '#F5F5F5'}}>

      <Lista professores={professores}></Lista>

    </Box>
  )
}

export default Home
