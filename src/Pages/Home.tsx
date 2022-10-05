import {useState} from 'react'

// Style
import '../Styles/HomeStyle.css'

// State G
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../app/Store'

// Id
import { v4 as uuidv4 } from 'uuid';

// actions 
import {agregarTarea, eliminarTarea} from '../redux/TareaSlice'

interface Datos {
  name?: string;
  id?: string;
}

const Home = () => {
  // State Redux
  const data = useSelector((state: RootState) => state.tarea)
  // Dispatch Redux
  const dispatch = useDispatch()
  const [text, setText] = useState<string>('')
  const [boo, setBoo] = useState<boolean>(false)

  const $HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const Obje: Datos = {
      name: text,
      id: uuidv4()
    }
    setText('')
    dispatch(agregarTarea(Obje))
  }

  const $HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const $HandleClick = (id: string) => {
    dispatch(eliminarTarea(id))
  }

  const $HandleClickCheck = () => {
    setBoo(!boo)
  }


  return (
    <div className='contenedor-home'>
      <div className='div-titulo'>
        <h1 className='titulo-home'>Tareas Diarias</h1>
      </div>
      <div className='div-input'>
        <form onSubmit={$HandleSubmit}>
          <input 
          type="text" 
          onChange={$HandleChange}
          value={text}
          className='input'
          placeholder='Agrega una tarea'
          />
           <button type='submit' className='btn-one'>Send</button>
        </form>
      </div>

      <div>
        {
          data.map((item) => {
            return (
              <div key={item.id} className='div-items'>
                <div>
                  <input type="checkbox" onClick={$HandleClickCheck}/>
                </div>

                <div>
                  <h3 className={boo ? 'color' : 'titulo-tarea'} >{item.name}</h3>
                </div>
                
                <div>
                  <button onClick={() => $HandleClick(item.id)} className='btnTwo'>Delete</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home