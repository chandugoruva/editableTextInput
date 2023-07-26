import {useState} from 'react'
import {
  MainDiv,
  CardDiv,
  Heading,
  Input,
  Button,
  InputDiv,
  Paragraph,
} from './styledComponents'

const Home = () => {
  const [input, setInput] = useState('')
  const [isClicked, setClicked] = useState(false)
  const onChangeInput = event => {
    setInput(event.target.value)
  }
  const changeText = () => {
    setClicked(prevState => !prevState)
  }
  const ButtonText = isClicked ? 'Edit' : 'Save'
  return (
    <MainDiv>
      <CardDiv>
        <Heading>Editable Text Input</Heading>
        <InputDiv>
          {isClicked ? (
            <Paragraph>{input}</Paragraph>
          ) : (
            <Input type="text" value={input} onChange={onChangeInput} />
          )}
          <Button onClick={changeText}>{ButtonText}</Button>
        </InputDiv>
      </CardDiv>
    </MainDiv>
  )
}
export default Home
