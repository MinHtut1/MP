import 'bootstrap/dist/css/bootstrap.css'
import Image from "next/image";
import styles from "./page.module.css";
import HelloWorld,{Another} from "./components/HelloWorld";
import JsxExample from "@/app/components/JsxExample";
import Avatar from "@/app/components/Avatar";
import Greet from "@/app/components/Greet";
import Profile from "@/app/components/Profile";
import ItemList from "@/app/components/ItemList";
import CustomeButton from "@/app/components/CustomeButton";
import Counter from "@/app/components/Counter";
import ListDynamic from "@/app/components/ListDynamic";
import SpecificCounter from "@/app/components/SpecificCounter";
import Clock from "@/app/components/Clock";
import ToDoListUI from "@/app/components/ToDoListUI";
import Tab from "@/app/components/Tab";
import ResetCounter from "@/app/components/ResetCounter";
import CounterReducer from "@/app/components/reducer/CounterReducer";
import TodoListWithReducer from "@/app/components/reducer/TodoListWithReducer";

export default function Home() {
    const items = ["one","two","three"]
  return (
      <main >
      <div >
          {/*<HelloWorld/>*/}
          {/*<JsxExample/>*/}
          {/*<Avatar/>*/}
          {/*<Greet message={"Hello World"}
                  label={"Not Something"}/>
              <Greet message={"Good Evening"} />
          <Greet/>*/}
          {/*<Profile isAdmin={false}/>
              <Profile isAdmin={true} />*/}
          {/*<ItemList items={items}/>*/}
          {/*<CustomeButton/>*/}
          {/*{<Counter/>}
          {<Counter/>}*/}
          {/*<ListDynamic/>*/}
          {/*<SpecificCounter/>*/}
          {/*<Clock/>*/}
          {/*<ToDoListUI/>*/}
          {/*<Tab headers={['Tab1', 'Tab2', 'Tab3']}>
              <div>
                  Pag 1
              </div>

              <div>
                  Pag 2
              </div>

              <div>
                  Pag 3
              </div>
          </Tab>*/}
          {/*<ResetCounter/> */}
          {/*<CounterReducer/>*/}
          <TodoListWithReducer/>
          </div>
      </main>
  )
}
