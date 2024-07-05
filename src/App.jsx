import { Twet } from "./Twet";
function App(){
  return (
    <div className='text-content'>
     <Twet name="jean" content="je suis la" like={60}/>
     <Twet name="ousmane" content="je suis la" like={30}/>
     <Twet name="ali" content="je suis la" like={45}/>
     <Twet name="mariam" content="je suis la" like={0}/>
     <Twet name="alice" content="je suis la" like={20}/>
    </div>
  )
}

export default App;