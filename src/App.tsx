import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { createServer } from 'miragejs';
import { GlobalStyle } from "./styles/global";

createServer({
  routes() {
    this.namespace = 'api' //base das rotas
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'transaction 1',
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
})

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}