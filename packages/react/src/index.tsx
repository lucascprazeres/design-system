import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  padding: '$4',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
})

export function App() {
  return <Button>Hello world</Button>
}
