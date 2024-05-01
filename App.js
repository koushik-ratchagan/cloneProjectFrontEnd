import { Text, SafeAreaView, StyleSheet } from "react-native";
import AuthStack from "./Navigation/AuthStack";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/rootReducer";
import productSaga from "./redux/rootSaga";
import createSagaMiddleware from "redux-saga";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(productSaga);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AuthStack />
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
